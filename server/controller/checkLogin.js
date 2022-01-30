const { verify, sign } = require("../helper/jwt");

const checkLogin = (req, res) => {
  try {
    const isLogin = req.cookies && verify(req.cookies.authcookie);
    if (isLogin) {
      res
        .cookie("authcookie", sign(), {
          maxAge: 24 * 60 * 1000,
          httpOnly: true,
        })
        .send();
    } else {
      res.status(401).send({ message: "you need login first", status: 401 });
    }
  } catch (error) {
    res.status(500).send({ message: "something went wrong", status: 500 });
  }
};

module.exports = checkLogin;
