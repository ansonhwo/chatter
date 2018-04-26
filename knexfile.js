exports.development = {
  client: 'pg',
  connection: {
    user: 'super',
    database: 'chatter'
  },
  seeds: {
    directory: './seeds/dev'
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
};

exports.production = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  seeds: {
    directory: './seeds/prod'
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
};
