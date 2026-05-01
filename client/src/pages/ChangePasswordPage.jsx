import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function ChangePasswordPage() {
  const navigate = useNavigate();

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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

  const savePassword = () => {
    if (!oldPass || !newPass || !confirmPass) {
      alert("Isi semua kolom dulu");
      return;
    }

    if (newPass !== confirmPass) {
      alert("Konfirmasi password tidak sama");
      return;
    }

    setShowPopup(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#A8C08B",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        onClick={() => navigate("/profile")}
        style={{
          position: "absolute",
          top: "22px",
          left: "18px",
          color: "white",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        ← Kembali
      </div>

      <div
        onClick={() => navigate("/notification")}
        style={{
          position: "absolute",
          top: "18px",
          right: "24px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        🔔
      </div>

      <div
        style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "red",
          color: "white",
          fontSize: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
        }}
      >
        4
      </div>

      <div
        style={{
          textAlign: "center",
          paddingTop: "68px",
          fontSize: "24px",
          fontWeight: "700",
          color: "white",
        }}
      >
        Ubah Kata Sandi
      </div>

      <img
        src={logo}
        alt="logo"
        style={{
          width: "28px",
          position: "absolute",
          top: "82px",
          right: "24px",
        }}
      />

      <div
        style={{
          marginTop: "48px",
          background: "#5D875E",
          borderTopLeftRadius: "52px",
          borderTopRightRadius: "52px",
          padding: "34px 22px 40px",
          minHeight: "85vh",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>
            Password Lama
          </div>
          <input
            type="password"
            placeholder="Masukkan password lama"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>
            Password Baru
          </div>
          <input
            type="password"
            placeholder="Masukkan password baru"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "28px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>
            Konfirmasi Password
          </div>
          <input
            type="password"
            placeholder="Ulangi password baru"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button
          onClick={savePassword}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "999px",
            border: "none",
            background: "#4E97B5",
            color: "white",
            fontSize: "18px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Simpan Password
        </button>
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "330px",
              background: "#4E97B5",
              borderRadius: "28px",
              padding: "30px 24px",
              textAlign: "center",
              color: "white",
              animation: "popUp 0.25s ease",
            }}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: "#d8eef5",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "56px",
              }}
            >
              🔒
            </div>

            <div
              style={{
                marginTop: "18px",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              Password Berhasil Diubah!
            </div>

            <button
              onClick={() => navigate("/profile")}
              style={{
                marginTop: "20px",
                width: "100%",
                height: "50px",
                border: "none",
                borderRadius: "999px",
                background: "white",
                color: "#222",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Kembali
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popUp{
          from{transform:scale(0.7);opacity:0;}
          to{transform:scale(1);opacity:1;}
        }
      `}</style>
    </div>
  );
}