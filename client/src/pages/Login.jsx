import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { passwordIsInvalid, usernameOrEmailIsInvalid } from "../lib/validation";

export function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [usernameOrEmailError, setUsernameOrEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        setUsernameOrEmailError('');
        setPasswordError('');

        let hasError = false;

        if (usernameOrEmailIsInvalid(usernameOrEmail)) {
            setUsernameOrEmailError(usernameOrEmailIsInvalid(usernameOrEmail));
            hasError = true;
        }

        if (passwordIsInvalid(password)) {
            setPasswordError(passwordIsInvalid(password));
            hasError = true;
        }

        if (hasError) return;

        try {
            const res = await axios.post('http://localhost:5000/login', {
                usernameOrEmail,
                password,
            });
            console.log(res);
            navigate('/');
        } catch (error) {
            console.log(error);

            if (error.response.data.status === 'error') {
                setError(error.response.data.message);
            } else {
                setError('Serverio klaida, pabandykite veliau');
            }
        }
    }

    return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-center flex-column col-6 col-lg-4 col-xl-3 order-2 order-lg-1">
                <p className="text-center text-body h1 fw-bold mb-5 mt-4">Prisijungimas</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 fw-bold" style={{color: 'red'}}>{error}</div>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input onChange={e => setUsernameOrEmail(e.target.value)} type="text" id="username_or_email" className={"form-control" + (usernameOrEmailError ? ' is-invalid' : '')} />
                            <label className="form-label" htmlFor="username_or_email">Vartotojo vardas arba el. paštas</label>
                            <div style={{color: 'red'}}>{usernameOrEmailError}</div>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input onChange={e => setPassword(e.target.value)} type="password" id="password" className={"form-control" + (passwordError ? ' is-invalid' : '')} />
                            <label className="form-label" htmlFor="password">Slaptažodis</label>
                            <div style={{color: 'red'}}>{passwordError}</div>
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
