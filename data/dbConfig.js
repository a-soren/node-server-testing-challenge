const knex = require('knex');
const config = require('../knexfile.js');

const envrionment = process.env.DB_ENV || 'develpoment';

module.exports = knex(config[envrionment]);