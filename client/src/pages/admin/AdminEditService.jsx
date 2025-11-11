import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import { LoginRequired } from "../../components/LoginRequired";
import { serviceNameIsInvalid, serviceDurationIsInvalid, servicePriceIsInvalid } from "../../lib/validation";

export function AdminEditService() {
    const { isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const [serviceData, setServiceData] = useState('');
    
    const [serviceError, setServiceError] = useState('');
    const [durationError, setDurationError] = useState('');
    const [priceError, setPriceError] = useState('');
    
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/services', {
            method: 'GET',
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

            setServiceError('');
            setDurationError('');
            setPriceError('');

            let hasError = false;

            if (serviceNameIsInvalid(service)) {
                setServiceError(serviceNameIsInvalid(service));
                hasError = true;
            }

            if (serviceDurationIsInvalid(duration)) {
                setDurationError(serviceDurationIsInvalid(duration));
                hasError = true;
            }

            if (servicePriceIsInvalid(price)) {
                setPriceError(servicePriceIsInvalid(price));
                hasError = true;
            }

            if (hasError) return;

            fetch(`http://localhost:5000/admin/services/edit`, {
                method: 'PUT',
                credentials: 'include',
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
                            <div style={{color: 'red'}}>{serviceError}</div>
                            <label htmlFor="duration" className="form-label">Trukmė</label>
                            <input onChange={(e) => setServiceData({...serviceData, duration:+e.target.value})} type="number" id="duration" className="form-control" value={serviceData.duration ?? ''} required />
                            <div style={{color: 'red'}}>{durationError}</div>
                            <label htmlFor="price" className="form-label">Kaina</label>
                            <input onChange={(e) => setServiceData({...serviceData, price:+e.target.value})} type="number" id="price" className="form-control" value={serviceData.price ?? ''} required />
                            <div style={{color: 'red'}}>{priceError}</div>
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