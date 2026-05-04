import { useState, useEffect } from "react";
import api from "../api/axios";

const TABS = ["Semua", "Belum Diproses", "Diproses", "Selesai"];

const STATUS_COLOR = {
  Selesai: "#6aa06f",
  Diproses: "#4f9bb3",
  "Belum Diproses": "#b4825d",
};

export default function RiwayatLaporan({ onKembali, onDetailLaporan, onBeranda, onProfil }) {
  const [activeTab, setActiveTab] = useState("Semua");
  const [activeNav, setActiveNav] = useState("laporan");
  const [laporan, setLaporan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLaporan();
  }, []);

  const fetchLaporan = async () => {
    try {
      const res = await api.get("/laporan");
      setLaporan(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusLabel = (status) => {
    if (status === "menunggu") return "Belum Diproses";
    if (status === "diproses") return "Diproses";
    return "Selesai";
  };

  const formatTime = (dateStr) => {
    const diff = Math.floor((new Date() - new Date(dateStr)) / 1000 / 60);
    if (diff < 60) return `${diff} menit yang lalu`;
    if (diff < 1440) return `${Math.floor(diff / 60)} jam yang lalu`;
    return `${Math.floor(diff / 1440)} hari yang lalu`;
  };

  const filtered = activeTab === "Semua"
    ? laporan
    : laporan.filter((l) => getStatusLabel(l.status) === activeTab);

  return (
    <div style={{
      width: "100%", maxWidth: "430px", minHeight: "100vh",
      background: "#a8c28f", fontFamily: "Poppins, sans-serif",
      display: "flex", flexDirection: "column", paddingBottom: 100, margin: "0 auto",
    }}>
      {/* HEADER */}
      <div style={{ padding: "28px 24px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, fontWeight: "700", color: "#fff", flex: 1, textAlign: "center" }}>
            Semua Laporan
          </div>
          <div style={{ fontSize: 24 }}>🗑️</div>
        </div>
      </div>

      {/* BODY */}
      <div style={{
        background: "#557f59", borderTopLeftRadius: 60, borderTopRightRadius: 60,
        padding: "26px 16px", flex: 1, marginTop: 20,
      }}>
        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "7px 14px", borderRadius: 20, border: "none",
                fontSize: 12, fontWeight: "700", cursor: "pointer",
                background: activeTab === tab ? "#2D5A3D" : "#6A9E7A",
                color: "#fff", whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* List */}
        <div style={{ background: "#dfe8dc", borderRadius: 28, padding: "10px 12px" }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: 20, color: "#557f59" }}>Memuat...</div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: 20, color: "#557f59" }}>Tidak ada laporan</div>
          ) : (
            filtered.map((item, index) => {
              const label = getStatusLabel(item.status);
              return (
                <div key={item.id}>
                  <div
                    style={{ display: "flex", gap: 10, alignItems: "center", padding: "13px 0", cursor: "pointer" }}
                    onClick={() => onDetailLaporan && onDetailLaporan(item)}
                  >
                    <img
                      src={`http://localhost:5000/uploads/${item.photo}`}
                      alt=""
                      style={{ width: 62, height: 62, borderRadius: 18, objectFit: "cover", flexShrink: 0 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: "700", fontSize: 14, color: "#2f2f2f" }}>{item.title}</div>
                      <div style={{ color: "#666", fontSize: 12, marginTop: 4 }}>{formatTime(item.created_at)}</div>
                    </div>
                    <div style={{
                      background: STATUS_COLOR[label],
                      color: "#fff", padding: "5px 12px",
                      borderRadius: 14, fontSize: 11, fontWeight: "600",
                      minWidth: 82, textAlign: "center", flexShrink: 0,
                    }}>
                      {label}
                    </div>
                  </div>
                  {index !== filtered.length - 1 && (
                    <div style={{ height: 1, background: "#a07b5e", opacity: 0.4 }} />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        position: "fixed", bottom: 14, left: "50%", transform: "translateX(-50%)",
        width: "calc(100% - 40px)", maxWidth: "390px", height: 72,
        background: "#d7d39c", borderRadius: 38,
        display: "flex", justifyContent: "space-around", alignItems: "center",
        padding: "0 10px", zIndex: 999,
      }}>
        <div onClick={() => { setActiveNav("beranda"); onBeranda && onBeranda(); }} style={menuItem(activeNav === "beranda" ? "#a8b97d" : "transparent")}>
          <div style={{ fontSize: 22 }}>⊞</div>Beranda
        </div>
        <div onClick={() => setActiveNav("laporan")} style={menuItem(activeNav === "laporan" ? "#a8b97d" : "transparent")}>
          <div style={{ fontSize: 22 }}>🗑</div>Laporan
        </div>
        <div onClick={() => { setActiveNav("profil"); onProfil && onProfil(); }} style={menuItem(activeNav === "profil" ? "#a8b97d" : "transparent")}>
          <div style={{ fontSize: 22 }}>👤</div>Profil
        </div>
      </div>
    </div>
  );
}

function menuItem(bg) {
  return {
    width: 68, textAlign: "center", fontSize: 12, fontWeight: "600",
    color: "#6b4d34", cursor: "pointer", padding: "8px 4px", borderRadius: 18, background: bg,
  };
}