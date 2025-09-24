import { registerValidation } from '../lib/validation.js';
import bcrypt from 'bcrypt';
import { db } from '../db.js';

export async function postRegister(req, res) {
    const { username, email, password } = req.body;

    const { error } = registerValidation({ username, email, password });
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        const passwordHash = await bcrypt.hash(password, 12);

        const sql = "INSERT INTO users (username, email, passwordHash) VALUES (?, ?, ?);";
        const [response] = await db.execute(sql, [username, email, passwordHash]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({ status: 'error', message: 'Server error' });
        }

        return res.status(201).json({ status: 'Success', message: 'User added successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'error', message: 'Server error' });
    }
}