import { registerValidation } from '../lib/validation.js';
import bcrypt from 'bcrypt';
import { db } from '../db.js';

export async function postRegister(req, res) {
    try {
        const { username, email, password } = req.body;

        const { error } = registerValidation({ username, email, password });

        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const sql = "INSERT INTO users (username, email, passwordHash) VALUES (?, ?, ?);";


        db.query(sql, [username, email, passwordHash], (error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Server error' });
            } else {
                return res.json({ success: 'User added successfully' });
            }
        });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
}