const fs = require( 'fs' );
const knex = require( 'knex' );

const { constructTarget } = require('./utils.js');

let config;

if (process.env.TESTING) {
  config = {
    client: 'sqlite3',
    connection: {
      filename: "./test/testing.sqlite"
    }
  };
} else {
  config = {
    client: 'pg',
    connection: constructTarget()
  };
}

module.exports = knex(config);
