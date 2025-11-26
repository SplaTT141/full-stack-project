import { db } from "../db.js";

export async function putReservation(req, res) {
    const { id, name, surname, email, phone, date, time, service_name } = req.body.reservationData;
    const formattedDate = date.slice(0, 10);

    try {
        const sql = `
            UPDATE reservation
            JOIN services ON services.service = ?
            SET 
                reservation.name = ?,
                reservation.surname = ?,
                reservation.email = ?,
                reservation.phone = ?,
                reservation.date = ?,
                reservation.time = ?,
                reservation.service = services.id
            WHERE reservation.id = ?`;

        const [result] = await db.execute(sql, [service_name, name, surname, email, phone, formattedDate, time, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'Tokia paslauga nerasta' });
        }

        return res.status(200).json({ status: 'success', message: 'Rezervacija atnaujinta sėkmingai' });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message });
    }
}