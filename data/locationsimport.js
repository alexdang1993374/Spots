const fs = require("fs");
const db = require("../server/knex.js");

const seedingLocations = async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    for (const location of locations) {
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SitePreferredName;
      const highway = location.Site.Highway;
      const city = location.Addresses[0].City;
      const state = location.Addresses[0].State;
      const site_id = location.Site.SiteId;
      const address = location.Addresses[0].Address1;
      const zip= location.Addresses[0].Zip;

      const result = await db("locations").insert({
        latitude,
        longitude,
        name,
        highway,
        city,
        state,
        site_id,
        address,
        zip,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
};

module.exports = seedingLocations;
