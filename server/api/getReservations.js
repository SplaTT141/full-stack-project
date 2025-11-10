import { db } from "../db.js";

export async function getReservations(req, res) {
    try {
        const sql = `SELECT * FROM reservation`;
        const [reservations] = await db.execute(sql);

        return res.status(200).json({ status: 'success', reservations })
    } catch (error) {
        return res.status(500).json({ status: "error", message: 'Serverio klaida' });
    }
}