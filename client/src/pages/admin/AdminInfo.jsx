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
                    <>
                        <Sidebar />
                        <h1>Vartotojo informacija</h1>
                    </>
                : <LoginRequired />
            }
        </div>
    )
}