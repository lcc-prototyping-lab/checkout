require('dotenv').config();

const path = require('path');
const fs = require('fs');

const database = require('../src/js/database.js');

before(function() {
  return database.migrate.latest({
    directory: path.resolve(__dirname, '..', 'migrations')
  })
    .then(() => {
      database.seed.run({
        directory: path.resolve(__dirname, 'seeds')
      });
    });
});

after(function() {
  // return database.migrate.rollback()
  //   .then(() => {
  //     database.destroy();
  //     fs.unlinkSync(path.resolve(__dirname, 'testing.sqlite'));
  //   });
  // database.destroy();
});
