const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'forum',
    port: '5432'
})

module.exports = {pool};