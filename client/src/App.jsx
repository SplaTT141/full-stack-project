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
import { Logout } from "./pages/Logout";
import { UserContextWrapper } from "./context/user/UserContextWrapper";
import { Dashboard } from "./pages/Dashboard";

function App() {

  return (
    <UserContextWrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/reservation" element={<Reservation />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContextWrapper>
  )
}

export default App
