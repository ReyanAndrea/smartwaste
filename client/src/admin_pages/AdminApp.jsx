import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardAdminPage from "./DashboardAdminPage";
import DetailLaporanPage from "./DetailLaporanPage";
import RiwayatLaporanPage from "./RiwayatLaporanPage";
import ProfilePage from "./ProfilePage";
import TentangSistemPage from "./TentangSistemPage";

export default function AdminApp() {
  const [screen, setScreen] = useState("dashboard");
  const [selectedLaporan, setSelectedLaporan] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const renderScreen = () => {
    if (screen === "detail") {
      return (
        <DetailLaporanPage
          laporan={selectedLaporan}
          onKembali={() => setScreen(selectedLaporan?._from || "dashboard")}
        />
      );
    }
    if (screen === "riwayat") {
      return (
        <RiwayatLaporanPage
          onBeranda={() => setScreen("dashboard")}
          onLaporan={() => setScreen("riwayat")}
          onProfil={() => setScreen("profil")}
          onDetailLaporan={(item) => {
            setSelectedLaporan({ ...item, _from: "riwayat" });
            setScreen("detail");
          }}
        />
      );
    }
    if (screen === "profil") {
      return (
        <ProfilePage
          onBeranda={() => setScreen("dashboard")}
          onLaporan={() => setScreen("riwayat")}
          onTentangSistem={() => setScreen("tentang")}
          onLogout={handleLogout}
        />
      );
    }
    if (screen === "tentang") {
      return <TentangSistemPage onKembali={() => setScreen("profil")} />;
    }
    return (
      <DashboardAdminPage
        onDetailLaporan={(item) => {
          setSelectedLaporan({ ...item, _from: "dashboard" });
          setScreen("detail");
        }}
        onLihatSemua={() => setScreen("riwayat")}
        onLaporan={() => setScreen("riwayat")}
        onProfil={() => setScreen("profil")}
      />
    );
  };

 return (
  <div style={{
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#4A7C59",
    display: "flex",
    justifyContent: "center",
  }}>
    <div style={{
      width: "100%",
      maxWidth: "430px",
      minHeight: "100vh",
      position: "relative",
    }}>
      {renderScreen()}
    </div>
  </div>
);
}