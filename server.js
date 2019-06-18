const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const chalk = require('chalk');
const helmet = require('helmet');
const expressValidator = require('express-validator');
const compression = require('compression');
const bodyParser = require('body-parser');

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
server.use(logger('dev'));
server.use(helmet());
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(expressValidator());
server.use(compression());

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
