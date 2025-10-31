import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar"
import { Link, useParams } from "react-router-dom"

export function AdminEditService() {
    const { id } = useParams();
    const [service, setService] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/services', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    const filtered = data.services.find(s => s.id === Number(id));
                    if (filtered) {
                        setService(filtered);
                    } else {
                        setError('Tokia paslauga nerasta');
                    }
                } else {
                    setError('Tokia paslauga nerasta');
                }
            })
            .catch(error => console.log(error));
        }, [id])

    return (
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
                <Sidebar />
                <div>
                    <h1>Paslaugos redagavimas</h1>
                    <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                    <form>
                        <div htmlFor="service" className="form-label">ID:
                            <span className="text-primary"> {service.id}</span>
                        </div>
                        <label htmlFor="service" className="form-label">Paslaugos pavadinimas</label>
                        <input onChange={(e) => setService({...service, service:e.target.value})} type="text" id="service" className="form-control" value={service.service} required />
                        <label htmlFor="duration" className="form-label">Trukmė</label>
                        <input onChange={(e) => setService({...service, duration:e.target.value})} type="number" id="duration" className="form-control" value={service.duration} required />
                        <label htmlFor="price" className="form-label">Kaina</label>
                        <input onChange={(e) => setService({...service, price:e.target.value})} type="number" id="price" className="form-control" value={service.price} required />
                        <button type="submit" className="btn btn-primary mt-4">Patvirtinti</button>
                        <Link to={'/admin/services'} className="btn btn-danger mt-4 ms-2">Atšaukti</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}