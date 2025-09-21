import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import dotenv from 'dotenv';
import { registerValidation } from './lib/validation.js';
import bcrypt from 'bcrypt';

dotenv.config({ path: './.env' });

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}));

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

app.post('/register', async (req, res) => {
    try {
        const sql = "INSERT INTO users SET ?";

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        // const passwordHash = await bcrypt.hash(password, 12);

        const userData = {
            username,
            email,
            password,
        };

        const { error } = registerValidation(userData);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        db.query(sql, userData, (error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Server error' });
            } else {
                return res.json({ success: 'User added successfully' });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send("It's alive!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running`);
});