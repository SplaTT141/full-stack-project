import { db } from "../db.js";
import { newServiceValidation } from "../lib/validation.js";

export async function postService(req, res) {
    const { service, duration, price, imagePath } = req.body;

    const { error } = newServiceValidation({ service, duration, price });
    if (error) return res.status(400).json({ status: 'error', message: error.details[0].message });

    try {
        const imgurl = imagePath || 'default.png';

        const sql = `INSERT INTO services (service, duration_in_min, price, image_path) VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(sql, [service, duration, price, imgurl]);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'error', message: 'Serverio klaida' });
    }

    return res.status(200).json({ status: 'success', message: 'Paslauga pridėta sėkmingai!' });
}
