

//Connect to database
const mysql = require('mysql2');

//Connect to database
const connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'PASSWORD',
        database:'company_db'
    }
);

connection.connect((err) =>{
    if(err) throw err;
    console.log("connect id " + connection.threadId)
})

module.exports = connection;