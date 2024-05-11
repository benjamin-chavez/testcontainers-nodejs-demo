module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'test',
      password: 'test1',
      database: 'postgrezz',
      port: process.env.PG_PORT,
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
  },
  development: {
    client: 'pg',
    connection: 'postgres://postgres:@localhost:32768/postgres',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
  },
};
