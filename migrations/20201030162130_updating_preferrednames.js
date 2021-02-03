
exports.up = function(knex) {
  return knex.schema.table("locations", (table) => {

    table.integer("site_id").notNullable().unique();

  });
};
exports.down = function(knex) {
  
};
