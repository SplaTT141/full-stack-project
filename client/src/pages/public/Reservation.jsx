import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nameIsInvalid, surnameIsInvalid, emailIsInvalid, phoneIsInvalid, dateIsInvalid, timeIsInvalid, serviceIsInvalid } from "../../lib/validation";

export function Reservation() {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [servicesError, setServicesError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [surname, setSurname] = useState("");
  const [surnameError, setSurnameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [service, setService] = useState("");
  const [serviceError, setServiceError] = useState("");

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");

  const [time, setTime] = useState("");
  const [timeError, setTimeError] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/services`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setServices(data.services);
        } else {
          setServicesError("Nepavyko įkelti paslaugų");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setNameError("");
    setSurnameError("");
    setEmailError("");
    setPhoneError("");
    setDateError("");
    setTimeError("");

    let hasError = false;

    if (nameIsInvalid(name)) {
      setNameError(nameIsInvalid(name));

      hasError = true;
    }

    if (surnameIsInvalid(surname)) {
      setSurnameError(surnameIsInvalid(surname));

      hasError = true;
    }

    if (emailIsInvalid(email)) {
      setEmailError(emailIsInvalid(email));

      hasError = true;
    }

    if (phoneIsInvalid(phone)) {
      setPhoneError(phoneIsInvalid(phone));

      hasError = true;
    }

    if (serviceIsInvalid(service)) {
      setServiceError(serviceIsInvalid(service));

      hasError = true;
    }

    if (dateIsInvalid(date)) {
      setDateError(dateIsInvalid(date));

      hasError = true;
    }

    if (timeIsInvalid(time)) {
      setTimeError(timeIsInvalid(time));

      hasError = true;
    }

    if (hasError) return;

    fetch(`${import.meta.env.VITE_BACKEND_URL}/reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        phone,
        service,
        date,
        time,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          setError(data.message);
        } else {
          setSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container py-5">
        <div className="bd-example-snippet bd-code-snippet">
            <div className="bd-example m-0 border-0">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 fw-bold" style={{ color: "red" }}>{error}</div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Vardas
                        </label>
                        <input 
                            onChange={(e)=> setName(e.target.value)}
                            type="text"
                            id="name"
                            className={"form-control" + (nameError ? ' is-invalid' : '')}
                            required
                        />
                        <div style={{color: 'red'}}>{nameError}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="second_name" className="form-label">
                            Pavardė
                        </label>
                        <input 
                            onChange={(e)=> setSurname(e.target.value)} 
                            type="text" 
                            id="second_name"
                            className={"form-control" + (surnameError ? ' is-invalid' : '')} 
                            required
                        />
                        <div style={{color: 'red'}}>{surnameError}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            El. paštas
                        </label>
                        <input 
                            onChange={(e)=> setEmail(e.target.value)} 
                            type="email" 
                            id="email"
                            className={"form-control" + (emailError ? ' is-invalid' : '')} 
                            required 
                        />
                        <div style={{color: 'red'}}>{emailError}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">
                            Telefono numeris
                        </label>
                        <input 
                            onChange={(e)=> setPhone(e.target.value)} 
                            type="phone" 
                            id="phone"
                            className={"form-control" + (phoneError ? ' is-invalid' : '')} 
                            required
                        />
                        <div style={{color: 'red'}}>{phoneError}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleSelect" className="form-label">
                            Pasirinkite paslaugą
                        </label>
                        <div className="mb-3 fw-bold" style={{ color: "red" }}>
                            {servicesError}
                        </div>
                        <select onChange={(e)=> setService(e.target.value)} className={"form-select" + (serviceError ? ' is-invalid' : '')} required>
                            <option value="">Paslaugos...</option>
                            {services.map((service, index) => (
                            <option key={index} value={service.id}>
                                {service.service}
                            </option>
                            ))}
                        </select>
                        <div style={{color: 'red'}}>{serviceError}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pasirinkite datą </label>
                        <input 
                            onChange={(e)=> setDate(e.target.value)} 
                            type="date" 
                            className={"form-control" + (dateError ? ' is-invalid' : '')} 
                            required 
                        />
                        <div style={{color: 'red'}}>{dateError}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pasirinkite laiką</label>
                        <input 
                            onChange={(e)=> setTime(e.target.value)} 
                            type="time" 
                            className={"form-control" + (timeError ? ' is-invalid' : '')} 
                            required
                        />
                        <div style={{color: 'red'}}>{timeError}</div>
                    </div>
                    {success && <div className="alert alert-success">Laikas rezervuotas sėkmingai!</div>}
                    <button type="submit" className="btn btn-primary mt-2">
                        Patvirtinti
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}
