require('dotenv').config();

const { should, expect, assert } = require('chai');

const database = require('../src/js/database.js');

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
