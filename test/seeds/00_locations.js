const faker = require('faker');

faker.seed(10000);
const entries = [];

for (let i = 0; i < 10; i++) {
  entries.push({
    name: faker.company.companyName(),
    barcode: `${faker.random.word()}.${faker.random.number({ min: 1, max: 5 })}`
  });
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert(entries);
    });
};
