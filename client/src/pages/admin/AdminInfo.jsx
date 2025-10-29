import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import { LoginRequired } from "../../components/LoginRequired";
import { Sidebar } from "../../components/Sidebar";

export function AdminInfo() {
    const {isLoggedIn} = useContext(UserContext);

    return (
        <div className="container">
            {
              isLoggedIn 
                ? 
                    <div className="d-flex flex-wrap">
                        <Sidebar />
                        <h1>Vartotojo info:</h1>
                    </div>
                : <LoginRequired />
            }
        </div>
    )
}