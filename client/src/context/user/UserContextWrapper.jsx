import { useEffect, useState } from "react"
import { UserContext } from "./UserContext";
import { initialUserContext } from "./initialUserContext"

export function UserContextWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(initialUserContext.isLoggedIn);
    const [role, setRole] = useState(initialUserContext.role);
    const [email, setEmail] = useState(initialUserContext.email);
    const [id, setId] = useState(initialUserContext.id);

    useEffect(() => {
        fetch('http://localhost:5000/login', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    login(data.user.email, data.user.id);
                }
            })
            .catch(error => console.log(error));
    }, []);

    function login(email, userId) {
        setIsLoggedIn(true);
        setRole('admin');
        setEmail(email);
        setId(userId);
    }
    
    function logout() {
        setIsLoggedIn(false);
        setRole('public');
        setEmail('');
        setId('');
    } 

    const values = {
        isLoggedIn,
        role,
        email,
        id,
        login,
        logout
    }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}
