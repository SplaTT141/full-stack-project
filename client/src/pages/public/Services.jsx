import { useEffect, useState } from "react"

export function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
            })
            .catch(error => console.log(error));
    }, [])

    return ( 
    <div className="container">
        <div className="bd-example-snippet bd-code-snippet py-5">
            <div className="bd-example m-0 border-0">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
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
                                        <td>{service.service}</td>
                                        <td>{service.duration} min</td>
                                        <td>{service.price} eu</td>
                                    </tr>
                                ))
                            :
                                <tr>
                                    <td colSpan="4">Loading...</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}