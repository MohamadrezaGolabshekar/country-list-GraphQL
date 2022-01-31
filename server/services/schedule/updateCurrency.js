const cron = require("node-cron");
const setCurrencyRates = require("../currency/setCurrencyRates");

// it runs every 8 hours and update currency rates
const updateCurrencyTask = cron.schedule("0 0/8 * * *", async () => {
  console.log("currency rates is updated now");
  return await setCurrencyRates();
});

module.exports = updateCurrencyTask;
