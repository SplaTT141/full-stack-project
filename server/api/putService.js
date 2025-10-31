import { db } from "../db.js";

export async function putService(req, res) {
    const { id, service, duration, price } = req.body;

    const sql = `UPDATE services SET service = ?, duration_in_min = ?, price = ? WHERE id = ?`;
    try {
        const [result] = await db.execute(sql, [service, duration, price, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Tokia paslauga nerasta' });
        }
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }

    return res.status(200).json({ status: 'success', message: 'Paslauga redaguota sėkmingai' });
}