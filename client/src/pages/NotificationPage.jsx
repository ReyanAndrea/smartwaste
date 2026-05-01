import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NotificationPage() {
  const navigate = useNavigate();

  const notifData = [
    {
      icon: "✔️",
      color: "#6D9A67",
      badge: "Selesai",
      badgeColor: "#6D9A67",
      time: "2 menit lalu",
      title: "Laporan kamu sudah selesai ditangani",
      desc: "Tumpukan sampah Jl. Syiah Kuala telah dibersihkan oleh petugas.",
      unread: true,
    },
    {
      icon: "🕒",
      color: "#4297C1",
      badge: "Diproses",
      badgeColor: "#4297C1",
      time: "4 jam lalu",
      title: "Status laporan diperbarui",
      desc: "Sampah berserakan di depan pasar sedang dalam proses penanganan.",
      unread: true,
    },
    {
      icon: "✔️",
      color: "#B17B4D",
      badge: "Diterima",
      badgeColor: "#B17B4D",
      time: "8 jam lalu",
      title: "Laporan berhasil dikirim",
      desc: "Laporan kamu sudah diterima dan menunggu verifikasi admin.",
      unread: true,
    },
    {
      icon: "⚠️",
      color: "#E7A84B",
      badge: "Pengingat",
      badgeColor: "#E7A84B",
      time: "1 hari lalu",
      title: "Laporan belum ada update",
      desc: "Laporan selokan tersumbat plastik sudah 1 hari menunggu.",
      unread: true,
    },
    {
      icon: "✔️",
      color: "#6D9A67",
      badge: "Selesai",
      badgeColor: "#6D9A67",
      time: "2 bulan lalu",
      title: "Laporan kamu sudah selesai ditangani",
      desc: "Tumpukan botol mineral di depan pantai telah dibersihkan petugas.",
      unread: false,
    },
    {
      icon: "👤",
      color: "#7A5334",
      badge: "Akun",
      badgeColor: "#7A5334",
      time: "3 bulan lalu",
      title: "Selamat datang di SmartWaste!",
      desc: "Akun kamu berhasil dibuat. Mulai lapor sekarang!",
      unread: false,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#A7C18A",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
      }}
    >
      {/* BACK */}
      <div
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "28px",
          left: "18px",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ← Kembali
      </div>

      {/* LOGO */}
      <img
        src={logo}
        alt="logo"
        style={{
          width: "25px",
          position: "absolute",
          top: "100px",
          right: "24px",
        }}
      />

      {/* TITLE */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "600",
          fontSize: "22px",
          paddingTop: "86px",
        }}
      >
        Notifikasi
      </div>

      {/* BODY */}
      <div
        style={{
          marginTop: "38px",
          background: "#5E885F",
          borderTopLeftRadius: "58px",
          borderTopRightRadius: "58px",
          padding: "26px 14px 40px",
          minHeight: "85vh",
        }}
      >
        {notifData.map((item, i) => (
          <div
            key={i}
            style={{
              background: item.unread ? "#C8D09E" : "#C7D3C8",
              borderRadius: "26px",
              padding: "16px",
              marginBottom: "18px",
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {/* ICON */}
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#E6E6E6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
              }}
            >
              {item.icon}
            </div>

            {/* CONTENT */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <div
                  style={{
                    background: item.badgeColor,
                    color: "white",
                    padding: "2px 10px",
                    borderRadius: "999px",
                    fontSize: "10px",
                  }}
                >
                  {item.badge}
                </div>

                <div style={{ fontSize: "11px", color: "#444" }}>
                  {item.time}
                </div>
              </div>

              <div
                style={{
                  fontWeight: "700",
                  fontSize: "15px",
                  color: "#2E2E2E",
                  marginBottom: "5px",
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#444",
                  lineHeight: "1.45",
                }}
              >
                {item.desc}
              </div>
            </div>

            {/* DOT */}
            {item.unread && (
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#4C8254",
                  marginTop: "2px",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}