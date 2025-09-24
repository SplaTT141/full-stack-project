import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const res = await axios.post('http://localhost:5000/login', {
                usernameOrEmail,
                password,
            });
            console.log(res);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-center flex-column col-6 col-lg-4 col-xl-3 order-2 order-lg-1">
                <p className="text-center text-body h1 fw-bold mb-5 mt-4">Prisijungimas</p>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input onChange={e => setUsernameOrEmail(e.target.value)} type="text" id="username_or_email" className="form-control" />
                            <label className="form-label" htmlFor="username_or_email">Vartotojo vardas arba el. paštas</label>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="form-control" />
                            <label className="form-label" htmlFor="password">Slaptažodis</label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Prisijungti</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
