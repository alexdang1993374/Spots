// const fs = require("fs");
// const db = require("../server/knex.js");

// const seeding = async () => {
//   try {
//     const locations = JSON.parse(fs.readFileSync(__dirname + "/locations.json"));
//     for (const location of locations) {
//       const id = location.Site.SiteId;
//       const latitude = location.Site.Latitude;
//       const longitude = location.Site.Longitude;
//       const name = location.Site.SiteName;

//       const result = await db("locations").insert({
//         id,
//         latitude,
//         longitude,
//         name,
//       });
//       console.log(result);
//     }
//   } catch (err) {
//     console.error("Error inserting records", err);
//   }
// };

// module.exports = seeding;
