const fs = require("fs");
const db = require("../server/knex.js");

const seedingGasPrices = async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );

    for (const location of locations) {
      const fuels = location.Site.FuelPrices;
      for (let fuel of fuels) {
        const fuel_type = fuel.FuelType;
        const cash_price = fuel.CashPrice;
        const site_id = fuel.SiteId;
        const result = await db("gas_prices").insert({
          site_id,
          fuel_type,
          cash_price,
        });
        console.log(result);
      }
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
};

module.exports = seedingGasPrices;

//notes
