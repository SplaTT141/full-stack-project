import { db } from "../db.js"

export async function deleteService(req, res) {
    const { id } = req.params;

    try {
        const sql = `DELETE FROM services WHERE id = ?`;
        const [response] = await db.execute(sql, [id]);

        if (response.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Tokios paslaugos neegzistuoja' });
        }
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }

    return res.status(200).json({ status: 'success', message: 'Paslauga ištrintas sėkmingai' });
}