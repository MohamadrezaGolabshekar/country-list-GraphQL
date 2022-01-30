const { verify } = require("../../helper/jwt");

const checkLoginMiddleware = (req, res, next) => {
  try {
    const isLogin = req.cookies && verify(req.cookies.authcookie);

    if (isLogin) {
      next();
    } else {
      res.status(401).send({ message: "you need login first", status: 401 });
    }
  } catch (error) {
    res.status(500).send({ message: "something went wrong", status: 500 });
  }
};

module.exports = checkLoginMiddleware;
