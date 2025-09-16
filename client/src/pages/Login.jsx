export function Login() {
    return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-center flex-column col-6 col-lg-4 col-xl-3 order-2 order-lg-1">
                <p className="text-center text-body h1 fw-bold mb-5 mt-4">Prisijungimas</p>
                <form>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input type="text" id="username_or_email" className="form-control" />
                            <label className="form-label" htmlFor="username_or_email">Vartotojo vardas arba el. paštas</label>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input type="password" id="password" className="form-control" />
                            <label className="form-label" htmlFor="password">Slaptažodis</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg">Prisijungti</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}