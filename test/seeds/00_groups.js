const faker = require('faker');

faker.seed(10000);
const entries = [
  {
    name: 'Limited Test',
    limiter: 1
  }
];

for (let i = 0; i < 10; i++) {
  entries.push({
    name: faker.company.companyName(),
    limiter: Math.round(faker.random.number({ min: 0, max: 10 }))
  });
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert(entries);
    });
};
