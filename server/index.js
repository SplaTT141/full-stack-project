const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kirpykla",
});

db.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Database is connected!');
    }
});

app.get('/', (req, res) => {
    res.send("It's alive!");
});

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});