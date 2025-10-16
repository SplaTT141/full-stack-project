import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function Dashboard() {
    const {isLoggedIn} = useContext(UserContext);

    return (
        <div className="container">
        {
        isLoggedIn
            ?
                <div className="d-flex flex-column flex-shrink-0 bg-light p-3 pb-5" style={{width: '280px', borderRadius: '15px'}}>
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <span className="fs-4">Valdymo skydelis</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mt-4">
                        <li className="nav-item">
                            <Link to="#" className="nav-link active">Vartotojo informacija</Link>
                        </li>
                        <li>
                            <Link to="#" className="nav-link link-dark">Paslaugos</Link>
                        </li>
                        <li>
                            <Link to="#" className="nav-link link-dark">Rezervacijos</Link>
                        </li>
                    </ul>
                </div>
            :
                <div className="col-12">
                    <h1>Būtina prisijungti!</h1>
                    <Link to='/login' className="btn btn-primary mt-3">Prisijungti</Link>
                </div>
        }           
        </div>
    )
}