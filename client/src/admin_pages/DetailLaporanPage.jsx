import { useState, useEffect } from "react";
import api from "../api/axios";

const STATUS_OPTIONS = [
  { label: "Belum Diproses", value: "menunggu" },
  { label: "Diproses", value: "diproses" },
  { label: "Selesai", value: "selesai" },
];

function PopUpHapus({ onHapus, onBatal }) {
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100,
    }}>
      <div style={{
        backgroundColor: "#b4825d", borderRadius: 20, padding: "28px 32px 24px",
        width: 280, display: "flex", flexDirection: "column", alignItems: "center",
        gap: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%", backgroundColor: "#dfe8dc",
          border: "4px solid #b4825d", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: 36, fontWeight: "700", color: "#b4825d" }}>?</span>
        </div>
        <div style={{ color: "#fff", fontSize: 18, fontWeight: "700", textAlign: "center" }}>
          Yakin ingin Hapus?
        </div>
        <div style={{ display: "flex", gap: 10, width: "100%" }}>
          <button
            onClick={onBatal}
            style={{
              flex: 1, padding: "12px 0", border: "none", borderRadius: 28,
              background: "rgba(255,255,255,0.3)", color: "#fff",
              fontSize: 15, fontWeight: "600", cursor: "pointer",
            }}
          >Batal</button>
          <button
            onClick={onHapus}
            style={{
              flex: 1, padding: "12px 0", border: "none", borderRadius: 28,
              background: "#fff", color: "#333", fontSize: 15, fontWeight: "600", cursor: "pointer",
            }}
          >Yakin</button>
        </div>
      </div>
    </div>
  );
}

export default function DetailLaporan({ onKembali, laporan }) {
  const [status, setStatus] = useState("menunggu");
  const [statusLabel, setStatusLabel] = useState("Belum Diproses");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPopUpHapus, setShowPopUpHapus] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (laporan?.id) fetchDetail();
  }, [laporan]);

  const fetchDetail = async () => {
    try {
      const res = await api.get(`/laporan/${laporan.id}`);
      setDetail(res.data);
      setStatus(res.data.status);
      const found = STATUS_OPTIONS.find(s => s.value === res.data.status);
      if (found) setStatusLabel(found.label);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKonfirmasi = async () => {
    try {
      await api.put(`/laporan/${laporan.id}/status`, { status });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleHapus = async () => {
    try {
      await api.delete(`/laporan/${laporan.id}`);
      setShowPopUpHapus(false);
      onKembali && onKembali();
    } catch (err) {
      console.error(err);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
  };

  const getStatusColor = () => {
    if (status === "selesai") return "#6aa06f";
    if (status === "menunggu") return "#b4825d";
    return "#4f9bb3";
  };

  if (loading) return (
    <div style={{ color: "#fff", textAlign: "center", padding: 40 }}>Memuat...</div>
  );

  return (
    <div style={{
      width: "100%", maxWidth: "430px", minHeight: "100vh",
      background: "#a8c28f", fontFamily: "Poppins, sans-serif",
      display: "flex", flexDirection: "column", margin: "0 auto",
    }}>
      {/* HEADER */}
      <div style={{ padding: "24px 24px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            onClick={onKembali}
            style={{ color: "#fff", fontWeight: "700", cursor: "pointer", fontSize: 15 }}
          >
            ← Kembali
          </div>
          <div style={{ fontSize: 20 }}>🗑️</div>
        </div>
        <h1 style={{ textAlign: "center", color: "#fff", marginTop: 16, fontSize: 24, fontWeight: "600" }}>
          Detail Laporan
        </h1>
      </div>

      {/* BODY */}
      <div style={{
        background: "#557f59", borderTopLeftRadius: 48, borderTopRightRadius: 48,
        marginTop: 20, padding: "28px 18px 80px", minHeight: "78vh",
        display: "flex", flexDirection: "column", gap: 14,
      }}>
        {/* Image */}
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
          <img
            src={`http://localhost:5000/uploads/${detail?.photo}`}
            alt=""
            style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 16, display: "block" }}
          />
          <button
            onClick={() => setShowPopUpHapus(true)}
            style={{
              position: "absolute", top: 10, right: 10,
              background: "rgba(200,200,200,0.85)", border: "none",
              borderRadius: 8, width: 32, height: 32, cursor: "pointer", fontSize: 14,
            }}
          >🗑</button>
        </div>

        {/* Lokasi & Tanggal */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: "#93af7f", borderRadius: 20, padding: "12px 16px",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "#6A9E7A", borderRadius: 20, padding: "6px 14px",
          }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>{detail?.location}</span>
            <span>📍</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: "600" }}>
              {formatDate(detail?.created_at)}
            </div>
          </div>
        </div>

        {/* Reporter */}
        <div style={{ background: "#dfe8dc", borderRadius: 20, padding: "14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 18 }}>👤</span>
            <span style={{ color: "#b4825d", fontWeight: "600", fontSize: 14 }}>
              {detail?.user?.name || "Unknown"}
            </span>
          </div>
          <p style={{ color: "#333", fontSize: 13, lineHeight: 1.5, margin: 0 }}>
            {detail?.description}
          </p>
        </div>

        {/* Status Dropdown */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              background: getStatusColor(), color: "#fff", border: "none",
              borderRadius: 24, padding: "12px 20px", width: "100%",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontSize: 15, fontWeight: "600", cursor: "pointer",
            }}
          >
            <span>{statusLabel}</span>
            <span style={{ fontSize: 12 }}>▼</span>
          </button>
          {dropdownOpen && (
            <div style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              zIndex: 10, borderRadius: 12, overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}>
              {STATUS_OPTIONS.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => {
                    setStatus(opt.value);
                    setStatusLabel(opt.label);
                    setDropdownOpen(false);
                  }}
                  style={{
                    padding: "13px 20px", color: "#fff", fontSize: 14,
                    fontWeight: "600", cursor: "pointer",
                    background: opt.value === "menunggu" ? "#b4825d" :
                      opt.value === "selesai" ? "#6aa06f" : "#4f9bb3",
                  }}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Konfirmasi */}
        <button
          onClick={handleKonfirmasi}
          style={{
            background: "#2D5A3D", color: "#fff", border: "none",
            borderRadius: 20, padding: "16px", width: "100%",
            fontSize: 16, fontWeight: "700", cursor: "pointer",
          }}
        >
          {showSuccess ? "✓ Tersimpan!" : "Konfirmasi"}
        </button>
      </div>

      {showPopUpHapus && (
        <PopUpHapus onHapus={handleHapus} onBatal={() => setShowPopUpHapus(false)} />
      )}
    </div>
  );
}