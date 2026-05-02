import { useState } from "react";
import DashboardAdminPage from "./DashboardAdminPage";
import DetailLaporanPage from "./DetailLaporanPage";
import RiwayatLaporanPage from "./RiwayatLaporanPage";
import ProfilePage from "./ProfilePage";
import TentangSistemPage from "./TentangSistemPage";

export default function AdminApp() {
  const [screen, setScreen] = useState("dashboard");
  const [selectedLaporan, setSelectedLaporan] = useState(null);

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
        onLogout={() => setScreen("dashboard")}
      />
    );
  }

  if (screen === "tentang") {
    return (
      <TentangSistemPage onKembali={() => setScreen("profil")} />
    );
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
}