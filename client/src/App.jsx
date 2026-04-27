import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import LoginWargaPage from './pages/LoginWargaPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ReportPage from './pages/ReportPage';
import HistoryPage from './pages/HistoryPage';


export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '430px', margin: '0 auto', minHeight: '100vh', background: 'white' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login-warga" element={<LoginWargaPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}