import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Register() {

    const [username, setUsername] = useState('');
    // const [usernameError, setUsernameError] = useState('');
    
    const [email, setEmail] = useState('');
    // const [emailError, setEmailError] = useState('');
    
    const [password, setPassword] = useState('');
    // const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/user_register', {
                username,
                email,
                password,
            });
            navigate('/')
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-center flex-column col-6 col-xl-4 order-2 order-lg-1">
                <p className="text-center text-body h1 fw-bold mb-5 mt-4">Registracija</p>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input
                                onChange={e => setUsername(e.target.value)}
                                type="text"
                                id="username"
                                className="form-control"
                            />
                            <label className="form-label" htmlFor="username">Vartotojo vardas</label>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="form-control" 
                            />
                            <label className="form-label" htmlFor="email">El. paštas</label>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                className="form-control"
                            />
                            <label className="form-label" htmlFor="password">Slaptažodis</label>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill">
                            <input  
                                type="password"
                                id="password_confirm"
                                className="form-control"
                            />
                            <label className="form-label" htmlFor="password_confirm">Pakartokite slaptažodį</label>
                        </div>
                    </div>
                    <div className="form-check text-body d-flex justify-content-start mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="checkbox" />
                        <label className="form-check-label" htmlFor="checkbox">Sutinku su vartotojo sąlygomis</label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Registruotis</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
