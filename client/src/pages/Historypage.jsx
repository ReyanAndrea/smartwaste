import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function HistoryPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Semua");

  const data = [
    {
      id: 1,
      title: "Tumpukan sampah di jl...",
      date: "7 April 2026",
      status: "Menunggu",
      color: "#b88458",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=200",
    },
    {
      id: 2,
      title: "Sampah berserakan di depan...",
      date: "26 Maret 2026",
      status: "Diproses",
      color: "#4f9db5",
      img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=200",
    },
    {
      id: 3,
      title: "Selokan tersumbat plastik...",
      date: "25 Maret 2026",
      status: "Selesai",
      color: "#72a66d",
      img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=200",
    },
    {
      id: 4,
      title: "Pinggir sungai dipenuhi...",
      date: "14 Februari 2026",
      status: "Selesai",
      color: "#72a66d",
      img: "https://images.unsplash.com/photo-1618477462146-050d2767eac4?w=200",
    },
    {
      id: 5,
      title: "Tumpukan botol mineral...",
      date: "19 Januari 2026",
      status: "Selesai",
      color: "#72a66d",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=200",
    },
    {
      id: 6,
      title: "Sampah menumpuk di depan...",
      date: "8 Januari 2026",
      status: "Selesai",
      color: "#72a66d",
      img: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?w=200",
    },
  ];

  const filtered =
    filter === "Semua"
      ? data
      : data.filter((item) => item.status === filter);

  const filterBtn = (active) => ({
    padding: "7px 0",
    borderRadius: "20px",
    border: "1px solid #21553f",
    background: active ? "#a8c487" : "#d9e4d0",
    color: "#fff",
    fontSize: "11px",
    fontWeight: "700",
    cursor: "pointer",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#9fbb87",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "430px",
          height: "100vh",
          background: "#9fbb87",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div style={{ padding: "20px 22px 0" }}>
          <div
            onClick={() => navigate("/notif")}
            style={{
              position: "absolute",
              right: "24px",
              top: "18px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            🔔
            <div
              style={{
                position: "absolute",
                top: "-5px",
                right: "-6px",
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

          <h1
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: "24px",
              fontWeight: "700",
              marginTop: "70px",
              marginBottom: "8px",
            }}
          >
            Riwayat Laporan
          </h1>

          <div style={{ textAlign: "right" }}>
            <img src={logo} alt="logo" style={{ width: "30px" }} />
          </div>
        </div>

        {/* BODY */}
        <div
          style={{
            marginTop: "14px",
            background: "#557f59",
            borderTopLeftRadius: "56px",
            borderTopRightRadius: "56px",
            height: "calc(100vh - 170px)",
            padding: "20px 14px 100px",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {/* FILTER */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            {["Semua", "Menunggu", "Diproses", "Selesai"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                style={filterBtn(filter === item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* LIST */}
          <div
            style={{
              background: "#cfd8cc",
              borderRadius: "28px",
              padding: "10px 12px",
            }}
          >
            {filtered.map((item, index) => (
              <div key={item.id}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    padding: "13px 0",
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      width: "62px",
                      height: "62px",
                      borderRadius: "18px",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#2f2f2f",
                      }}
                    >
                      {item.title}
                    </div>

                    <div
                      style={{
                        color: "#666",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {item.date}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        background: item.color,
                        color: "#fff",
                        padding: "5px 12px",
                        borderRadius: "14px",
                        fontSize: "11px",
                        fontWeight: "600",
                        minWidth: "82px",
                      }}
                    >
                      {item.status}
                    </div>

                    <div
                      onClick={() => navigate(`/detail/${item.id}`)}
                      style={{
                        fontSize: "10px",
                        marginTop: "5px",
                        color: "#7b5d43",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Detail Laporan ›
                    </div>
                  </div>
                </div>

                {index !== filtered.length - 1 && (
                  <div
                    style={{
                      height: "1px",
                      background: "#9b7b59",
                      opacity: "0.4",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
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
            style={menuItem()}
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
            style={menuItem("#a8b97d")}
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