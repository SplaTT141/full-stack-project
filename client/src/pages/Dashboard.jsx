import { Link } from "react-router-dom"

export function Dashboard() {
    return (
        <div className="container">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px', borderRadius: '15px'}}>
                <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Valdymo skydelis</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link href="#" className="nav-link active" aria-current="page">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="#" className="nav-link link-dark">
                    Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="#" className="nav-link link-dark">
                    Orders
                    </Link>
                </li>
                <li>
                    <Link href="#" className="nav-link link-dark">
                    Products
                    </Link>
                </li>
                <li>
                    <Link href="#" className="nav-link link-dark">
                    Customers
                    </Link>
                </li>
                </ul>
            </div>
            <div className="dropdown"></div>
        </div>
    )
}