
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  logging: false,
  timezone: '-03:00',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
}
