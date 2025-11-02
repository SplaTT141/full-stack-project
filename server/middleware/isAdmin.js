export function isAdmin(req, res, next) {
    if (!req.user.isLoggedIn) {
        return res.json({
            status: 'error',
            msg: 'Pirma yra būtina prisijungti',
        });
    }

    return next();
}