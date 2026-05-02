import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(userData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "18px",
    border: "none",
    background: "#E9E9E9",
    fontSize: "15px",
    color: "#566273",
    outline: "none",
    boxSizing: "border-box",
  };

  const btnStyle = (bg) => ({
    width: "100%",
    border: "none",
    borderRadius: "999px",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    background: bg,
    cursor: "pointer",
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#A8C08B",
      position: "relative",
      fontFamily: "Poppins, sans-serif",
      overflow: "hidden",
    }}>
      <div
        onClick={() => navigate("/notif")}
        style={{ position: "absolute", top: "26px", right: "26px", fontSize: "18px", cursor: "pointer" }}
      >
        🔔
      </div>

      <div style={{ textAlign: "center", paddingTop: "72px", fontSize: "24px", fontWeight: "700", color: "white" }}>
        Profil
      </div>

      <img src={logo} alt="logo" style={{ width: "28px", position: "absolute", top: "104px", right: "26px" }} />

      <div style={{
        marginTop: "64px",
        background: "#5D875E",
        borderTopLeftRadius: "54px",
        borderTopRightRadius: "54px",
        padding: "68px 22px 120px",
        minHeight: "85vh",
        position: "relative",
      }}>
        <div style={{
          width: "102px", height: "102px", borderRadius: "50%",
          background: "#D8D8D8", position: "absolute", top: "-44px",
          left: "50%", transform: "translateX(-50%)", border: "2px solid white",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "52px",
        }}>
          👤
        </div>

        <div style={{ marginBottom: "18px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>Nama Lengkap</div>
          <input value={user?.name || ""} readOnly style={inputStyle} />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>Email</div>
          <input value={user?.email || ""} readOnly style={inputStyle} />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>Role</div>
          <input value={user?.role === "admin" ? "Admin" : "Warga"} readOnly style={inputStyle} />
        </div>

        <button style={btnStyle("#B7875E")} onClick={() => navigate("/edit-profile")}>
          Edit Profil
        </button>
        <div style={{ height: "14px" }} />
        <button style={btnStyle("#4E97B5")} onClick={() => navigate("/change-password")}>
          Ubah Kata Sandi
        </button>
        <div style={{ height: "14px" }} />
        <button style={btnStyle("#D76464")} onClick={() => setShowLogout(true)}>
          Keluar Dari Akun
        </button>
      </div>

      {showLogout && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)",
          display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999,
        }}>
          <div style={{
            width: "340px", background: "#D76464", borderRadius: "28px",
            padding: "34px 24px", textAlign: "center", color: "#fff", animation: "popUp 0.3s ease",
          }}>
            <div style={{
              width: "130px", height: "130px", borderRadius: "50%", background: "#d6e6d6",
              margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center",
              fontSize: "72px", color: "#cc0000", border: "7px solid #cc0000",
            }}>?</div>

            <div style={{ marginTop: "24px", fontSize: "28px", fontWeight: "700" }}>
              Yakin ingin keluar?
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              <button
                onClick={() => setShowLogout(false)}
                style={{
                  flex: 1, height: "52px", border: "none", borderRadius: "999px",
                  background: "rgba(255,255,255,0.3)", fontSize: "16px", fontWeight: "700",
                  cursor: "pointer", color: "#fff",
                }}
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                style={{
                  flex: 1, height: "52px", border: "none", borderRadius: "999px",
                  background: "#fff", fontSize: "16px", fontWeight: "700", cursor: "pointer",
                }}
              >
                Yakin
              </button>
            </div>
          </div>
        </div>
      )}

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
        <div onClick={() => navigate("/history")} style={menuItem()}>
          <div style={{ fontSize: "22px" }}>🕒</div>Riwayat
        </div>
        <div onClick={() => navigate("/profile")} style={menuItem("#a8b97d")}>
          <div style={{ fontSize: "22px" }}>👤</div>Profil
        </div>
      </div>

      <style>{`
        @keyframes popUp { from{transform:scale(0.7);opacity:0;} to{transform:scale(1);opacity:1;} }
      `}</style>
    </div>
  );
}

function menuItem(bg = "transparent") {
  return {
    width: "68px", textAlign: "center", fontSize: "12px", fontWeight: "600",
    color: "#6b4d34", cursor: "pointer", padding: "8px 4px", borderRadius: "18px", background: bg,
  };
}