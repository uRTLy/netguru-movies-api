// ALIAS MODULES FOR BETTER PATH READIBILITY
require('module-alias/register');

const app = require('./app');
const { initDatabase } = require('@db');
const { normalizePort } = require('@util');

async function appInit() {
  const port = normalizePort(process.env.SERVER_PORT);
  app.set('port', port);

  try {
    const server = await app.listen(port);
    await initDatabase();
    console.log('Server listening at:', port);
  } catch (e) {
    console.log(e, 'ERROR', e.message);
  }
}

appInit();
