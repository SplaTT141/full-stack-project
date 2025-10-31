import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import { LoginRequired } from "../../components/LoginRequired";

export function AdminEditService() {
    const { isLoggedIn } = useContext(UserContext);

    const { id } = useParams();
    const [serviceData, setServiceData] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/services', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    const filtered = data.services.find(s => s.id === Number(id));
                    if (filtered) {
                        setServiceData(filtered);
                    } else {
                        setError('Tokia paslauga nerasta');
                    }
                } else {
                    setError('Tokia paslauga nerasta');
                }
            })
            .catch(error => console.log(error));
        }, [id])

        function handleSubmit(e) {
            e.preventDefault();

            const {id, service, duration, price} = serviceData;

            fetch(`http://localhost:5000/admin/services/edit`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id,
                    service,
                    duration,
                    price
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'error') {
                        setError(data.message);
                    } else {
                        navigate('/admin/services')
                    }
                })
        }

    return (
        <div className="container-fluid">
            {
                isLoggedIn
                ?
                <div className="d-flex flex-wrap">
                    <Sidebar />
                    <div>
                        <h1>Paslaugos redagavimas</h1>
                        <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                        <form onSubmit={handleSubmit}>
                            <div htmlFor="service" className="form-label">ID:
                                <span className="text-primary"> {serviceData.id}</span>
                            </div>
                            <label htmlFor="service" className="form-label">Paslaugos pavadinimas</label>
                            <input onChange={(e) => setServiceData({...serviceData, service:e.target.value})} type="text" id="service" className="form-control" value={serviceData.service ?? ''} required />
                            <label htmlFor="duration" className="form-label">Trukmė</label>
                            <input onChange={(e) => setServiceData({...serviceData, duration:+e.target.value})} type="number" id="duration" className="form-control" value={serviceData.duration ?? ''} required />
                            <label htmlFor="price" className="form-label">Kaina</label>
                            <input onChange={(e) => setServiceData({...serviceData, price:+e.target.value})} type="number" id="price" className="form-control" value={serviceData.price ?? ''} required />
                            <button type="submit" className="btn btn-primary mt-4">Patvirtinti</button>
                            <Link to={'/admin/services'} className="btn btn-danger mt-4 ms-2">Atšaukti</Link>
                        </form>
                    </div>
                </div>
                : <LoginRequired />
            }
        </div>
    )
}