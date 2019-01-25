const faker = require('faker');

faker.seed(10000);
const entries = [];

for (let i = 0; i < 3; i++) {
  entries.push({
    name: faker.name.firstName(),
    url: faker.internet.url()
  });
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('printers').del()
    .then(function () {
      // Inserts seed entries
      return knex('printers').insert(entries);
    });
};
