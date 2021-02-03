exports.up = function(knex) {
  return knex.schema.table("locations", (table) => {

    table.text("highway");

    table.text("city");

    table.text("state");

  });
};

exports.down = function(knex, Promise) {};

//adding city, state, and highway to locations table