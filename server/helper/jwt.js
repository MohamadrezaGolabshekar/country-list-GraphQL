const jwt = require("jsonwebtoken");

const SECRET_KEY = "my_secret_key"; // it should be in safe place not here

const sign = () => jwt.sign({ user: "testUser" }, SECRET_KEY);

const decode = (token) => {
  return jwt.verify(token, SECRET_KEY, (err, data) => {
    if (err) {
      return null;
    }
    return data;
  });
};

const verify = (token) => {
  return jwt.verify(token, SECRET_KEY, (err, data) => {
    if (err || !data.user) {
      return false;
    }
    return true;
  });
};

module.exports = { sign, verify, decode };
