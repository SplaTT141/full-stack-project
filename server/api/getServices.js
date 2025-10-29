import { db } from "../db.js";

export async function getServices(req, res) {
    try {
        const sql = `SELECT service, duration_in_min AS duration, price FROM services`
        const [services] = await db.execute(sql);

        return res.status(200).json({ status: 'success', services });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }
}