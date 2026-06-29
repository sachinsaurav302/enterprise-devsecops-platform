const { Pool } = require('pg');
const logger = require('../utils/logger');

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'devsecops_db',
};

const pool = new Pool(dbConfig);

// Handle unexpected errors on idle clients
pool.on('error', (err) => {
  logger.error('Unexpected error on idle PostgreSQL client', { error: err.message });
});

const testConnection = async () => {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT NOW()');
    logger.info('PostgreSQL connection established successfully', { timestamp: res.rows[0].now });
    return true;
  } catch (err) {
    logger.error('Failed to connect to PostgreSQL database', { error: err.message });
    throw err;
  } finally {
    client.release();
  }
};

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
  testConnection,
};
