require('dotenv').config();

const path = require('path');
const fs = require('fs');
const { should, expect, assert } = require('chai');

const database = require('../src/js/database.js');

before(function() {
  return database.migrate.latest({
    directory: path.resolve(__dirname, '..', 'migrations')
  });
});

describe('Schema', function() {
  describe('Items table', function() {
    it('should exist', function() {
      database.schema.hasTable('items')
        .then(exists => {
          expect(exists).to.equal(true);
        });
    });
  });
});

after(function() {
  return database.migrate.rollback()
    .then(() => {
      database.destroy();
      fs.unlinkSync(path.resolve(__dirname, 'testing.sqlite'));
    });
});
