import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/public/Home";
import {AboutUs} from "./pages/public/AboutUs";
import {Services} from "./pages/public/Services";
import {Reservation} from "./pages/public/Reservation";
import {NotFound} from "./pages/public/NotFound";
import { Login } from "./pages/public/Login";
import { Register } from "./pages/public/Register";
import { Logout } from "./pages/admin/Logout";
import { Dashboard } from "./pages/admin/Dashboard";
import { UserContextWrapper } from "./context/user/UserContextWrapper";

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
