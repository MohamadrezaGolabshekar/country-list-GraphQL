const Redis = require("ioredis");
const { REDIS_ENDPOINT_URI, REDIS_PASSWORD, REDIS_PORT } = process.env;
const sanitizeRedisUrl = (url) => url.replace(/^(redis\:\/\/)/, "");

const redis = new Redis({
  port: REDIS_PORT || 6379,
  host: REDIS_ENDPOINT_URI ? sanitizeRedisUrl(REDIS_ENDPOINT_URI) : "127.0.0.1",
  password: REDIS_PASSWORD || "",
  // db: 0,
  // connectTimeout: 10000,
  // lazyConnect: true
});

const setRedis = (key, value) => {
  redis.set(key, value);
};

const getRedis = async (key) => {
  const resp = await redis.get(key);
  console.log("resp in redis :: ", resp);
  try {
    return JSON.parse(resp);
  } catch {
    return resp;
  }
};

module.exports = { setRedis, getRedis };
