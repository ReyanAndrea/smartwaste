import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function EditProfilePage() {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [hp, setHp] = useState("");

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
        Edit Profil
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
          padding: "70px 22px 40px",
          minHeight: "85vh",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "92px",
            height: "92px",
            borderRadius: "50%",
            background: "#D8D8D8",
            position: "absolute",
            top: "-42px",
            left: "50%",
            transform: "translateX(-50%)",
            border: "2px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            cursor: "pointer",
          }}
        >
          👤
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "white",
            marginBottom: "18px",
          }}
        >
          Tap untuk ganti foto profil
        </div>

        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>
            Nama Lengkap
          </div>
          <input
            type="text"
            placeholder="Isi nama baru"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>Email</div>
          <input
            type="email"
            placeholder="Isi email baru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>Alamat</div>
          <input
            type="text"
            placeholder="Isi alamat baru"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "28px" }}>
          <div style={{ color: "white", marginBottom: "8px" }}>No. HP</div>
          <input
            type="text"
            placeholder="Isi nomor HP baru"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button
          onClick={() => navigate("/profile")}
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
          Simpan
        </button>
      </div>
    </div>
  );
}