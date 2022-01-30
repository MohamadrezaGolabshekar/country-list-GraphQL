const { BASE_CURRENCY } = require("../../constants");
const axios = require("axios");
const { setRedis } = require("../redis");

// the Api just works with base = EUR in free plan for me so I calculate SEK rate
const setCurrencyRates = async () => {
  try {
    console.log("get currency ...!!");
    const resp = await axios.get(
      `http://data.fixer.io/api/latest?access_key=${
        process.env.FIXER_TOKEN || "c2c19edc3b611176c7341f64ab9b4ce6"
      }&format=1`
    );
    const rates = resp.data.rates;
    const baseValue = rates[BASE_CURRENCY];
    Object.keys(rates).forEach((i) => {
      rates[i] = +(rates[i] / baseValue).toFixed(2);
    });
    setRedis(BASE_CURRENCY, JSON.stringify(rates));
  } catch (error) {
    setRedis(BASE_CURRENCY, null);
  }
};

module.exports = setCurrencyRates;
