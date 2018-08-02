const Sequelize = require('sequelize');
const dbConfig = require('./config');

const connection = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  dialect: 'postgres',
  host: dbConfig.host,
  port: 5432,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

async function initDatabase() {
  try {
    await connection.authenticate();
    await connection.sync();
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  connection,
  Sequelize,
  initDatabase
};
