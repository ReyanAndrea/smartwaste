import FOTO_PHONE_KIRI from "../assets/kiri.png";
import FOTO_PHONE_KANAN from "../assets/kanan.png";

export default function TentangSistem({ onKembali }) {
  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.kembali} onClick={onKembali}>
          <span style={styles.kembaliArrow}>‹</span>
          <span style={styles.kembaliText}>Kembali</span>
        </div>

        <div style={styles.trashIcon}>🗑️</div>
      </div>

      {/* Hero */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Laporkan
          <br />
          sampah lebih
          <br />
          cepat & mudah
        </h1>
      </div>

      {/* Brand */}
      <div style={styles.brandRow}>
        <span style={styles.brandSmart}>Smart</span>
        <span style={styles.brandWaste}>Waste</span>
      </div>

      {/* Card */}
      <div style={styles.infoCard}>
        <div style={styles.infoTitle}>Tentang Sistem</div>

        <p style={styles.infoText}>
          SmartWaste adalah sistem pelaporan sampah digital berbasis web yang memudahkan masyarakat dalam melaporkan permasalahan sampah secara cepat dan terstruktur. Sistem ini memungkinkan setiap laporan terdokumentasi dengan baik serta membantu petugas dalam mengelola dan menindaklanjuti laporan secara efisien dan transparan, sehingga mendukung terciptanya lingkungan yang lebih bersih dan sehat.
        </p>

        <div style={styles.statsBadge}>
          <div style={styles.statsCheckCircle}>
            <span style={styles.statsCheckIcon}>✔</span>
          </div>

          <div>
            <div style={styles.statsNumber}>
              Sudah <strong>1rb+ laporan</strong>
            </div>

            <div style={styles.statsSub}>
              tertangani di seluruh Aceh
            </div>
          </div>
        </div>
      </div>

      {/* Preview Gambar */}
      <div style={styles.previewArea}>

        {/* Kiri */}
        <img
          src={FOTO_PHONE_KIRI}
          alt="Kiri"
          style={styles.previewImageSmall}
        />

        {/* Kanan */}
        <img
          src={FOTO_PHONE_KANAN}
          alt="Kanan"
          style={styles.previewImageLarge}
        />

      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © 2026 Kelompok 1 - SmartWaste
      </div>

    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "430px",
    minHeight: "100vh",
    backgroundColor: "#4A7C59",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    margin: "0 auto",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "52px 20px 8px",
  },

  kembali: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    cursor: "pointer",
  },

  kembaliArrow: {
    color: "#fff",
    fontSize: 22,
  },

  kembaliText: {
    color: "#fff",
    fontSize: 14,
  },

  trashIcon: {
    fontSize: 24,
  },

  heroSection: {
    padding: "8px 24px 0",
  },

  heroTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 1.2,
    margin: 0,
  },

  brandRow: {
    padding: "14px 24px 0",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },

  brandSmart: {
    color: "#D4A843",
  },

  brandWaste: {
    color: "#fff",
  },

  infoCard: {
    backgroundColor: "#6B4A2A",
    borderRadius: 16,
    margin: "16px 20px",
    padding: "16px 18px",
  },

  infoTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 10,
  },

  infoText: {
    color: "#E8D8C4",
    fontSize: 13,
    lineHeight: 1.65,
    margin: "0 0 14px",
  },

  statsBadge: {
    backgroundColor: "#8B6914",
    borderRadius: 12,
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  statsCheckCircle: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "#4A7C59",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  statsCheckIcon: {
    fontSize: 16,
    color: "#fff",
  },

  statsNumber: {
    color: "#fff",
    fontSize: 13,
  },

  statsSub: {
    color: "#E8D8C4",
    fontSize: 12,
    marginTop: 2,
  },

  previewArea: {
    position: "relative",
    height: 240,
    margin: "10px 20px 0",
  },

  previewImageSmall: {
  position: "absolute",
  left: 60,
  bottom: 0,

  width: 145,
  height: 245,

  objectFit: "contain",
  display: "block",

  transform: "rotate(8deg)",
  zIndex: 1,
},

previewImageLarge: {
  position: "absolute",
  right: 50,
  bottom: 0,

  width: 175,
  height: 275,

  objectFit: "contain",
  display: "block",

  transform: "rotate(-8deg)",
  zIndex: 2,
},

  footer: {
    color: "#C8DFC9",
    fontSize: 10,
    textAlign: "center",
    padding: "18px 20px 24px",
    opacity: 0.7,
  },
};