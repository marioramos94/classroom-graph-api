module.exports = {
    database: {
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true
      },
      omitNull: true
    }
  }