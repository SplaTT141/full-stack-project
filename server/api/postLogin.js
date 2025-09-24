import { db } from "../db.js";

export async function postLogin() {
    const sql = 'SELECT username, email FROM users WHERE username = ? OR email = ?;';
    const [response] = await db.execute(sql, [username, email]);


}