import { db } from "../db.js";
import { loginValidation } from "../lib/validation.js";
import bcrypt from 'bcrypt';

export async function postLogin(req, res) {
    const { usernameOrEmail, password } = req.body;
    let userData = null;

    const { error } = loginValidation({ usernameOrEmail, password });
    if (error) {
        return res.status(400).json({ status: 'error', message: error.details[0].message });
    }

    try {
        const sql = 'SELECT * FROM users WHERE username = ? OR email = ?;';
        const [response] = await db.execute(sql, [usernameOrEmail, usernameOrEmail]);

        if (response.length === 0) {
            return res.status(400).json({ status: 'error', message: 'Neteisingi prisijungimo duomenys' });
        }

        if (response.length > 1) {
            return res.status(400).json({ status: 'error', message: 'Serverio klaida' });
        }

        userData = response[0];
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }

    try {
        const isPasswordCorrect = await bcrypt.compare(password, userData.passwordHash);

        if (isPasswordCorrect) {
            return res.status(200).json({ status: 'success', message: 'Prisijungta sėkmingai' });
        } else {
            return res.status(400).json({ status: 'error', message: 'Neteisingi prisijungimo duomenys' });
        }
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}