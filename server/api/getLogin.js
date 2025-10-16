export function getLogin(req, res) {
    if (req.user.isLoggedIn) {
        return res
            .status(200)
            .json(
                {
                    status: 'success',
                    message: 'Tu buvai sėkmingai prijuntas prie sistemos',
                    user: {
                        email: req.user.email,
                        id: req.user.id
                    },
                });
    }

    return res.status(401).json({ status: 'error', message: 'Tu nesi prijungtas prie sistemos' });
}