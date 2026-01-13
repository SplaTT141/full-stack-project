import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import { useEffect, useState } from "react"
import { LoginRequired } from "../../components/LoginRequired";
import { Sidebar } from "../../components/Sidebar";
import { Link } from "react-router-dom";

export function AdminServices() {
    const {isLoggedIn} = useContext(UserContext);

        const [services, setServices] = useState([]);
        const [error, setError] = useState('');
    
        useEffect(() => {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/services`, {
                method: 'GET',
                credentials:'include',
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

        async function handleClickDeleteService(id) {
            const confirmDelete = window.confirm("Ar tikrai norite ištrinti šią paslaugą?");
            if (!confirmDelete) return;

            try {
                await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/services/${id}`, {
                    method: 'DELETE',
                    credentials: "include",
                })
            } catch (error) {
                console.log(error);
            }

            setServices(prev => prev.filter(service => service.id !== id));
        }

    return (
        <div className="container-fluid">
            {
                isLoggedIn
                    ?
                    <div className="d-flex flex-wrap">
                        <Sidebar />
                        <div className="bd-example-snippet bd-code-snippet col-8">
                            <div className="bd-example m-0 border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h1>Paslaugos</h1>
                                    <Link to={'add'} className="btn btn-success">Pridėti paslaugą +</Link>
                                </div>
                                <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nuotrauka</th>
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
                                                        <th>
                                                            <img
                                                                src={service.image_path ? `/img/${service.image_path}` : '/img/default.png'}
                                                                alt={service.service}
                                                                style={{ width: '80px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                                                                onError={(e) => { e.target.src = '/img/default.png'; }}
                                                            />
                                                        </th>
                                                        <td>{service.service}</td>
                                                        <td>{service.duration} min</td>
                                                        <td>{service.price} €</td>
                                                        <td>
                                                            <Link to={`edit/${service.id}`} className="btn btn-warning me-2 mb-1">Redaguoti</Link>
                                                            <button onClick={() => handleClickDeleteService(service.id)} className="btn btn-danger">Panaikinti</button>
                                                        </td>
                                                    </tr>
                                                ))
                                                :
                                                <tr>
                                                    <td colSpan="6">Kraunasi...</td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <LoginRequired />
            }
        </div>
    )
}