import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Reservation() {
        const navigate = useNavigate();

        const [services, setServices] = useState([]);
        const [servicesError, setServicesError] = useState('');

        const [name, setName] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [service, setService] = useState('');
        const [dateTime, setDateTime] = useState('');

        const [error, setError] = useState('');
        const [success, setSuccess] = useState(false);

        useEffect(() => {
            fetch('http://localhost:5000/services', {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'success') {
                        setServices(data.services);
                    } else {
                        setServicesError('Nepavyko įkelti paslaugų');
                    }
                })
                .catch(error => console.log(error));
        }, [])

        function handleSubmit(e) {
            e.preventDefault();

            setError('');

            fetch('http://localhost:5000/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    surname, 
                    email,
                    phone,
                    service,
                    dateTime,
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'error') {
                        setError(data.message)
                    } else {
                        setSuccess(true);
                        setTimeout(() => {
                            navigate('/');
                        }, 3000);
                    }
                })
                .catch(error => console.log(error))
        }

    return (
    <div className="container py-5">
        <div className="bd-example-snippet bd-code-snippet">
            <div className="bd-example m-0 border-0">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Vardas</label>
                        <input onChange={e => setName(e.target.value)} type="text" id="name" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="second_name" className="form-label">Pavardė</label>
                        <input onChange={e => setSurname(e.target.value)} type="text" className="form-control" id="second_name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">El. paštas</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" id="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Telefono numeris</label>
                        <input onChange={e => setPhone(e.target.value)} type="phone" id="phone" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleSelect" className="form-label">Pasirinkite paslaugą</label>
                        <div className="mb-3 fw-bold" style={{color: 'red'}}>{servicesError}</div>
                        <select onChange={e => setService(e.target.value)} className="form-select" required>
                            <option value="">Paslaugos...</option>
                            {
                                services.map((service, index) =>
                                    <option key={index} value={service.id}>
                                        {service.service}
                                    </option>)
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pasirinkite datą ir laiką</label>
                        <input onChange={e => setDateTime(e.target.value)} type="datetime-local" className="form-control" required />
                    </div>
                    {success &&
                        (
                            <div className="alert alert-success">Laikas rezervuotas sėkmingai!</div>
                        )
                    }
                    <button type="submit" className="btn btn-primary mt-2">Patvirtinti</button>
                </form>
            </div>
        </div>
    </div>
    )
}
