function Reservation() {
    return (
    <div className="container py-5">
        <div className="bd-example-snippet bd-code-snippet">
            <div className="bd-example m-0 border-0">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Vardas</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Pavardė</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">El. paštas</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleSelect" className="form-label">Pasirinkite paslaugą</label>
                        <select className="form-select" id="exampleSelect" required>
                            <option value="">Paslaugos...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Patvirtinti</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Reservation;