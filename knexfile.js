// Update with your config settings.
require("dotenv").config();

module.exports = {

  development: {
    client: "postgres",
    connection: {
      host:     process.env.DB_HOSTLOCAL || "127.0.0.1",
      database: process.env.DB_NAMELOCAL || "truckstop",
      user:     process.env.DB_USERLOCAL,
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
