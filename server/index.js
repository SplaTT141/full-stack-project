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
        const { username, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 12);
        const sql = "INSERT INTO users (username, email, passwordHash) VALUES (?, ?, ?);";

        const { error } = registerValidation({ username, email, passwordHash });

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        db.query(sql, [username, email, passwordHash], (error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Server error ' + error });
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