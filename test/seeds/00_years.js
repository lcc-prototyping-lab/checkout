const faker = require('faker');

faker.seed(10000);
const entries = [];

for (let i = 0; i < 10; i++) {
  entries.push({
    name: faker.company.companyName()
  });
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('years').del()
    .then(function () {
      // Inserts seed entries
      return knex('years').insert(entries);
    });
};
