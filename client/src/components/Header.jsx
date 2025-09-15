import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
    return (
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link to="/"
                        className="d-flex gap-3 align-items-center me-md-auto link-body-emphasis text-decoration-none">
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
                </header>
            </div>
    )
}

export default Header;