import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import { LoginRequired } from "../../components/LoginRequired";
import { Sidebar } from "../../components/Sidebar";

export function AdminServices() {
    const {isLoggedIn} = useContext(UserContext);

    return (
        <div className="container">
            {
              isLoggedIn 
                ? 
                    <>
                        <Sidebar />
                        <h1>Kirpyklos paslaugos</h1>
                    </>
                : <LoginRequired />
            }
        </div>
    )
}