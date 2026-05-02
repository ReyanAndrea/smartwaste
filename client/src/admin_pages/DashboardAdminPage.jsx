import { useState, useEffect } from "react";

const HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

function getNow() {
  const now = new Date();
  const hari = HARI[now.getDay()];
  const tanggal = now.getDate();
  const bulan = BULAN[now.getMonth()];
  const tahun = now.getFullYear();
  const jam = now.getHours();
  const menit = String(now.getMinutes()).padStart(2, "0");
  const ampm = jam >= 12 ? "PM" : "AM";
  const jam12 = String(jam % 12 || 12).padStart(2, "0");
  return {
    dateText: `${hari}, ${tanggal} ${bulan} ${tahun}`,
    timeText: `${jam12}.${menit} ${ampm}`,
  };
}

const laporanData = [
  {
    id: 1,
    title: "Tumpukan sampah di jalan...",
    time: "30 Menit yang lalu",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    title: "Sampah berserakan di depan...",
    time: "1 Jam yang lalu",
    img: "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=80&h=80&fit=crop",
  },
  {
    id: 3,
    title: "Selokan tersumbat plastik...",
    time: "5 Jam yang lalu",
    img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=80&h=80&fit=crop",
  },
  {
    id: 4,
    title: "Pinggir sungai dipenuhi...",
    time: "12 Jam yang lalu",
    img: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?w=80&h=80&fit=crop",
  },
];

export default function DashboardAdmin({ onDetailLaporan, onLihatSemua, onLaporan, onProfil }) {
  const [activeTab, setActiveTab] = useState("beranda");
  const [clock, setClock] = useState(getNow());

  useEffect(() => {
    const timer = setInterval(() => setClock(getNow()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <div style={styles.greeting}>
            <span style={styles.halo}>Halo, </span>
            <span style={styles.petugas}>Petugas!</span>
          </div>
          <div style={styles.dateText}>{clock.dateText}</div>
          <div style={styles.timeText}>{clock.timeText}</div>
        </div>
        <div style={styles.trashIcon}>🗑️</div>
      </div>

      {/* Stats Card */}
      <div style={styles.statsCard}>
        <div style={styles.statsIcon}>📊</div>
        <div>
          <div style={styles.statsNumber}>86% (26/30)</div>
          <div style={styles.statsLabel}>total laporan harian</div>
        </div>
      </div>

      {/* Laporan List */}
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Laporan Hari Ini</div>
        <div style={styles.listCard}>
          {laporanData.map((item, idx) => (
            <div key={item.id}>
              <div style={styles.listItem}>
                <img src={item.img} alt="" style={styles.listImg} />
                <div style={styles.listContent}>
                  <div style={styles.listTitle}>{item.title}</div>
                  <div style={styles.listTime}>{item.time}</div>
                  <div
                    style={styles.detailLink}
                    onClick={() => onDetailLaporan && onDetailLaporan(item)}
                  >
                    Detail Laporan
                  </div>
                </div>
              </div>
              {idx < laporanData.length - 1 && <div style={styles.divider} />}
            </div>
          ))}
        </div>
      </div>

      {/* Lihat Semua Button */}
      <button style={styles.lihatSemua} onClick={onLihatSemua}>
        Lihat Semua
      </button>

      {/* Bottom Nav */}
      <div style={styles.bottomNav}>
        <div
          style={{ ...styles.navItem, ...(activeTab === "beranda" ? styles.navActive : {}) }}
          onClick={() => setActiveTab("beranda")}
        >
          <span style={styles.navIcon}>⊞</span>
          <span style={styles.navLabel}>Beranda</span>
        </div>
        <div
          style={{ ...styles.navItem, ...(activeTab === "laporan" ? styles.navActive : {}) }}
          onClick={() => { setActiveTab("laporan"); onLaporan && onLaporan(); }}
        >
          <span style={styles.navIcon}>🗑</span>
          <span style={styles.navLabel}>Laporan</span>
        </div>
        <div
          style={{ ...styles.navItem, ...(activeTab === "profil" ? styles.navActive : {}) }}
          onClick={() => { setActiveTab("profil"); onProfil && onProfil(); }}
        >
          <span style={styles.navIcon}>👤</span>
          <span style={styles.navLabel}>Profil</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: 390,
    minHeight: 844,
    backgroundColor: "#4A7C59",
    fontFamily: "'Segoe UI', sans-serif",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 80,
    overflowY: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "60px 24px 20px",
  },
  greeting: {
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 1.2,
  },
  halo: {
    color: "#D4A843",
  },
  petugas: {
    color: "#fff",
  },
  dateText: {
    color: "#fff",
    fontSize: 13,
    marginTop: 8,
    opacity: 0.9,
  },
  timeText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  trashIcon: {
    fontSize: 28,
    marginTop: 8,
  },
  statsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    margin: "0 20px 20px",
    padding: "18px 20px",
    display: "flex",
    alignItems: "center",
    gap: 16,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  statsIcon: {
    fontSize: 40,
  },
  statsNumber: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2D2D2D",
  },
  statsLabel: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  section: {
    padding: "0 20px",
    flex: 1,
  },
  sectionTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 12,
  },
  listCard: {
    backgroundColor: "#5A8F6A",
    borderRadius: 16,
    overflow: "hidden",
    padding: "4px 0",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    padding: "12px 16px",
    gap: 12,
  },
  listImg: {
    width: 52,
    height: 52,
    borderRadius: 10,
    objectFit: "cover",
    flexShrink: 0,
  },
  listContent: {
    flex: 1,
  },
  listTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  listTime: {
    color: "#C8DFC9",
    fontSize: 12,
    marginTop: 2,
  },
  detailLink: {
    color: "#A8D5A2",
    fontSize: 11,
    marginTop: 4,
    textAlign: "right",
    cursor: "pointer",
    textDecoration: "underline",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.15)",
    margin: "0 16px",
  },
  lihatSemua: {
    margin: "16px 20px 0",
    backgroundColor: "#A0784A",
    color: "#fff",
    border: "none",
    borderRadius: 28,
    padding: "14px",
    fontSize: 15,
    fontWeight: "600",
    cursor: "pointer",
    width: "calc(100% - 40px)",
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    width: 390,
    backgroundColor: "#EDE8D0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0 16px",
    borderTop: "1px solid rgba(0,0,0,0.08)",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    cursor: "pointer",
    padding: "4px 20px",
    borderRadius: 12,
  },
  navActive: {
    backgroundColor: "rgba(74,124,89,0.15)",
  },
  navIcon: {
    fontSize: 20,
  },
  navLabel: {
    fontSize: 11,
    color: "#4A7C59",
    fontWeight: "600",
  },
};