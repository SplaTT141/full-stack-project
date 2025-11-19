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
import { Logout } from "./pages/public/Logout";
import { Dashboard } from "./pages/admin/Dashboard";
import { UserContextWrapper } from "./context/user/UserContextWrapper";
import { AdminServices } from "./pages/admin/AdminServices";
import { AdminInfo } from "./pages/admin/AdminInfo";
import { AdminReservations } from "./pages/admin/AdminReservations";
import { AdminAddService } from "./pages/admin/AdminAddService";
import { AdminEditService } from "./pages/admin/AdminEditService";
import { AdminEditReservation } from "./pages/admin/AdminEditReservation";
import { ServicesContextWrapper } from "./context/services/ServicesContextWrapper";

function App() {

  return (
    <UserContextWrapper>
      <ServicesContextWrapper>
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

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/info" element={<AdminInfo />} />
          <Route path="/admin/reservations" element={<AdminReservations />} />
          <Route path="/admin/services/add" element={<AdminAddService />} />
          <Route path="/admin/services/edit/:id" element={<AdminEditService />} />
          <Route path="/admin/reservation/edit/:id" element={<AdminEditReservation />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </ServicesContextWrapper>
    </UserContextWrapper>
  )
}

export default App
