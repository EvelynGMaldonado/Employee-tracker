const mysql = require('mysql2');

//Connect to database
const mysql = require('mysql2');

//Connect to database
const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'PASSWORD',
        database:'copany_db'
    },
    console.log('Connected to db')
);

module.exports = connection;