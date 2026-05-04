import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import api from "../api/axios";

export default function DetailReportPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [laporan, setLaporan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      const res = await api.get(`/api/laporan/${id}`);
      setLaporan(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    if (status === "menunggu") return "#b4825d";
    if (status === "diproses") return "#4f9bb3";
    return "#6aa06f";
  };

  const getStatusLabel = (status) => {
    if (status === "menunggu") return "Menunggu";
    if (status === "diproses") return "Diproses";
    return "Selesai";
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
  };

  const formatDateTime = (dateStr) => {
    return new Date(dateStr).toLocaleString("id-ID", {
      day: "numeric", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit"
    });
  };

  if (loading) return (
    <div style={{ textAlign: "center", padding: "40px", color: "#557f59" }}>Memuat...</div>
  );

  if (!laporan) return (
    <div style={{ textAlign: "center", padding: "40px", color: "#557f59" }}>Laporan tidak ditemukan</div>
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "#a8c28f",
      display: "flex",
      justifyContent: "center",
      fontFamily: "Poppins, sans-serif",
    }}>
      <div style={{
        width: "430px",
        minHeight: "100vh",
        background: "#a8c28f",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* HEADER */}
        <div style={{ padding: "24px" }}>
          <div
            onClick={() => navigate("/history")}
            style={{ color: "#fff", fontWeight: "700", cursor: "pointer", fontSize: "15px" }}
          >
            ← Kembali
          </div>

          <div
            onClick={() => navigate("/notif")}
            style={{ position: "absolute", top: "24px", right: "24px", cursor: "pointer", fontSize: "20px" }}
          >
            🔔
          </div>

          <h1 style={{ textAlign: "center", color: "#fff", marginTop: "32px", fontSize: "24px", fontWeight: "600" }}>
            Detail Laporan
          </h1>

          <img src={logo} alt="logo" style={{ width: "30px", position: "absolute", right: "26px", top: "92px" }} />
        </div>

        {/* BODY */}
        <div style={{
          background: "#557f59",
          borderTopLeftRadius: "48px",
          borderTopRightRadius: "48px",
          marginTop: "28px",
          padding: "42px 18px 80px",
          minHeight: "78vh",
        }}>
          {/* TOP */}
          <div style={{ display: "flex", gap: "16px" }}>
            <img
              src={`https://server-production-9743.up.railway.app/api/uploads/${laporan.photo}`}
              alt=""
              style={{ width: "72px", height: "72px", borderRadius: "18px", objectFit: "cover" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "16px", lineHeight: "1.4" }}>
                {laporan.title}
              </div>
              <div style={{
                marginTop: "10px",
                background: getStatusColor(laporan.status),
                color: "#fff",
                width: "120px",
                textAlign: "center",
                padding: "7px",
                borderRadius: "22px",
                fontWeight: "600",
                fontSize: "14px",
              }}>
                {getStatusLabel(laporan.status)}
              </div>
            </div>
          </div>

          {/* LOKASI + TANGGAL */}
          <div style={{ display: "flex", gap: "14px", marginTop: "20px" }}>
            <div style={{ flex: 1, background: "#93af7f", borderRadius: "24px", padding: "16px" }}>
              <div style={{ color: "#fff", fontSize: "15px", fontWeight: "700" }}>Lokasi</div>
              <div style={{ marginTop: "10px", color: "#fff", fontSize: "13px" }}>{laporan.location}</div>
            </div>
            <div style={{ width: "160px", background: "#8b8a62", borderRadius: "24px", padding: "16px" }}>
              <div style={{ color: "#d7d39c", fontSize: "15px", fontWeight: "700" }}>Tanggal</div>
              <div style={{ marginTop: "10px", color: "#fff", fontSize: "14px" }}>
                {formatDate(laporan.created_at)}
              </div>
            </div>
          </div>

          {/* DESKRIPSI */}
          <div style={{ marginTop: "22px", background: "#dfe8dc", borderRadius: "28px", padding: "18px" }}>
            <div style={{ fontWeight: "700", color: "#5a5a5a", fontSize: "16px" }}>Deskripsi</div>
            <div style={{ marginTop: "14px", fontSize: "14px", color: "#333", lineHeight: "1.5", fontWeight: "500" }}>
              {laporan.description}
            </div>
          </div>

          {/* RIWAYAT STATUS */}
          <div style={{ marginTop: "22px", background: "#dfe8dc", borderRadius: "28px", padding: "18px" }}>
            <div style={{ fontWeight: "700", color: "#5a5a5a", fontSize: "16px" }}>Riwayat Status</div>
            <div style={{ marginTop: "16px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "start" }}>
                <div style={{
                  width: "12px", height: "12px", borderRadius: "50%",
                  background: "#b4825d", marginTop: "6px"
                }}></div>
                <div>
                  <div style={{ color: "#b4825d", fontWeight: "700", fontSize: "14px" }}>Menunggu</div>
                  <div style={{ fontSize: "13px", color: "#333", marginTop: "4px" }}>
                    {formatDateTime(laporan.created_at)}
                  </div>
                </div>
              </div>

              {laporan.status !== "menunggu" && (
                <>
                  <div style={{ marginLeft: "5px", width: "1px", height: "18px", background: "#777", margin: "4px 0 4px 5px" }}></div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "start" }}>
                    <div style={{
                      width: "12px", height: "12px", borderRadius: "50%",
                      background: "#4f9bb3", marginTop: "6px"
                    }}></div>
                    <div>
                      <div style={{ color: "#4f9bb3", fontWeight: "700", fontSize: "14px" }}>Diproses</div>
                      <div style={{ fontSize: "13px", color: "#333", marginTop: "4px" }}>
                        {formatDateTime(laporan.updated_at)}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {laporan.status === "selesai" && (
                <>
                  <div style={{ marginLeft: "5px", width: "1px", height: "18px", background: "#777", margin: "4px 0 4px 5px" }}></div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "start" }}>
                    <div style={{
                      width: "12px", height: "12px", borderRadius: "50%",
                      background: "#6aa06f", marginTop: "6px"
                    }}></div>
                    <div>
                      <div style={{ color: "#6aa06f", fontWeight: "700", fontSize: "14px" }}>Selesai</div>
                      <div style={{ fontSize: "13px", color: "#333", marginTop: "4px" }}>
                        {formatDateTime(laporan.updated_at)}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {laporan.status === "menunggu" && (
                <>
                  <div style={{ marginLeft: "5px", width: "1px", height: "18px", background: "#777", margin: "4px 0 4px 5px" }}></div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div style={{ width: "12px", height: "12px", border: "2px solid #888", borderRadius: "50%" }}></div>
                    <div style={{ color: "#666", fontWeight: "600", fontSize: "14px" }}>
                      Diproses (menunggu update admin)
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}