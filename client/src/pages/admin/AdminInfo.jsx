import { useContext} from "react";
import { UserContext } from "../../context/user/UserContext";
import { LoginRequired } from "../../components/LoginRequired";
import { Sidebar } from "../../components/Sidebar";

export function AdminInfo() {
    const {isLoggedIn, email, username, id} = useContext(UserContext);

    return (
        <div className="container-fluid">
            {
              isLoggedIn
                ? 
                    <div className="d-flex flex-wrap">
                        <Sidebar />
                        <div>
                            <h1 className="mb-4">Jūsų duomenys:</h1>
                            <h5>ID:  
                                <span className="text-primary"> {id}</span>
                            </h5>
                            <h5>Vartotojo vardas: 
                                <span className="text-primary"> {username}</span>
                            </h5>
                            <h5>Elektronis paštas:
                                <span className="text-primary"> {email}</span>
                            </h5>
                        </div>
                    </div>
                : <LoginRequired />
            }
        </div>
    )
}