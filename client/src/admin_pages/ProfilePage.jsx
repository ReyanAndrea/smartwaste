import { useState, useEffect } from "react";
import api from "../api/axios";

function PopUpLogout({ onYakin, onBatal }) {
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)",
      display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999,
    }}>
      <div style={{
        width: 340, background: "#D76464", borderRadius: 28,
        padding: "34px 24px", textAlign: "center", color: "#fff",
      }}>
        <div style={{
          width: 130, height: 130, borderRadius: "50%", background: "#d6e6d6",
          margin: "0 auto", display: "flex", justifyContent: "center",
          alignItems: "center", fontSize: 72, color: "#cc0000", border: "7px solid #cc0000",
        }}>?</div>
        <div style={{ marginTop: 24, fontSize: 28, fontWeight: "700" }}>
          Yakin ingin keluar?
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <button
            onClick={onBatal}
            style={{
              flex: 1, height: 52, border: "none", borderRadius: 999,
              background: "rgba(255,255,255,0.3)", fontSize: 16,
              fontWeight: "700", cursor: "pointer", color: "#fff",
            }}
          >Batal</button>
          <button
            onClick={onYakin}
            style={{
              flex: 1, height: 52, border: "none", borderRadius: 999,
              background: "#fff", fontSize: 16, fontWeight: "700", cursor: "pointer",
            }}
          >Yakin</button>
        </div>
      </div>
    </div>
  );
}

export default function ProfilAdmin({ onBeranda, onLaporan, onTentangSistem, onLogout }) {
  const [activeNav, setActiveNav] = useState("profil");
  const [showLogout, setShowLogout] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const u = JSON.parse(userData);
      setNama(u.name || "");
      setEmail(u.email || "");
    }
  }, []);

  const handleEditProfil = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await api.put("/auth/profile", { name: nama, email });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setSuccess("Profil berhasil diperbarui!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal memperbarui profil");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setShowLogout(false);
    onLogout && onLogout();
  };

  const inputStyle = {
    width: "100%", padding: "16px 18px", borderRadius: 18, border: "none",
    background: "#E9E9E9", fontSize: 15, color: "#566273",
    outline: "none", boxSizing: "border-box",
  };

  const btnStyle = (bg) => ({
    width: "100%", border: "none", borderRadius: 999, padding: 16,
    fontSize: 16, fontWeight: "600", color: "#fff", background: bg, cursor: "pointer",
  });

  return (
    <div style={{
      width: "100%", maxWidth: "430px", minHeight: "100vh",
      background: "#a8c28f", fontFamily: "Poppins, sans-serif",
      position: "relative", margin: "0 auto",
    }}>
      {/* HEADER */}
      <div style={{ textAlign: "center", paddingTop: 72, fontSize: 24, fontWeight: "700", color: "#fff" }}>
        Profil
      </div>

      {/* BODY */}
      <div style={{
        marginTop: 64, background: "#557f59",
        borderTopLeftRadius: 54, borderTopRightRadius: 54,
        padding: "68px 22px 120px", minHeight: "85vh", position: "relative",
      }}>
        {/* Avatar */}
        <div style={{
          width: 102, height: 102, borderRadius: "50%", background: "#D8D8D8",
          position: "absolute", top: -44, left: "50%", transform: "translateX(-50%)",
          border: "2px solid white", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 52,
        }}>👤</div>

        {error && (
          <div style={{ background: "#ff4d4d", color: "#fff", padding: 10, borderRadius: 8, marginBottom: 16, fontSize: 13, textAlign: "center" }}>
            {error}
          </div>
        )}
        {success && (
          <div style={{ background: "#6aa06f", color: "#fff", padding: 10, borderRadius: 8, marginBottom: 16, fontSize: 13, textAlign: "center" }}>
            {success}
          </div>
        )}

        <div style={{ marginBottom: 18 }}>
          <div style={{ color: "white", marginBottom: 8 }}>Nama Lengkap</div>
          <input value={nama} onChange={(e) => setNama(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ marginBottom: 18 }}>
          <div style={{ color: "white", marginBottom: 8 }}>Email</div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ marginBottom: 28 }}>
          <div style={{ color: "white", marginBottom: 8 }}>Role</div>
          <input value="Admin" readOnly style={inputStyle} />
        </div>

        <button
          onClick={handleEditProfil}
          disabled={loading}
          style={btnStyle(loading ? "#999" : "#b4825d")}
        >
          {loading ? "Menyimpan..." : "Edit Profil"}
        </button>
        <div style={{ height: 14 }} />

        <button style={btnStyle("#4E97B5")}>
          Ubah Kata Sandi
        </button>
        <div style={{ height: 14 }} />

        <button
          style={btnStyle("#6B4A2A")}
          onClick={() => onTentangSistem && onTentangSistem()}
        >
          Tentang Sistem
        </button>
        <div style={{ height: 14 }} />

        <button style={btnStyle("#D76464")} onClick={() => setShowLogout(true)}>
          Keluar Dari Akun
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
        <div onClick={() => { setActiveNav("beranda"); onBeranda && onBeranda(); }} style={menuItem(activeNav === "beranda" ? "#a8b97d" : "transparent")}>
          <div style={{ fontSize: 22 }}>⊞</div>Beranda
        </div>
        <div onClick={() => { setActiveNav("laporan"); onLaporan && onLaporan(); }} style={menuItem(activeNav === "laporan" ? "#a8b97d" : "transparent")}>
          <div style={{ fontSize: 22 }}>🗑</div>Laporan
        </div>
        <div onClick={() => setActiveNav("profil")} style={menuItem(activeNav === "profil" ? "#a8b97d" : "transparent")}>
          <div style={{ fontSize: 22 }}>👤</div>Profil
        </div>
      </div>

      {showLogout && <PopUpLogout onYakin={handleLogout} onBatal={() => setShowLogout(false)} />}
    </div>
  );
}

function menuItem(bg) {
  return {
    width: 68, textAlign: "center", fontSize: 12, fontWeight: "600",
    color: "#6b4d34", cursor: "pointer", padding: "8px 4px", borderRadius: 18, background: bg,
  };
}