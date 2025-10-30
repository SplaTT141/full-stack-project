import { Sidebar } from "../../components/Sidebar";
import { LoginRequired } from "../../components/LoginRequired";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user/UserContext";
import { useNavigate } from "react-router-dom";

export function AdminAddService() {
    const {isLoggedIn} = useContext(UserContext);

    const [service, setService] = useState('');
    const [duration, setDuration] = useState(0);
    const [price, setPrice] = useState(0);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:5000/admin/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service, duration, price
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    navigate('/admin/services')
                }
            })
            .catch(error => console.log(error)) 
    }

    return (
    <div className="container-fluid">
        <div className="row">
        {
        isLoggedIn
        ?
        <div className="d-flex flex-wrap">
            <Sidebar />
            <div className="bd-example-snippet bd-code-snippet w-md-75 w-lg-50 col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8">
                <div className="bd-example m-0 border-0">
                    <h1>Pridėti paslaugą</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-5">
                            <label htmlFor="service" className="form-label">Paslaugos pavadinimas</label>
                            <input onChange={e => setService(e.target.value)} type="text" id="service" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="duration" className="form-label">Trukmė minutėm</label>
                            <input onChange={e => setDuration(e.target.value)} type="number" className="form-control" id="duration" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Kaina €</label>
                            <input onChange={e => setPrice(e.target.value)} type="number" id="price" className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Patvirtinti</button>
                    </form>
                </div>
            </div>
        </div>
        :
        <LoginRequired />
        }
        </div>
    </div>
    )
}