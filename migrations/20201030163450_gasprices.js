exports.up = function(knex) {
    return knex.schema.createTable("gas_prices", (table) => {
      table.increments('id');
  
      table.integer("site_id").notNullable();
  
      table.text("fuel_type");
  
      table.float("cash_price");

      table.foreign("site_id").references('site_id').inTable('locations');
      
      table.unique(["site_id","fuel_type","cash_price"]);
    });
  };
  
  exports.down = function(knex, Promise) {};
  //