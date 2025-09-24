import { registerValidation } from '../lib/validation.js';
import bcrypt from 'bcrypt';
import { db } from '../db.js';

export async function postRegister(req, res) {
    const { username, email, password } = req.body;

    const { error } = registerValidation({ username, email, password });
    if (error) {
        return res.status(400).json({ status: 'error', message: error.details[0].message });
    }

    try {
        const sql = `SELECT username, email FROM users WHERE username = ? OR email = ?;`;
        const [response] = await db.execute(sql, [username, email]);

        if (response > 0) {
            if (response[0].username === username) {
                return res.status(400).json({ status: 'error', message: 'Toks vatotojo vardas jau yra užregistruotas' });
            }
            if (response[0].email === email) {
                return res.status(400).json({ status: 'error', message: 'Toks el. paštas jau yra užregistruotas' });
            }
        }
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Server error' });
    }

    try {
        const passwordHash = await bcrypt.hash(password, 12);

        const sql = "INSERT INTO users (username, email, passwordHash) VALUES (?, ?, ?);";
        const [response] = await db.execute(sql, [username, email, passwordHash]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({ status: 'error', message: 'Server error' });
        }

        return res.status(201).json({ status: 'success', message: 'User added successfully' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            if (error.sqlMessage.includes('username')) {
                return res.status(400).json({ status: 'error', message: 'Username already exists' });
            }
            if (error.sqlMessage.includes('email')) {
                return res.status(400).json({ status: 'error', message: 'Email already exists' });
            }
            return res.status(400).json({ status: 'error', message: 'Duplicate entry' });
        }

        return res.status(500).json({ status: 'error', message: 'Server error' });
    }
}