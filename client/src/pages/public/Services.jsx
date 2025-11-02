import { useEffect, useState } from "react"

export function Services() {

    const [services, setServices] = useState([]);
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
                    setError('Nepavyko įkelti pasulaugų');
                }
            })
            .catch(error => console.log(error));
    }, [])

    return ( 
    <div className="container">
        <div className="bd-example-snippet bd-code-snippet py-5">
            <div className="bd-example m-0 border-0">
                <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
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
                                services.map((service,index) => (
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
    )
}