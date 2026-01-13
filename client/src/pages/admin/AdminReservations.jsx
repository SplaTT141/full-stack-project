import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user/UserContext";
import { LoginRequired } from "../../components/LoginRequired";
import { Sidebar } from "../../components/Sidebar"
import { Link } from "react-router-dom";

export function AdminReservations() {
    const {isLoggedIn} = useContext(UserContext);

    const [reservations, setReservations] = useState([]);

    const [filter, setFilter] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
    });
    const [filteredReservations, setFilteredReservations] = useState([]);

    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/reservation`, {
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
    }, [])

    useEffect(() => {
        setFilteredReservations(reservations.filter(reserve => {
            const matchesName = reserve.name.toLowerCase().includes(filter.name.toLowerCase().trim());
            const matchesSurname = reserve.surname.toLowerCase().includes(filter.surname.toLowerCase().trim());
            const matchesEmail = reserve.email.toLowerCase().includes(filter.email.toLowerCase().trim());
            const matchesPhone = reserve.phone.toLowerCase().includes(filter.phone.trim());
            const matchesService = reserve.service_name.toLowerCase().includes(filter.service.toLowerCase().trim());
            const matchesDate = filter.date === '' || reserve.date.slice(0, 10) === filter.date;
            const matchesTime = filter.time === '' || reserve.time.slice(0, 5) === filter.time;

            return matchesName && matchesSurname && matchesEmail && matchesPhone && matchesService && matchesDate && matchesTime;
        }
        ))
    }, [filter, reservations])

    function handleClickDeleteFilters() {
        setFilter({
            name: '',
            surname: '',
            email: '',
            phone: '',
            service: '',
            date: '',
            time: '',
        })
    }

    async function handleClickDelete(id) {
        const confirmDelete = window.confirm("Ar tikrai norite ištrinti šią rezervaciją?");
        if (!confirmDelete) return;

        try {
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/reservation/${id}`, {
                method: 'DELETE',  
                credentials: 'include',
            })
        } catch (error) {
            console.log(error);
        }

        setReservations(prev => prev.filter(reservations => reservations.id !== id));
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
                            <h1>Rezervacijos</h1>
                        </div>
                        <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                        <div className="row g-2 mb-2">
                            <h5>Filtrai</h5>
                            <div className="col-md-4 col-lg-3">
                                <input 
                                    onChange={e => setFilter(prev => ({...prev, name: e.target.value}))}
                                    value={filter.name}
                                    type="text"
                                    className="form-control"
                                    placeholder="Vardas"
                                />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <input 
                                    onChange={e => setFilter(prev => ({...prev, surname: e.target.value}))}
                                    value={filter.surname}
                                    type="text"
                                    className="form-control"
                                    placeholder="Pavardė"
                                    />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <input 
                                    onChange={e => setFilter(prev => ({...prev, email: e.target.value}))}
                                    value={filter.email}
                                    type="text"
                                    className="form-control"
                                    placeholder="El. paštas"
                                    />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <input 
                                    onChange={e => setFilter(prev => ({...prev, phone: e.target.value}))}
                                    value={filter.phone}
                                    type="text"
                                    className="form-control"
                                    placeholder="Telefono numeris"
                                    />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <input 
                                    onChange={e => setFilter(prev => ({...prev, service: e.target.value}))}
                                    value={filter.service}
                                    type="text"
                                    className="form-control"
                                    placeholder="Paslauga" 
                                    />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <input 
                                    onChange={e => setFilter(prev => ({...prev, date: e.target.value}))}
                                    value={filter.date}
                                    type="date"
                                    className="form-control"
                                    />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <input 
                                    onChange={e => setFilter(prev => ({...prev, time: e.target.value}))}
                                    value={filter.time}
                                    type="time"
                                    className="form-control"
                                />
                            </div>
                            <button onClick={handleClickDeleteFilters} className="btn btn-secondary col-md-4 col-lg-3">Panaikinti filtrus</button>
                        </div>
                        <div className="table-responsive-lg">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Vardas</th>
                                        <th scope="col">Pavardė</th>
                                        <th scope="col">Elektroninis paštas</th>
                                        <th scope="col">Telefono numeris</th>
                                        <th scope="col">Paslauga</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Laikas</th>
                                        <th scope="col">Veiksmai</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(reservations.length)
                                    ?
                                    filteredReservations.map((reservation, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{reservation.name}</td>
                                        <td>{reservation.surname}</td>
                                        <td>{reservation.email}</td>
                                        <td>{reservation.phone}</td>
                                        <td>{reservation.service_name}</td>
                                        <td>{reservation.date.slice(0, 10)}</td>
                                        <td>{reservation.time.slice(0, 5)}</td>
                                        <td>
                                            <Link to={`/admin/reservation/edit/${reservation.id}`}
                                                className="btn btn-warning me-2 mb-1">Redaguoti</Link>
                                            <button onClick={()=> handleClickDelete(reservation.id)} className="btn
                                                btn-danger">Ištrinti</button>
                                        </td>
                                    </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="9">Kraunasi...</td>
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