import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";

export function Logout() {
    const {isLoggedIn} = useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                {
                    isLoggedIn 
                        ? <h1>Tu esi prisijunges</h1>
                        : <h1>Tu esi neprisijunges</h1>
                }
            </div>
        </div>
    )
}