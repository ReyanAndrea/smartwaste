import { BrowserRouter, Routes, Route } from "react-router-dom";

// Warga pages
import Welcomepage from "./pages/Welcomepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import DashboardPage from "./pages/DashboardPage";
import DetailReportPage from "./pages/DetailReportPage";
import Historypage from "./pages/Historypage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import NotificationPage from "./pages/NotificationPage";
import Reportpage from "./pages/Reportpage";
import Landingpage from "./pages/Landingpage";

// Admin pages
import AdminApp from "./admin_pages/AdminApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Welcomepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/landing" element={<Landingpage />} />

        {/* Warga */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/report" element={<Reportpage />} />
        <Route path="/detail-report/:id" element={<DetailReportPage />} />
        <Route path="/history" element={<Historypage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/notification" element={<NotificationPage />} />

        {/* Admin */}
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  );
}