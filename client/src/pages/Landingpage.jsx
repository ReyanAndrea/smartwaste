import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Landingpage() {
  const navigate = useNavigate();

  const card = {
    width: "108px",
    height: "118px",
    background: "#eef1ea",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0,0,0,.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    textAlign: "center",
    padding: "8px",
    cursor: "pointer",
    transition: "all .25s ease"
  };

  const iconBox = (bg) => ({
    width: "54px",
    height: "54px",
    borderRadius: "14px",
    background: bg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px"
  });

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "scale(1.06)";
    e.currentTarget.style.boxShadow = "0 10px 18px rgba(0,0,0,.14)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 5px 10px rgba(0,0,0,.08)";
  };

  const btnIn = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 8px 14px rgba(0,0,0,.12)";
  };

  const btnOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      margin: 0,
      padding: 0,
      background: "#a8c28f",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      <div style={{
        width: "570px",
        height: "100vh",
        background: "#a8c28f",
        overflow: "hidden",
        fontFamily: "Poppins,sans-serif"
      }}>

        {/* HEADER */}
        <div style={{
          background: "#557f59",
          padding: "20px 30px 70px",
          borderBottomLeftRadius: "50% 60px",
          borderBottomRightRadius: "50% 60px",
          color: "#fff"
        }}>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "8px"
          }}>
            <img src={logo} style={{ width: "22px" }} />

            <div style={{
              fontWeight: "700",
              fontSize: "17px"
            }}>
              <span style={{ color: "#D2D0A0" }}>Smart</span>
              <span style={{ color: "#6F4E37" }}>Waste</span>
            </div>
          </div>

          <div style={{
            marginTop: "20px",
            fontSize: "24px",
            fontWeight: "800",
            lineHeight: "1.2"
          }}>
            Laporkan sampah,<br />
            lebih cepat & mudah
          </div>

          <div style={{
            marginTop: "14px",
            fontSize: "13px",
            color: "#edf3ec"
          }}>
            Sistem pelaporan sampah digital berbasis web
          </div>
        </div>

        {/* FEATURE GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          padding: "22px 82px 0"
        }}>

          <div style={card} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <div style={iconBox("#dca8a8")}>📍</div>
            <div style={{ fontSize: "12px" }}>
              Lapor dengan<br />Lokasi
            </div>
          </div>

          <div style={card} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <div style={iconBox("#e6d88f")}>⚡</div>
            <div style={{ fontSize: "12px" }}>Respon Cepat</div>
          </div>

          <div style={card} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <div style={iconBox("#dbe7d7")}>✅</div>
            <div style={{ fontSize: "12px" }}>Terkelola</div>
          </div>

          <div style={card} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <div style={iconBox("#8fb7c8")}>🕒</div>
            <div style={{ fontSize: "12px" }}>
              Pantau Status<br />Realtime
            </div>
          </div>

        </div>

        {/* CTA */}
        <div style={{
          width: "380px",
          margin: "18px auto 0",
          background: "#78996d",
          borderRadius: "16px",
          padding: "18px"
        }}>
          <div style={{
            color: "#fff",
            fontSize: "18px",
            fontWeight: "800"
          }}>
            Mulai Sekarang
          </div>

          <div style={{
            marginTop: "8px",
            color: "#eef3eb",
            fontSize: "12px",
            lineHeight: "1.5"
          }}>
            Buat akun gratis & laporkan masalah sampah di sekitarmu
          </div>

          <div style={{
            display: "flex",
            gap: "14px",
            marginTop: "16px"
          }}>

            <button
              onClick={() => navigate("/register")}
              onMouseEnter={btnIn}
              onMouseLeave={btnOut}
              style={{
                flex: 1,
                height: "40px",
                border: "none",
                borderRadius: "14px",
                background: "#fff",
                fontWeight: "700",
                fontSize: "15px",
                cursor: "pointer",
                transition: "all .25s ease"
              }}
            >
              Daftar
            </button>

            <button
              onClick={() => navigate("/login")}
              onMouseEnter={btnIn}
              onMouseLeave={btnOut}
              style={{
                flex: 1,
                height: "40px",
                border: "none",
                borderRadius: "14px",
                background: "#5f8757",
                color: "#fff",
                fontWeight: "700",
                fontSize: "15px",
                cursor: "pointer",
                transition: "all .25s ease"
              }}
            >
              Masuk
            </button>

          </div>
        </div>

        {/* FOOTER */}
        <div style={{
          width: "380px",
          margin: "14px auto 14px",
          background: "#b4825d",
          borderRadius: "16px",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: "14px"
        }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "#dbe8d5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            color: "#557f59"
          }}>
            ✓
          </div>

          <div style={{
            color: "#fff",
            fontSize: "13px",
            lineHeight: "1.4"
          }}>
            Sudah <b>1rb+ laporan</b> tertangani di seluruh Aceh
          </div>
        </div>

      </div>
    </div>
  );
}