import { useContext, useState } from "react";
import { UserContext } from "../../context/user/UserContext";
import { LoginRequired } from "../../components/LoginRequired";
import { Sidebar } from "../../components/Sidebar"

export function AdminReservations() {
    const {isLoggedIn} = useContext(UserContext);

    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState('');

    fetch('http://localhost:5000/reservation', {
        method: 'GET', 
        credentials: 'include'
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                setReservations(data.reservations);
            } else {
                setError('Nepavyko įkelti rezervacijų');
            }
        })

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
                            <h1>Rezervacijos</h1>
                        </div>
                        <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Vardas</th>
                                    <th scope="col">Pavardė</th>
                                    <th scope="col">Elektroninis paštas</th>
                                    <th scope="col">Telefono numeris</th>
                                    <th scope="col">Paslauga</th>
                                    <th scope="col">Laikas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(reservations.length)
                                ?
                                reservations.map((reservation, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{reservation.name}</td>
                                    <td>{reservation.surname}</td>
                                    <td>{reservation.email}</td>
                                    <td>{reservation.phone}</td>
                                    <td>{reservation.service}</td>
                                    <td>{reservation.date_time}</td>
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
            :
            <LoginRequired />
            }
        </div>   
    )
}