import { useEffect, useState } from "react"

export function Services() {

    const [services, setServices] = useState([]);
    const [filter, setFilter] = useState({
        service: '',
        durationFrom: '',
        durationTo: '',
        priceFrom: '',
        priceTo: '',
    });
    const [filteredServices, setFilteredServices] = useState([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        fetch('http://localhost:5000/services', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                setServices(data.services);
            } else {
                setError('Nepavyko įkelti paslaugų');
            }
        })
        .catch(error => console.log(error));
    }, [])
    
    useEffect(() => {
        setFilteredServices(services.filter((service) => {
            const matchesService = service.service.toLowerCase().includes(filter.service.toLowerCase().trim())
            const matchesDurationFrom = filter.durationFrom === '' || service.duration >= +filter.durationFrom;
            const matchesDurationTo = filter.durationTo === '' || service.duration <= +filter.durationTo;
            const matchesPriceFrom = filter.priceFrom === '' || service.price >= +filter.priceFrom;
            const matchesPriceTo = filter.priceTo === '' || service.price <= +filter.priceTo;

            return matchesService && matchesDurationFrom && matchesDurationTo && matchesPriceFrom && matchesPriceTo;
        }))
    }, [filter, services]);

    return ( 
    <div className="container">
        <div className="row">
            <div className="bd-example-snippet bd-code-snippet py-5">
                <div className="bd-example m-0 border-0">
                    <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                    <div className="mb-2">
                        <input 
                            onChange={e =>setFilter(prev => ({...prev, service: e.target.value}))} 
                            type="text" 
                            id="name_filter" 
                            className="form-control mb-2" 
                            placeholder="Raskite pagal paslaugos pavadinimą"
                        />
                        <div className="d-flex gap-3">
                            <input 
                                onChange={e =>setFilter(prev => ({...prev, durationFrom: e.target.value}))} 
                                type="number" 
                                id="durationFrom_filter" 
                                className="form-control mb-2" 
                                placeholder="Trukmė nuo"
                            />
                            <input 
                                onChange={e =>setFilter(prev => ({...prev, durationTo: e.target.value}))} 
                                type="number" 
                                id="durationTo_filter" 
                                className="form-control mb-2" 
                                placeholder="Trukmė iki"
                            />
                        </div>
                        <div className="d-flex gap-3">
                            <input 
                                onChange={e => setFilter(prev => ({...prev, priceFrom: e.target.value}) )} 
                                type="number" 
                                id="priceFrom_filter" 
                                className="form-control mb-2" 
                                placeholder="Kaina nuo"
                            />
                            <input 
                                onChange={e => setFilter(prev => ({...prev, priceTo: e.target.value}) )} 
                                type="number" 
                                id="priceTo_filter" 
                                className="form-control mb-2" 
                                placeholder="Kaina iki"
                            />
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nuotrauka</th>
                                <th scope="col">Paslauga</th>
                                <th scope="col">Trukmė</th>
                                <th scope="col">Kaina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(services.length) 
                                ?
                                    filteredServices.map((service,index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <th>
                                                <img src={service.image_path ? `/img/${service.image_path}`
                                                    : '/img/default.png' } alt={service.service}
                                                    style={{ width: '80px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                                                    onError={(e)=> { e.target.src = '/img/default.png'; }}
                                                />
                                            </th>
                                            <td>{service.service}</td>
                                            <td>{service.duration} min</td>
                                            <td>{service.price} €</td>
                                        </tr>
                                    ))
                                :
                                    <tr>
                                        <td colSpan="4">Kraunasi...</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}