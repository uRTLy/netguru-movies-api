const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  NODE_ENV,
  POSTGRESS_POOL_MAX,
  POSTGRESS_POOL_MIN,
  POSTGRESS_POOL_ACQUIRE,
  POSTGRESS_POOL_IDLE
} = process.env;

const config = {
  development: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    dialect: 'postgres',
    pool: {
      max: POSTGRESS_POOL_MAX,
      min: POSTGRESS_POOL_MIN,
      idle: POSTGRESS_POOL_IDLE,
      acquire: POSTGRESS_POOL_ACQUIRE
    }
  },
  test: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    dialect: 'postgres',
    pool: {
      max: POSTGRESS_POOL_MAX,
      min: POSTGRESS_POOL_MIN,
      idle: POSTGRESS_POOL_IDLE,
      acquire: POSTGRESS_POOL_ACQUIRE
    }
  },
  production: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOST,
    dialect: 'postgres',
    pool: {
      max: POSTGRESS_POOL_MAX,
      min: POSTGRESS_POOL_MIN,
      idle: POSTGRESS_POOL_IDLE,
      acquire: POSTGRESS_POOL_ACQUIRE
    }
  }
};

module.exports = config[NODE_ENV];
