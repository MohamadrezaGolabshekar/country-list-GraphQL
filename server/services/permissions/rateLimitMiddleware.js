const { decode } = require("../../helper/jwt");
const { setRedis, getRedis } = require("../redis");
const { LIMIT_COUNT, LIMIT_SEC } = require("../../constants");

const rateLimitMiddleware = async (req, res, next) => {
  try {
    const decodedToken = req.cookies && decode(req.cookies.authcookie);
    const userName = decodedToken.user;
    const userInfo = await getRedis(userName);
    const nowTimestampInSec = new Date().getTime() / 1000;

    if (
      !userInfo.firstReqTimeInSec ||
      nowTimestampInSec - userInfo.firstReqTimeInSec > LIMIT_SEC
    ) {
      userInfo.firstReqTimeInSec = nowTimestampInSec;
      userInfo.requestCountPerMin = 1;
      setRedis(userName, JSON.stringify(userInfo));
      next();
    } else if (
      nowTimestampInSec - userInfo.firstReqTimeInSec <= LIMIT_SEC &&
      userInfo.requestCountPerMin < LIMIT_COUNT
    ) {
      userInfo.requestCountPerMin += 1;
      setRedis(userName, JSON.stringify(userInfo));
      next();
    } else {
      res.status(429).send({ message: "too many requests", status: 429 });
    }
  } catch (e) {
    res.status(500).send({ message: "something went wrong", status: 500 });
  }
};

module.exports = rateLimitMiddleware;
