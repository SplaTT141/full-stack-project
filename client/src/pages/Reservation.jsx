export function Reservation() {
    return (
    <div className="container py-5">
        <div className="bd-example-snippet bd-code-snippet">
            <div className="bd-example m-0 border-0">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Vardas</label>
                        <input type="text" id="name" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="second_name" className="form-label">Pavardė</label>
                        <input type="text" className="form-control" id="second_name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">El. paštas</label>
                        <input type="email" id="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleSelect" className="form-label">Pasirinkite paslaugą</label>
                        <select className="form-select" required>
                            <option value="">Paslaugos...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pasirinkite datą</label>
                        <input type="date" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pasirinkite laiką</label>
                        <input type="time" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Patvirtinti</button>
                </form>
            </div>
        </div>
    </div>
    )
}
