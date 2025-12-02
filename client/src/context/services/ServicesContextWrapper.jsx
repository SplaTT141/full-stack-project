import { useEffect, useState } from "react";
import { ServicesContext } from './ServicesContext';
import { initialServicesContext } from "./initialServicesContext";

export function ServicesContextWrapper(props) {
    const [servicesData, setServicesData] = useState(initialServicesContext.data);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/services`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setServicesData(data.services);
                }
            })
            .catch(error => console.log(error));
    }, []);

    const values = {
        servicesData
    }

    return (
        <ServicesContext.Provider value={values}>
            {props.children}
        </ServicesContext.Provider>
    )
}
