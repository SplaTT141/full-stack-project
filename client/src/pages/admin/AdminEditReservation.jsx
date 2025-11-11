import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/user/UserContext"
import { Sidebar } from "../../components/Sidebar";
import { LoginRequired } from "../../components/LoginRequired";
import { Link, useParams } from "react-router-dom";

export function AdminEditReservation() {
    const { id } = useParams(); 
    const { isLoggedIn } = useContext(UserContext);

    const [reservation, setReservation] = useState([]);
    
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/reservation`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    const filtered = data.reservations.find(r => r.id === +id);
                    if (filtered) {
                        setReservation(filtered);
                    } else {
                        setError('Tokia rezervacija nerasta')
                    }
                } else {
                    setError('Tokia rezervacija nerasta')
                }
            })
            .catch(error => console.log(error))
    }, [id])

    return (
                <div className="container-fluid">
            {
                isLoggedIn
                ?
                <div className="d-flex flex-wrap">
                    <Sidebar />
                    <div>
                        <h1>Rezervacijos redagavimas</h1>
                        <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                        <form>
                            <div htmlFor="service" className="form-label">ID:
                                <span className="text-primary"> {reservation.id}</span>
                            </div>
                            <label htmlFor="name" className="form-label">Vardas</label>
                            <input type="text" id="name" className="form-control" value={reservation.name ?? ''} required />
                            <label htmlFor="surname" className="form-label">Pavardė</label>
                            <input type="text" id="surname" className="form-control" value={reservation.surname ?? ''} required />
                            <label htmlFor="email" className="form-label">El. paštas</label>
                            <input type="email" id="email" className="form-control" value={reservation.email ?? ''} required />
                            <label htmlFor="text" className="form-label">Telefono numeris</label>
                            <input type="text" id="phone" className="form-control" value={reservation.phone ?? ''} required />
                            <label htmlFor="text" className="form-label">Paslauga</label>
                            <input type="text" id="service" className="form-control" value={reservation.service_name ?? ''} required />
                            <label htmlFor="date" className="form-label">Data</label>
                            <input type="date" id="date" className="form-control" value={reservation.date?.slice(0, 10) ?? ''} required />
                            <label htmlFor="time" className="form-label">Laikas</label>
                            <input type="time" id="time" className="form-control" value={reservation.time ?? ''} required />
                            <button type="submit" className="btn btn-primary mt-4">Patvirtinti</button>
                            <Link to={'/admin/reservations'} className="btn btn-danger mt-4 ms-2">Atšaukti</Link>

                        </form>
                    </div>
                </div>
                : <LoginRequired />
            }
        </div>
    )   
}