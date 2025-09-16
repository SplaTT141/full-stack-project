import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));


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

app.post('/user_register', (req, res) => {
    const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?) ";
    const userData = [
        req.body.username,
        req.body.email,
        req.body.password,
    ]
    db.query(sql, userData, (error, result) => {
        if (error) {
            return res.json({ message: 'Something went wrong' + error })
        } else {
            return res.json({ success: 'User added successfully' })
        }
    });
})

app.get('/', (req, res) => {
    res.send("It's alive!");
});

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});