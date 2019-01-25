const faker = require('faker');

faker.seed(10000);
const entries = [];

for (let i = 0; i < 10; i++) {
  entries.push({
    name: faker.name.jobTitle()
  });
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert(entries);
    });
};
