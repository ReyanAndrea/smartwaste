import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Reportpage() {
  const navigate = useNavigate();

  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [foto, setFoto] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    if (!judul || !deskripsi || !lokasi || !foto) {
      alert("Lengkapi semua data dulu ya.");
      return;
    }

    const laporanBaru = {
      title: judul,
      date: new Date().toLocaleDateString("id-ID"),
      status: "Menunggu",
      color: "#b4825d",
      img: URL.createObjectURL(foto),
    };

    const lama = JSON.parse(localStorage.getItem("reports")) || [];
    localStorage.setItem("reports", JSON.stringify([laporanBaru, ...lama]));

    setShowPopup(true);
  };

  const inputStyle = {
    width: "100%",
    background: "#7fa073",
    border: "none",
    outline: "none",
    color: "#000",
    fontSize: "15px",
    padding: "16px",
    borderRadius: "22px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        background: "#9fbb87",
        fontFamily: "Poppins,sans-serif",
      }}
    >
      <div
        style={{
          width: "430px",
          minHeight: "100vh",
          background: "#9fbb87",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div style={{ padding: "26px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => navigate("/dashboard")}
              style={{
                color: "#fff",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              ← Kembali
            </div>

            <div
              onClick={() => navigate("/notif")}
              style={{
                position: "relative",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              🔔
              <div
                style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  background: "red",
                  color: "#fff",
                  fontSize: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                4
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              Buat Laporan Sampah
            </div>

            <img src={logo} style={{ width: "28px" }} />
          </div>
        </div>

        {/* FORM */}
        <div
          style={{
            background: "#557f59",
            borderTopLeftRadius: "60px",
            borderTopRightRadius: "60px",
            padding: "28px",
          }}
        >
          {/* Judul */}
          <div style={{ color: "#fff", fontSize: "14px", marginBottom: "8px" }}>
            Judul Laporan *
          </div>

          <input
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Contoh: Tumpukan sampah di jalan"
            style={inputStyle}
          />

          {/* Deskripsi */}
          <div
            style={{
              color: "#fff",
              fontSize: "14px",
              marginTop: "20px",
              marginBottom: "8px",
            }}
          >
            Deskripsi *
          </div>

          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Jelaskan kondisi sampah ..."
            rows="5"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          {/* Lokasi */}
          <div
            style={{
              color: "#fff",
              fontSize: "14px",
              marginTop: "20px",
              marginBottom: "8px",
            }}
          >
            Lokasi kejadian *
          </div>

          <input
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            placeholder="Masukkan alamat/lokasi"
            style={inputStyle}
          />

          {/* FOTO */}
          <div
            style={{
              color: "#fff",
              fontSize: "14px",
              marginTop: "20px",
              marginBottom: "8px",
            }}
          >
            Foto bukti *
          </div>

          <label
            style={{
              width: "100%",
              height: "180px",
              background: "#cfd8cc",
              borderRadius: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              color: "#557f59",
              fontWeight: "600",
            }}
          >
            <div style={{ fontSize: "46px", marginBottom: "8px" }}>📷</div>

            <div style={{ fontSize: "16px", color: "#557f59" }}>
              {foto ? foto.name : "Klik untuk unggah foto"}
            </div>

            <div
              style={{
                fontSize: "13px",
                marginTop: "5px",
                color: "#557f59",
              }}
            >
              JPG, PNG maks. 5MB
            </div>

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setFoto(e.target.files[0])}
            />
          </label>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              height: "52px",
              marginTop: "24px",
              border: "none",
              borderRadius: "28px",
              background: "#b4825d",
              color: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Kirim Laporan
          </button>
        </div>

        {/* POPUP */}
        {showPopup && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <div
              style={{
                width: "340px",
                background: "#7a5438",
                borderRadius: "28px",
                padding: "34px 24px",
                textAlign: "center",
                color: "#fff",
                animation: "popUp 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  background: "#d6e6d6",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "70px",
                  color: "#557f59",
                }}
              >
                ✓
              </div>

              <div
                style={{
                  marginTop: "24px",
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                Laporan Berhasil Dikirim!
              </div>

              <button
                onClick={() => navigate("/dashboard")}
                style={{
                  marginTop: "26px",
                  width: "100%",
                  height: "52px",
                  borderRadius: "28px",
                  border: "none",
                  background: "#fff",
                  fontWeight: "700",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Kembali
              </button>
            </div>
          </div>
        )}

        <style>{`
          input::placeholder,
          textarea::placeholder{
            color:#000;
            opacity:1;
          }

          @keyframes popUp{
            from{
              transform:scale(0.7);
              opacity:0;
            }
            to{
              transform:scale(1);
              opacity:1;
            }
          }
        `}</style>
      </div>
    </div>
  );
}