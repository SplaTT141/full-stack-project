import { db } from "../db.js";

export async function getReservations(req, res) {
    try {
        const sql = `
            SELECT 
                reservation.id,
                reservation.name,
                reservation.surname,
                reservation.email,
                reservation.phone,
                services.service AS service_name,
                reservation.date,
                reservation.time
            FROM reservation
            JOIN services ON reservation.service = services.id`;
        const [reservations] = await db.execute(sql);

        return res.status(200).json({ status: 'success', reservations })
    } catch (error) {
        return res.status(500).json({ status: "error", message: 'Serverio klaida' });
    }
}