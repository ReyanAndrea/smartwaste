import { useState } from "react";
import DashboardAdmin from "./DashboardAdmin";
import DetailLaporan from "./DetailLaporan";
import RiwayatLaporan from "./RiwayatLaporan";

export default function AdminApp() {
  const [screen, setScreen] = useState("dashboard");
  const [selectedLaporan, setSelectedLaporan] = useState(null);

  if (screen === "detail") {
    return (
      <DetailLaporan
        laporan={selectedLaporan}
        onKembali={() => setScreen(selectedLaporan?._from || "dashboard")}
      />
    );
  }

  if (screen === "riwayat") {
    return (
      <RiwayatLaporan
        onBeranda={() => setScreen("dashboard")}
        onDetailLaporan={(item) => {
          setSelectedLaporan({ ...item, _from: "riwayat" });
          setScreen("detail");
        }}
      />
    );
  }

  return (
    <DashboardAdmin
      onDetailLaporan={(item) => {
        setSelectedLaporan({ ...item, _from: "dashboard" });
        setScreen("detail");
      }}
      onLihatSemua={() => setScreen("riwayat")}
      onLaporan={() => setScreen("riwayat")}
    />
  );
}