import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/user/UserContext"
import { ServicesContext } from "../../context/services/ServicesContext";
import { Sidebar } from "../../components/Sidebar";
import { LoginRequired } from "../../components/LoginRequired";
import { Link, useNavigate, useParams } from "react-router-dom";

export function AdminEditReservation() {
    const { id } = useParams(); 
    const { isLoggedIn } = useContext(UserContext);
    const { servicesData } = useContext(ServicesContext);

    const [reservationData, setReservationData] = useState([]);
    
    const [error, setError] = useState('');

    const navigate = useNavigate();

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
                        setReservationData(filtered);
                    } else {
                        setError('Tokia rezervacija nerasta')
                    }
                } else {
                    setError('Tokia rezervacija nerasta')
                }
            })
            .catch(error => console.log(error))
    }, [id])

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:5000/admin/reservation/edit', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reservationData,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    navigate('/admin/reservation');
                } else {
                    setError(data.message);
                }
            })
            .catch(error => console.log(error));
    }

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
                        <form onSubmit={handleSubmit}>
                            <div htmlFor="service" className="form-label">ID:
                                <span className="text-primary"> {reservationData.id}</span>
                            </div>
                            <label htmlFor="name" className="form-label">Vardas</label>
                            <input type="text" onChange={e => setReservationData({...reservationData, name:e.target.value})} id="name" className="form-control" value={reservationData.name ?? ''} required />
                            <label htmlFor="surname" className="form-label">Pavardė</label>
                            <input type="text" onChange={e => setReservationData({...reservationData, surname:e.target.value})} id="surname" className="form-control" value={reservationData.surname ?? ''} required />
                            <label htmlFor="email" className="form-label">El. paštas</label>
                            <input type="email" onChange={e => setReservationData({...reservationData, email:e.target.value})} id="email" className="form-control" value={reservationData.email ?? ''} required />
                            <label htmlFor="text" className="form-label">Telefono numeris</label>
                            <input type="text" onChange={e => setReservationData({...reservationData, phone:e.target.value})} id="phone" className="form-control" value={reservationData.phone ?? ''} required />
                            <label htmlFor="text" className="form-label">Paslauga</label>
                            <select name="service" onChange={e => setReservationData({...reservationData, service_name:e.target.value})} id="service" className="form-select">
                                <option value="">{reservationData.service_name}</option>
                                {
                                    servicesData
                                    .map((service, index) => <option key={index}>{service.service}</option>)
                                }
                            </select>
                            <label htmlFor="date" className="form-label">Data</label>
                            <input type="date" onChange={e => setReservationData({...reservationData, date:e.target.value})} id="date" className="form-control" value={reservationData.date?.slice(0, 10) ?? ''} required />
                            <label htmlFor="time" className="form-label">Laikas</label>
                            <input type="time" onChange={e => setReservationData({...reservationData, time:e.target.value})} id="time" className="form-control" value={reservationData.time ?? ''} required />
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