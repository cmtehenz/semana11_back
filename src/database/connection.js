const knex = require('knex');
const configurantion = require('../../knexfile');

const config =
  process.env.NODE_ENV === 'test'
    ? configurantion.test
    : configurantion.development;

const connection = knex(config);

module.exports = connection;
