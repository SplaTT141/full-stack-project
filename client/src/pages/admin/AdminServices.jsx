import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import { useEffect, useState } from "react"
import { LoginRequired } from "../../components/LoginRequired";
import { Sidebar } from "../../components/Sidebar";

export function AdminServices() {
    const {isLoggedIn} = useContext(UserContext);

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

        function handleServiceDelete() {
            
        }

    return (
        <div className="container-fluid">
            {
                isLoggedIn
                    ?
                    <div className="d-flex">
                        <Sidebar />
                        <div className="bd-example-snippet bd-code-snippet col-8">
                            <div className="bd-example m-0 border-0">
                                <h1>Paslaugos</h1>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Paslauga</th>
                                            <th scope="col">Trukmė</th>
                                            <th scope="col">Kaina</th>
                                            <th scope="col">Veiksmai</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(services.length)
                                            ?
                                            services.map((service, index) => (
                                                <tr key={index}>
                                                    <th>{index + 1}</th>
                                                    <td>{service.service}</td>
                                                    <td>{service.duration} min</td>
                                                    <td>{service.price} eu</td>
                                                    <td>
                                                        <button className="btn btn-warning me-2">Redaguoti</button>
                                                        <button className="btn btn-danger">Panaikinti</button>
                                                    </td>
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
                    :
                    <LoginRequired />
            }
        </div>
    )
}