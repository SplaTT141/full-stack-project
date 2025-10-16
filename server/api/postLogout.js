export function postLogout(req, res) {
    res.clearCookie('loginToken', {
        httpOnly: true,
        sameSite: 'Lax',
        secure: false,
        path: '/',
    })

    return res.status(200).json({ status: 'success', message: 'Atsijungta sėkmingai' });
}