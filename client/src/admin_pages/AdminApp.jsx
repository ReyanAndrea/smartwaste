import { useState } from "react";
import DashboardAdmin from "./DashboardAdminPage";
import DetailLaporan from "./DetailLaporanPage";

/**
 * AdminApp — entry point for the admin branch.
 * Routes between: dashboard → detail laporan
 */
export default function AdminApp() {
  const [screen, setScreen] = useState("dashboard");
  const [selectedLaporan, setSelectedLaporan] = useState(null);

  if (screen === "detail") {
    return (
      <DetailLaporan
        laporan={selectedLaporan}
        onKembali={() => setScreen("dashboard")}
      />
    );
  }

  return (
    <DashboardAdmin
      onDetailLaporan={(item) => {
        setSelectedLaporan(item);
        setScreen("detail");
      }}
      onLihatSemua={() => alert("Lihat Semua diklik")}
    />
  );
}