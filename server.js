const express = require('express');
const dotenv = require('dotenv');
const chalk = require('chalk');

const server = express();

dotenv.config();

/**
 * Express config
 */
server.set('host', '0.0.0.0');
server.set('port', process.env.PORT || 8080);

/**
 * Start server
 */
server.listen(server.get('port'), () => {
  console.log(
    '%s App is running at http://localhost:%d in %s mode',
    chalk.green('✓'),
    server.get('port'),
    server.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});

module.exports = server;
