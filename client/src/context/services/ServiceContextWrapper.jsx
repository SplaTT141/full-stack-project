import { useEffect, useState } from "react";
import { ServiceContext } from './ServiceContext';
import { initialServiceContext } from "./initialServicesContext";

export function ServiceContextWrapper(props) {
    const [servicesData, setServicesData] = useState(initialServiceContext.data);

    useEffect(() => {
        fetch('http://localhost:5000/services', {
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
        <ServiceContext.Provider value={values}>
            {props.children}
        </ServiceContext.Provider>
    )
}
