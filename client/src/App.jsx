import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {AboutUs} from "./pages/AboutUs";
import {Services} from "./pages/Services";
import {Reservation} from "./pages/Reservation";
import {NotFound} from "./pages/NotFound";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/reservation" element={<Reservation />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
