import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import api from "../api/axios";

export default function HistoryPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Semua");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLaporan();
  }, []);

  const fetchLaporan = async () => {
    try {
      const res = await api.get("/api/laporan/my");
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
  };

  const getStatusColor = (status) => {
    if (status === "menunggu") return "#b88458";
    if (status === "diproses") return "#4f9db5";
    return "#72a66d";
  };

  const getStatusLabel = (status) => {
    if (status === "menunggu") return "Menunggu";
    if (status === "diproses") return "Diproses";
    return "Selesai";
  };

  const filtered = filter === "Semua"
    ? data
    : data.filter((item) => getStatusLabel(item.status) === filter);

  const filterBtn = (active) => ({
    padding: "7px 0",
    borderRadius: "20px",
    border: "1px solid #21553f",
    background: active ? "#a8c487" : "#d9e4d0",
    color: "#fff",
    fontSize: "11px",
    fontWeight: "700",
    cursor: "pointer",
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#9fbb87",
      display: "flex",
      justifyContent: "center",
      fontFamily: "Poppins, sans-serif",
      overflow: "hidden",
    }}>
      <div style={{
        width: "430px",
        height: "100vh",
        background: "#9fbb87",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* HEADER */}
        <div style={{ padding: "20px 22px 0" }}>
          <div
            onClick={() => navigate("/notif")}
            style={{ position: "absolute", right: "24px", top: "18px", fontSize: "18px", cursor: "pointer" }}
          >
            🔔
          </div>

          <h1 style={{
            textAlign: "center", color: "#fff", fontSize: "24px",
            fontWeight: "700", marginTop: "70px", marginBottom: "8px",
          }}>
            Riwayat Laporan
          </h1>

          <div style={{ textAlign: "right" }}>
            <img src={logo} alt="logo" style={{ width: "30px" }} />
          </div>
        </div>

        {/* BODY */}
        <div style={{
          marginTop: "14px",
          background: "#557f59",
          borderTopLeftRadius: "56px",
          borderTopRightRadius: "56px",
          height: "calc(100vh - 170px)",
          padding: "20px 14px 100px",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}>
          {/* FILTER */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "8px",
            marginBottom: "16px",
          }}>
            {["Semua", "Menunggu", "Diproses", "Selesai"].map((item) => (
              <button key={item} onClick={() => setFilter(item)} style={filterBtn(filter === item)}>
                {item}
              </button>
            ))}
          </div>

          {/* LIST */}
          <div style={{ background: "#cfd8cc", borderRadius: "28px", padding: "10px 12px" }}>
            {loading ? (
              <div style={{ textAlign: "center", padding: "20px", color: "#557f59" }}>Memuat...</div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "20px", color: "#557f59" }}>Tidak ada laporan</div>
            ) : (
              filtered.map((item, index) => (
                <div key={item.id}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center", padding: "13px 0" }}>
                    <img
                      src={`https://server-production-9743.up.railway.app/api/uploads/${item.photo}`}
                      alt=""
                      style={{ width: "62px", height: "62px", borderRadius: "18px", objectFit: "cover" }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: "700", fontSize: "14px", color: "#2f2f2f" }}>
                        {item.title}
                      </div>
                      <div style={{ color: "#666", fontSize: "12px", marginTop: "4px" }}>
                        {formatDate(item.created_at)}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{
                        background: getStatusColor(item.status),
                        color: "#fff",
                        padding: "5px 12px",
                        borderRadius: "14px",
                        fontSize: "11px",
                        fontWeight: "600",
                        minWidth: "82px",
                      }}>
                        {getStatusLabel(item.status)}
                      </div>
                      <div
                        onClick={() => navigate(`/detail/${item.id}`)}
                        style={{
                          fontSize: "10px", marginTop: "5px", color: "#7b5d43",
                          cursor: "pointer", textDecoration: "underline",
                        }}
                      >
                        Detail Laporan ›
                      </div>
                    </div>
                  </div>
                  {index !== filtered.length - 1 && (
                    <div style={{ height: "1px", background: "#9b7b59", opacity: "0.4" }} />
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* FOOTBAR */}
        <div style={{
          position: "fixed", bottom: "14px", left: "50%", transform: "translateX(-50%)",
          width: "430px", maxWidth: "92%", height: "72px", background: "#d7d39c",
          borderRadius: "38px", display: "flex", justifyContent: "space-around",
          alignItems: "center", padding: "0 10px", zIndex: 999,
        }}>
          <div onClick={() => navigate("/dashboard")} style={menuItem()}>
            <div style={{ fontSize: "22px" }}>🏠</div>Beranda
          </div>
          <div onClick={() => navigate("/report")} style={menuItem()}>
            <div style={{ fontSize: "22px" }}>📄</div>Laporan
          </div>
          <div onClick={() => navigate("/report")} style={{
            width: "72px", height: "72px", borderRadius: "50%", background: "#88a36f",
            color: "#fff", fontSize: "42px", display: "flex", justifyContent: "center",
            alignItems: "center", marginTop: "-34px", fontWeight: "700", cursor: "pointer",
          }}>+</div>
          <div onClick={() => navigate("/history")} style={menuItem("#a8b97d")}>
            <div style={{ fontSize: "22px" }}>🕒</div>Riwayat
          </div>
          <div onClick={() => navigate("/profile")} style={menuItem()}>
            <div style={{ fontSize: "22px" }}>👤</div>Profil
          </div>
        </div>
      </div>
    </div>
  );
}

function menuItem(bg = "transparent") {
  return {
    width: "68px", textAlign: "center", fontSize: "12px", fontWeight: "600",
    color: "#6b4d34", cursor: "pointer", padding: "8px 4px", borderRadius: "18px", background: bg,
  };
}