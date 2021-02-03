require("dotenv").config();
const app = require("./app");
const { seed } = require("./knex");
const db = require("./knex");
const seedingLocations = require("../data/locationsimport");
const seedingGasPrices = require("../data/gasimport");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations...");
    await db.migrate.latest();
    
    console.log("seeding database");
    await seedingLocations();
    await seedingGasPrices();

    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
