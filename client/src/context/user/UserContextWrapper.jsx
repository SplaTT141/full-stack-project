import { useEffect, useState } from "react"
import { initialUserContext } from "./initialUserContext"

export function UserContextWrapper() {
    const [isLoggedIn, setIsLoggedIn] = useState(initialUserContext.isLoggedIn);
    const [role, setRole] = useState(initialUserContext.role);
    const [email, setEmail] = useState(initialUserContext.email);
    const [id, setId] = useState(initialUserContext.id);

    useEffect(() => {
        
    }, []);
}