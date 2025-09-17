import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));

dotenv.config({ path: './.env' });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
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

app.listen(process.env.PORT, () => {
    console.log(`Server is running`);
});