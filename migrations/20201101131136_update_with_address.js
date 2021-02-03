exports.up = function(knex) {
  return knex.schema.table("locations", (table) => {

    table.text("address");
    table.text("zip");

  });
};

exports.down = function(knex, Promise) {};