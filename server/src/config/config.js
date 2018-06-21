module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'surfing',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    options: {

      port: 3307,
      dialect: process.env.DB_NAME || 'mysql',
      host:  process.env.DB_NAME || 'localhost',
      storage: './tabtracker.sqlite'
    }
  }
}
