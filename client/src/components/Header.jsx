import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";

export function Header() {

    const {isLoggedIn} = useContext(UserContext);

    return (
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between py-3 mb-4 border-bottom">
                    <Link to="/"
                        className="d-flex gap-3 align-items-center link-body-emphasis text-decoration-none pe-4">
                    <img src={logo} alt="logo" width="60" />
                    <span className="fs-4">Kirpykla</span>
                    </Link>
                    <ul className="d-flex align-items-center nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Pagrindinis</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">Apie mus</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link">Paslaugos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/reservation" className="nav-link">Rezervacija</NavLink>
                        </li>
                    </ul>
                    <div className="text-end">
                        {
                            isLoggedIn 
                                ?
                                    <>
                                        <Link to={"/logout"} className="btn btn-outline-primary me-2">Atsijungti</Link>
                                        <Link to={"/admin/dashboard"} className="btn btn-primary">Valdymo skydelis</Link>
                                    </>
                                :
                                    <>
                                        <Link to={"/login"} className="btn btn-outline-primary me-2">Prisijungti</Link>
                                        <Link to={"/register"} className="btn btn-primary">Registruotis</Link>
                                    </>
                            }
                    </div>
                </header>
            </div>
    )
}