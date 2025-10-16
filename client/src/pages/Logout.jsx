import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";

export function Logout() {
    const {isLoggedIn, logout} = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogoutClick() {
        logout();
        navigate('/');
    }

    return (
        <div className="container">
            <div className="row">
                {
                    isLoggedIn 
                        ? 
                            <div className="col-12">
                                <h1>Ar tikrai norite atsijungti?</h1>
                                <button onClick={handleLogoutClick} className="btn btn-primary mt-4">Atsijungti</button>
                            </div>
                        : <h1>Tu esi neprisijungęs</h1>
                }
            </div>
        </div>
    )
}