import { useState, useEffect } from "react";
import api from "../api/axios";

const HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

function getNow() {
  const now = new Date();
  return {
    dateText: `${HARI[now.getDay()]}, ${now.getDate()} ${BULAN[now.getMonth()]} ${now.getFullYear()}`,
    timeText: `${String(now.getHours()).padStart(2,"0")}.${String(now.getMinutes()).padStart(2,"0")} ${now.getHours() >= 12 ? "PM" : "AM"}`,
  };
}

export default function DashboardAdmin({ onDetailLaporan, onLihatSemua, onLaporan, onProfil }) {
  const [activeTab, setActiveTab] = useState("beranda");
  const [clock, setClock] = useState(getNow());
  const [laporan, setLaporan] = useState([]);
  const [statistik, setStatistik] = useState({ menunggu: 0, diproses: 0, selesai: 0, total: 0 });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setClock(getNow()), 1000);
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
    fetchData();
    return () => clearInterval(timer);
  }, []);

  const fetchData = async () => {
    try {
      const [laporanRes, statistikRes] = await Promise.all([
        api.get("/laporan"),
        api.get("/laporan/statistik"),
      ]);
      setLaporan(laporanRes.data.slice(0, 4));
      setStatistik(statistikRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (dateStr) => {
    const diff = Math.floor((new Date() - new Date(dateStr)) / 1000 / 60);
    if (diff < 60) return `${diff} menit yang lalu`;
    if (diff < 1440) return `${Math.floor(diff / 60)} jam yang lalu`;
    return `${Math.floor(diff / 1440)} hari yang lalu`;
  };

  const selesaiPct = statistik.total > 0 ? Math.round((statistik.selesai / statistik.total) * 100) : 0;

  return (
    <div style={{
      width: "100%", maxWidth: "430px", minHeight: "100vh",
      background: "#a8c28f", fontFamily: "Poppins, sans-serif",
      display: "flex", flexDirection: "column", paddingBottom: 100, margin: "0 auto",
    }}>
      {/* HEADER */}
      <div style={{ padding: "28px 24px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: "800" }}>
              <span style={{ color: "#D2D0A0" }}>Halo, </span>
              <span style={{ color: "#fff" }}>{user?.name || "Petugas"}!</span>
            </div>
            <div style={{ color: "#fff", fontSize: 13, marginTop: 6, opacity: 0.9 }}>{clock.dateText}</div>
            <div style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>{clock.timeText}</div>
          </div>
          <div style={{ fontSize: 28, marginTop: 8 }}>🗑️</div>
        </div>
      </div>

      {/* BODY */}
      <div style={{
        background: "#557f59", borderTopLeftRadius: 60, borderTopRightRadius: 60,
        padding: "26px 20px", flex: 1,
      }}>
        {/* Stats Card */}
        <div style={{
          background: "#fff", borderRadius: 20, padding: "18px 20px",
          display: "flex", alignItems: "center", gap: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)", marginBottom: 20,
        }}>
          <div style={{ fontSize: 40 }}>📊</div>
          <div>
            <div style={{ fontSize: 22, fontWeight: "700", color: "#2D2D2D" }}>
              {selesaiPct}% ({statistik.selesai}/{statistik.total})
            </div>
            <div style={{ fontSize: 13, color: "#666", marginTop: 2 }}>total laporan diselesaikan</div>
          </div>
        </div>

        {/* Laporan List */}
        <div style={{ color: "#fff", fontWeight: "700", fontSize: 16, marginBottom: 12 }}>
          Laporan Hari Ini
        </div>

        <div style={{ background: "#dfe8dc", borderRadius: 28, padding: "10px 14px", marginBottom: 16 }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: 20, color: "#557f59" }}>Memuat...</div>
          ) : laporan.length === 0 ? (
            <div style={{ textAlign: "center", padding: 20, color: "#557f59" }}>Belum ada laporan</div>
          ) : (
            laporan.map((item, idx) => (
              <div key={item.id}>
                <div style={{ display: "flex", alignItems: "flex-start", padding: "10px 4px", gap: 12 }}>
                  <img
                    src={`http://localhost:5000/uploads/${item.photo}`}
                    alt=""
                    style={{ width: 56, height: 56, borderRadius: 14, objectFit: "cover", flexShrink: 0 }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: "700", fontSize: 14, color: "#2f2f2f" }}>{item.title}</div>
                    <div style={{ color: "#666", fontSize: 12, marginTop: 3 }}>{formatTime(item.created_at)}</div>
                    <div
                      onClick={() => onDetailLaporan && onDetailLaporan(item)}
                      style={{ color: "#7b5d43", fontSize: 11, marginTop: 4, textDecoration: "underline", cursor: "pointer", textAlign: "right" }}
                    >
                      Detail Laporan ›
                    </div>
                  </div>
                </div>
                {idx < laporan.length - 1 && <div style={{ height: 1, background: "#a07b5e", opacity: 0.4, margin: "4px 0" }} />}
              </div>
            ))
          )}
        </div>

        {/* Lihat Semua */}
        <button
          onClick={onLihatSemua}
          style={{
            width: "100%", height: 50, border: "none", borderRadius: 30,
            background: "#b4825d", color: "#fff", fontSize: 16,
            fontWeight: "700", cursor: "pointer",
          }}
        >
          Lihat Semua
        </button>
      </div>

      {/* FOOTER */}
      <div style={{
        position: "fixed", bottom: 14, left: "50%", transform: "translateX(-50%)",
        width: "calc(100% - 40px)", maxWidth: "390px", height: 72,
        background: "#d7d39c", borderRadius: 38,
        display: "flex", justifyContent: "space-around", alignItems: "center",
        padding: "0 10px", zIndex: 999,
      }}>
        <div onClick={() => setActiveTab("beranda")} style={menuItem(activeTab === "beranda" ? "#a8b97d" : "transparent")}>
          <div style={{ fontSize: 22 }}>⊞</div>Beranda
        </div>
        <div onClick={() => { setActiveTab("laporan"); onLaporan && onLaporan(); }} style={menuItem(activeTab === "laporan" ? "#a8b97d" : "transparent")}>
          <div style={{ fontSize: 22 }}>🗑</div>Laporan
        </div>
        <div onClick={() => { setActiveTab("profil"); onProfil && onProfil(); }} style={menuItem(activeTab === "profil" ? "#a8b97d" : "transparent")}>
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