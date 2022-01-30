const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./services/graphql/schema");
const login = require("./controller/login");
const checkLogin = require("./controller/checkLogin");
const checkLoginMiddleware = require("./services/authentication/checkLoginMiddleware");
const rateLimitMiddleware = require("./services/permissions/rateLimitMiddleware");
const setCurrencyRates = require("./services/currency/setCurrencyRates");
const updateCurrencyTask = require("./services/schedule/updateCurrency");

const app = express();

app.use(cors({ credentials: true, origin: "*" }));
app.use(cookieParser());
app.use("/api/login", login);
app.use("/api/check-login", checkLogin);

app.use(
  "/api/graphql",
  checkLoginMiddleware,
  rateLimitMiddleware,
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`start on port ${PORT}`);
  setCurrencyRates();
  updateCurrencyTask.start();
});
