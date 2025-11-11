import { db } from "../db.js";

export async function postReservation(req, res) {
    const { name, surname, email, phone, service, date, time } = req.body;

    try {
        const sql = `INSERT INTO reservation (name, surname, email, phone, service, date, time) VALUES (?, ?, ?, ?, ?, ?, ?)`;

        const [response] = await db.execute(sql, [name, surname, email, phone, service, date, time]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
        }

        return res.status(200).json({ status: 'success', message: 'Laikas rezervuotas sėkmingai' });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}