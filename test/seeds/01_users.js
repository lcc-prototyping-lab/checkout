const faker = require('faker');
const Authentication = require('../../src/js/authentication.js');

function makeUser(printerIds, courseIds, yearIds, salt, hash, iterations) {
  return {
    'email': faker.internet.email(),
    'name': `${faker.name.firstName()} ${faker.name.lastName()}`,
    'pw_salt': salt,
    'pw_hash': hash,
    'type': faker.random.arrayElement(['user', 'admin']),
    'audit_point': '2000-01-01 00:00:00',
    'disable': false,
    'printer_id': faker.random.arrayElement(printerIds),
    'course_id': faker.random.arrayElement(courseIds),
    'year_id': faker.random.arrayElement(yearIds),
    'barcode': faker.random.uuid(),
    'pw_iterations': iterations
  };
}

const seedFunction = function(knex, Promise) {
  let res;
  let rej;

  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  Promise.all([
    knex('printers').pluck('id'),
    knex('courses').pluck('id'),
    knex('years').pluck('id'),
  ])
    .then(([ printerIds, courseIds, yearIds ]) => {
      Authentication.generatePassword('password', function({salt, hash, iterations}) {
        knex('users').del()
          .then(function () {
            res(knex('users').insert([
              makeUser(printerIds, courseIds, yearIds, salt, hash, iterations),
              makeUser(printerIds, courseIds, yearIds, salt, hash, iterations),
              makeUser(printerIds, courseIds, yearIds, salt, hash, iterations),
            ]));
          });
      });
    });

  return p;
};

exports.seed = seedFunction;
