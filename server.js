const express = require('express');
const dotenv = require('dotenv');
const chalk = require('chalk');

/**
 * Load environment variables
 */
dotenv.config();

/**
 * Controllers
 */
const apiController = require('./src/controllers/api');

/**
 * Create Express server
 */
const server = express();

/**
 * Express config
 */
server.set('host', '0.0.0.0');
server.set('port', process.env.PORT || 8080);

/**
 * API routes
 */
server.get('/', apiController.index);

/**
 * Start server
 */

// `supertest` will start server automatically
if (process.env.NODE_ENV !== 'test') {
  server.listen(server.get('port'), () => {
    console.log(
      '%s App is running at http://localhost:%d in %s mode',
      chalk.green('✓'),
      server.get('port'),
      server.get('env')
    );
    console.log('  Press CTRL-C to stop\n');
  });
}

module.exports = server;
