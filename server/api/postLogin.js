import { db } from "../db.js";
import { loginValidation } from "../lib/validation.js";

export async function postLogin(req, res) {
    const { usernameOrEmail, password } = req.body;

    const { error } = loginValidation({ usernameOrEmail, password });
    if (error) {
        return res.status(400).json({ status: 'error', message: error.details[0].message });
    }

    try {
        const sql = 'SELECT * FROM users WHERE username = ? OR email = ?;';
        const [response] = await db.execute(sql, [usernameOrEmail, usernameOrEmail]);

        if (response.length > 0) {
            return res.status(200).json({ status: 'success', message: 'Toks vartotojas egzistuoja' });
        } else {
            return res.status(404).json({ status: 'error', message: 'Neteisingi prisijungimo duomenys' })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}