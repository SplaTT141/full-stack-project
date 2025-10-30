import { db } from "../db.js";

export async function postService(req, res) {
    const { service, duration, price } = req.body;

    try {
        const sql = `INSERT INTO services (service, duration_in_min, price) VALUES (?, ?, ?)`;
        const [result] = await db.execute(sql, [service, duration, price]);

        console.log(result);
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }

    return res.status(200).json({ status: 'success', message: 'Paslauga pridėta sėkmingai!' });
}