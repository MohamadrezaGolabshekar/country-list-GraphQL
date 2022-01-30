const { sign } = require("../helper/jwt");
const { setRedis } = require("../services/redis");

const login = (req, res) => {
  const userName = "testUser"; //fake username
  setRedis(userName, JSON.stringify({ requestCountPerMin: 0 }));
  res
    .cookie("authcookie", sign(), { maxAge: 24 * 60 * 1000, httpOnly: true })
    .send();
};

module.exports = login;
