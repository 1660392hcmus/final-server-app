const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: '12345'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Connected to server Mysql');
    con.query('create database mydb', (err, result) => {
        if(err) throw err;
        console.log('Database created');
    });
});
