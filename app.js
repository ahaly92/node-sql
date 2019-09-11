const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company',
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

connection.query('SELECT * FROM employees', (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => {
        console.log(`${row.name} is in ${row.location}`);
    });
});

connection.end((err) => {
});
