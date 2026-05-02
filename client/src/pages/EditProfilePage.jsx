import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import api from "../api/axios";

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login");
      return;
    }
    const user = JSON.parse(userData);
    setNama(user.name || "");
    setEmail(user.email || "");
  }, []);

  const handleSave = async () => {
    if (!nama || !email) {
      setError("Nama dan email harus diisi");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const res = await api.put("/auth/profile", { name: nama, email });

      // Update localStorage
      const updatedUser = res.data.user;
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setSuccess("Profil berhasil diperbarui!");
      setTimeout(() => navigate("/profile"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal memperbarui profil");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "18px",
    border: "none",
    background: "#E9E9E9",
    fontSize: "16px",
    color: "#566273",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#A8C08B",
      fontFamily: "Poppins, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <div
        onClick={() => navigate("/profile")}
        style={{ position: "absolute", top: "22px", left: "18px", color: "white", fontSize: "16px", fontWeight: "600", cursor: "pointer" }}
      >
        ← Kembali
      </div>

      <div
        onClick={() => navigate("/notif")}
        style={{ position: "absolute", top: "18px", right: "24px", fontSize: "18px", cursor: "pointer" }}
      >
        🔔
      </div>

      <div style={{ textAlign: "center", paddingTop: "68px", fontSize: "24px", fontWeight: "700", color: "white" }}>
        Edit Profil
      </div>

      <img src={logo} alt="logo" style={{ width: "28px", position: "absolute", top: "82px", right: "24px" }} />

      <div style={{
        marginTop: "48px",
        background: "#5D875E",
        borderTopLeftRadius: "52px",
        borderTopRightRadius: "52px",
        padding: "70px 22px 40px",
        minHeight: "85vh",
        position: "relative",
      }}>
        <div style={{
          width: "92px", height: "92px", borderRadius: "50%", background: "#D8D8D8",
          position: "absolute", top: "-42px", left: "50%", transform: "translateX(-50%)",
          border: "2px solid white", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "48px", cursor: "pointer",
        }}>👤</div>

        {error && (
          <div style={{
            background: "#ff4d4d", color: "#fff", padding: "10px",
            borderRadius: "8px", marginBottom: "16px", fontSize: "13px", textAlign: "center"
          }}>{error}</div>
        )}

        {success && (
          <div style={{
            background: "#6aa06f", color: "#fff", padding: "10px",
            borderRadius: "8px", marginBottom: "16px", fontSize: "13px", textAlign: "center"
          }}>{success}</div>
        )}

        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>Nama Lengkap</div>
          <input
            type="text"
            placeholder="Isi nama baru"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "28px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>Email</div>
          <input
            type="email"
            placeholder="Isi email baru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          style={{
            width: "100%", padding: "16px", borderRadius: "999px", border: "none",
            background: loading ? "#999" : "#4E97B5", color: "white",
            fontSize: "18px", fontWeight: "700", cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}