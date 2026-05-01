import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Dashboard() {
  const navigate = useNavigate();

  const reports = [
    {
      title: "Tumpukan sampah di jalan...",
      date: "7 April 2026",
      status: "Menunggu",
      color: "#b4825d",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=200",
    },
    {
      title: "Sampah berserakan di depan...",
      date: "26 Maret 2026",
      status: "Diproses",
      color: "#4f9bb3",
      img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=200",
    },
    {
      title: "Selokan tersumbat plastik...",
      date: "25 Maret 2026",
      status: "Selesai",
      color: "#6aa06f",
      img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=200",
    },
    {
      title: "Pinggir sungai dipenuhi...",
      date: "14 Februari 2026",
      status: "Selesai",
      color: "#6aa06f",
      img: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=200",
    },
  ];

  const statCard = (title, num) => (
    <div
      style={{
        background: "#dfe8dc",
        borderRadius: "18px",
        padding: "10px",
        width: "82px",
        textAlign: "center",
        boxShadow: "0 8px 15px rgba(0,0,0,.12)",
        cursor: "pointer",
      }}
    >
      <div style={{ fontSize: "13px" }}>{title}</div>

      <div
        style={{
          marginTop: "10px",
          background: "#557f59",
          color: "#fff",
          borderRadius: "14px",
          padding: "8px 0",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        {num}
      </div>
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#a8c28f",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Poppins,sans-serif",
      }}
    >
      <div
        style={{
          width: "430px",
          minHeight: "100vh",
          background: "#a8c28f",
          position: "relative",
          overflowY: "auto",
          paddingBottom: "120px",
        }}
      >
        {/* HEADER */}
        <div style={{ padding: "28px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "800",
              }}
            >
              <span style={{ color: "#D2D0A0" }}>Halo, </span>
              <span style={{ color: "#fff" }}>Zalvia Inasya!</span>
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
                  right: "-2px",
                  top: "-4px",
                  width: "16px",
                  height: "16px",
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
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ color: "#fff", fontSize: "16px" }}>
                Total Laporanmu
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "#6F4E37",
                }}
              >
                6 laporan
              </div>
            </div>

            <img src={logo} style={{ width: "28px" }} />
          </div>
        </div>

        {/* BODY */}
        <div
          style={{
            background: "#557f59",
            borderTopLeftRadius: "60px",
            borderTopRightRadius: "60px",
            padding: "26px",
          }}
        >
          {/* STATS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
            }}
          >
            {statCard("Menunggu", 1)}
            {statCard("Diproses", 1)}
            {statCard("Selesai", 4)}
          </div>

          {/* TITLE */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "26px",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              Laporan Terbaru
            </div>

            <div
              onClick={() => navigate("/history")}
              style={{
                color: "#c7d79f",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Lihat Semua
            </div>
          </div>

          {/* REPORT */}
          <div
            style={{
              marginTop: "14px",
              background: "#dfe8dc",
              borderRadius: "28px",
              padding: "18px",
            }}
          >
            {reports.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    padding: "10px 0",
                  }}
                >
                  <img
                    src={item.img}
                    style={{
                      width: "56px",
                      height: "56px",
                      objectFit: "cover",
                      borderRadius: "18px",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      {item.title}
                    </div>

                    <div
                      style={{
                        color: "#555",
                        marginTop: "4px",
                        fontSize: "13px",
                      }}
                    >
                      {item.date}
                    </div>
                  </div>

                  <div
                    style={{
                      background: item.color,
                      color: "#fff",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                  >
                    {item.status}
                  </div>
                </div>

                {index !== reports.length - 1 && (
                  <div
                    style={{
                      height: "1px",
                      background: "#a07b5e",
                      margin: "8px 0",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/report")}
            style={{
              width: "100%",
              height: "50px",
              border: "none",
              borderRadius: "30px",
              background: "#b4825d",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "700",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            + Buat Laporan Baru
          </button>
        </div>

        {/* FOOTBAR */}
        <div
          style={{
            position: "fixed",
            bottom: "14px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "430px",
            maxWidth: "92%",
            height: "72px",
            background: "#d7d39c",
            borderRadius: "38px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "0 10px",
            zIndex: 999,
          }}
        >
          <div
            onClick={() => navigate("/dashboard")}
            style={menuItem("#a8b97d")}
          >
            <div style={{ fontSize: "22px" }}>🏠</div>
            Beranda
          </div>

          <div
            onClick={() => navigate("/report")}
            style={menuItem()}
          >
            <div style={{ fontSize: "22px" }}>📄</div>
            Laporan
          </div>

          <div
            onClick={() => navigate("/report")}
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "#88a36f",
              color: "#fff",
              fontSize: "42px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-34px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            +
          </div>

          <div
            onClick={() => navigate("/history")}
            style={menuItem()}
          >
            <div style={{ fontSize: "22px" }}>🕒</div>
            Riwayat
          </div>

          <div
            onClick={() => navigate("/profile")}
            style={menuItem()}
          >
            <div style={{ fontSize: "22px" }}>👤</div>
            Profil
          </div>
        </div>
      </div>
    </div>
  );
}

function menuItem(bg = "transparent") {
  return {
    width: "68px",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "600",
    color: "#6b4d34",
    cursor: "pointer",
    padding: "8px 4px",
    borderRadius: "18px",
    background: bg,
  };
}