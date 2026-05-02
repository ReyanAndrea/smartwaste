import { useState } from "react";

const ALL_LAPORAN = [
  {
    id: 1,
    title: "Tumpukan sampah di jalan...",
    time: "30 Menit yang lalu",
    status: "Selesai",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    title: "Sampah berserakan di depan...",
    time: "1 Jam yang lalu",
    status: "Belum Diproses",
    img: "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=80&h=80&fit=crop",
  },
  {
    id: 3,
    title: "Selokan tersumbat plastik...",
    time: "5 Jam yang lalu",
    status: "Diproses",
    img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=80&h=80&fit=crop",
  },
  {
    id: 4,
    title: "Pinggir sungai dipenuhi...",
    time: "12 Jam yang lalu",
    status: "Diproses",
    img: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?w=80&h=80&fit=crop",
  },
  {
    id: 5,
    title: "Sampah berserak di tepi jalan",
    time: "1 Hari yang lalu",
    status: "Selesai",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=80&h=80&fit=crop",
  },
  {
    id: 6,
    title: "Sungai Krueng terlihat sampah",
    time: "1 Hari yang lalu",
    status: "Selesai",
    img: "https://images.unsplash.com/photo-1567518284931-10df0e55e421?w=80&h=80&fit=crop",
  },
  {
    id: 7,
    title: "Pinggir Lapangan terlihat sampah",
    time: "1 Hari yang lalu",
    status: "Selesai",
    img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=80&h=80&fit=crop",
  },
  {
    id: 8,
    title: "PinggirJalan terlihat sampah",
    time: "1 Hari yang lalu",
    status: "Selesai",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop",
  },
  {
    id: 9,
    title: "Pinggir Jalan terlihat sampah",
    time: "1 Hari yang lalu",
    status: "Selesai",
    img: "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=80&h=80&fit=crop",
  },
];

const TABS = ["Semua", "Belum Diproses", "Diproses", "Selesai"];

const STATUS_COLOR = {
  Selesai: { bg: "#2D5A3D", text: "#fff" },
  Diproses: { bg: "#D4860A", text: "#fff" },
  "Belum Diproses": { bg: "#C0392B", text: "#fff" },
};

export default function RiwayatLaporan({ onKembali, onDetailLaporan, onBeranda, onProfil }) {
  const [activeTab, setActiveTab] = useState("Semua");
  const [activeNav, setActiveNav] = useState("laporan");

  const filtered =
    activeTab === "Semua"
      ? ALL_LAPORAN
      : ALL_LAPORAN.filter((l) => l.status === activeTab);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerSpacer} />
        <div style={styles.headerTitle}>Semua Laporan</div>
        <div style={styles.trashIcon}>🗑️</div>
      </div>

      {/* Filter Tabs */}
      <div style={styles.tabRow}>
        {TABS.map((tab) => (
          <button
            key={tab}
            style={{
              ...styles.tabBtn,
              ...(activeTab === tab ? styles.tabActive : styles.tabInactive),
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={styles.listWrapper}>
        {filtered.length === 0 && (
          <div style={styles.empty}>Tidak ada laporan</div>
        )}
        {filtered.map((item) => {
          const sc = STATUS_COLOR[item.status];
          return (
            <div
              key={item.id}
              style={styles.card}
              onClick={() => onDetailLaporan && onDetailLaporan(item)}
            >
              <img src={item.img} alt="" style={styles.cardImg} />
              <div style={styles.cardContent}>
                <div style={styles.cardTitle}>{item.title}</div>
                <div style={styles.cardTime}>{item.time}</div>
              </div>
              <div
                style={{
                  ...styles.statusBadge,
                  backgroundColor: sc.bg,
                  color: sc.text,
                }}
              >
                {item.status}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Nav */}
      <div style={styles.bottomNav}>
        <div
          style={{ ...styles.navItem, ...(activeNav === "beranda" ? styles.navActive : {}) }}
          onClick={() => { setActiveNav("beranda"); onBeranda && onBeranda(); }}
        >
          <span style={styles.navIcon}>⊞</span>
          <span style={styles.navLabel}>Beranda</span>
        </div>
        <div
          style={{ ...styles.navItem, ...(activeNav === "laporan" ? styles.navActive : {}) }}
          onClick={() => setActiveNav("laporan")}
        >
          <span style={styles.navIcon}>🗑</span>
          <span style={styles.navLabel}>Laporan</span>
        </div>
        <div
          style={{ ...styles.navItem, ...(activeNav === "profil" ? styles.navActive : {}) }}
          onClick={() => { setActiveNav("profil"); onProfil && onProfil(); }}
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
    display: "flex",
    flexDirection: "column",
    paddingBottom: 80,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "56px 20px 16px",
  },
  headerSpacer: {
    width: 40,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
  trashIcon: {
    fontSize: 24,
    width: 40,
    textAlign: "right",
  },
  tabRow: {
    display: "flex",
    gap: 8,
    padding: "0 16px 16px",
    flexWrap: "wrap",
  },
  tabBtn: {
    border: "none",
    borderRadius: 20,
    padding: "7px 14px",
    fontSize: 12,
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  tabActive: {
    backgroundColor: "#2D5A3D",
    color: "#fff",
  },
  tabInactive: {
    backgroundColor: "#6A9E7A",
    color: "#fff",
  },
  listWrapper: {
    flex: 1,
    padding: "0 16px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    overflowY: "auto",
  },
  card: {
    backgroundColor: "#5A8F6A",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    padding: "10px 12px",
    gap: 12,
    cursor: "pointer",
  },
  cardImg: {
    width: 56,
    height: 56,
    borderRadius: 10,
    objectFit: "cover",
    flexShrink: 0,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
    marginBottom: 3,
  },
  cardTime: {
    color: "#C8DFC9",
    fontSize: 12,
  },
  statusBadge: {
    borderRadius: 20,
    padding: "5px 12px",
    fontSize: 11,
    fontWeight: "700",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  empty: {
    color: "#C8DFC9",
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
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