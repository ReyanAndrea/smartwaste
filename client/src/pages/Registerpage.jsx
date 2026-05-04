import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import api from "../api/axios";

export default function Registerpage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Semua field harus diisi");
      return;
    }
    if (password.length < 8) {
      setError("Kata sandi minimal 8 karakter");
      return;
    }
    if (password !== confirmPassword) {
      setError("Kata sandi tidak cocok");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await api.post("/api/auth/register", { name, email, password });
      setShowPopup(true);
    } catch (err) {
      setError(err.response?.data?.message || "Registrasi gagal");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    height: "48px",
    border: "1.5px solid #ffffff",
    borderRadius: "12px",
    background: "transparent",
    color: "#fff",
    padding: "0 18px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box"
  };

  return (
    <div style={{
      width:"100%",
      minHeight:"100vh",
      margin:0,
      padding:0,
      display:"flex",
      justifyContent:"center",
      background:"#a8c28f",
      overflow:"hidden"
    }}>
      <div style={{
        width:"570px",
        minHeight:"100vh",
        background:"#a8c28f",
        position:"relative",
        overflow:"hidden",
        fontFamily:"Poppins,sans-serif"
      }}>

        {/* HEADER */}
        <div style={{
          background:"#557f59",
          padding:"26px 32px 88px",
          borderBottomLeftRadius:"50% 70px",
          borderBottomRightRadius:"50% 70px"
        }}>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"10px",
            marginTop:"55px"
          }}>
            <img src={logo} style={{width:"24px"}} />
            <div style={{fontSize:"30px", fontWeight:"800"}}>
              <span style={{color:"#D2D0A0"}}>Smart</span>
              <span style={{color:"#6F4E37"}}>Waste</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div style={{padding:"22px 48px"}}>
          <div style={{textAlign:"center", color:"#fff", fontSize:"28px", fontWeight:"800"}}>
            Daftar Akun
          </div>

          <div style={{textAlign:"center", color:"#eef3eb", fontSize:"15px", marginTop:"8px"}}>
            Sudah mempunyai akun?{" "}
            <span
              onClick={()=>navigate("/login")}
              style={{color:"#557f59", fontWeight:"700", cursor:"pointer"}}
            >
              Log in
            </span>
          </div>

          {/* ERROR */}
          {error && (
            <div style={{
              background:"#ff4d4d",
              color:"#fff",
              padding:"10px",
              borderRadius:"8px",
              marginTop:"12px",
              fontSize:"13px",
              textAlign:"center"
            }}>
              {error}
            </div>
          )}

          <div style={{marginTop:"28px", display:"grid", gap:"18px"}}>
            <input
              placeholder="Masukkan nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <input
              placeholder="Masukkan kata sandi"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <div style={{color:"#eef3eb", fontSize:"13px", marginTop:"-8px"}}>
              Gunakan kata sandi dengan minimal 8 karakter
            </div>
            <input
              placeholder="Konfirmasi kata sandi"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            style={{
              width:"100%",
              height:"50px",
              border:"none",
              borderRadius:"28px",
              background: loading ? "#999" : "#b4825d",
              color:"#fff",
              fontSize:"20px",
              fontWeight:"700",
              marginTop:"28px",
              cursor: loading ? "not-allowed" : "pointer",
              transition:"0.25s"
            }}
          >
            {loading ? "Memuat..." : "Daftar"}
          </button>
        </div>

        {/* POPUP */}
        {showPopup && (
          <div style={{
            position:"fixed",
            inset:0,
            background:"rgba(0,0,0,.35)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            zIndex:99
          }}>
            <div style={{
              width:"380px",
              background:"#7a5336",
              borderRadius:"26px",
              padding:"36px 28px",
              textAlign:"center",
              animation:"popup .28s ease"
            }}>
              <div style={{
                width:"120px",
                height:"120px",
                margin:"0 auto",
                borderRadius:"50%",
                background:"#dbe8d5",
                border:"8px solid #557f59",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"58px",
                color:"#557f59"
              }}>✓</div>

              <div style={{color:"#fff", fontSize:"30px", fontWeight:"800", marginTop:"26px"}}>
                Pendaftaran Berhasil!
              </div>

              <button
                onClick={()=>navigate("/login")}
                style={{
                  width:"100%",
                  height:"52px",
                  border:"none",
                  borderRadius:"28px",
                  background:"#fff",
                  marginTop:"30px",
                  fontSize:"22px",
                  fontWeight:"700",
                  cursor:"pointer"
                }}
              >
                Kembali
              </button>
            </div>
          </div>
        )}

        <style>{`
          @keyframes popup{
            from{ transform:scale(.4); opacity:0; }
            to{ transform:scale(1); opacity:1; }
          }
          input::placeholder{ color:#eef3eb; }
        `}</style>
      </div>
    </div>
  );
}