// ============================================================
// Ganti nilai di bawah dengan path foto asli kalian
// Contoh: import fotoKiri from "../assets/phone-kiri.png"
//         lalu set FOTO_PHONE_KIRI = fotoKiri
// ============================================================
const FOTO_PHONE_KIRI = null;  // isi path foto phone kiri
const FOTO_PHONE_KANAN = null; // isi path foto phone kanan (dipegang tangan)

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

      {/* Hero Title */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Laporkan<br />
          sampah lebih<br />
          cepat & mudah
        </h1>
      </div>

      {/* Brand */}
      <div style={styles.brandRow}>
        <span style={styles.brandSmart}>Smart</span>
        <span style={styles.brandWaste}>Waste</span>
      </div>

      {/* Info Card */}
      <div style={styles.infoCard}>
        <div style={styles.infoTitle}>Tentang Sistem</div>
        <p style={styles.infoText}>
          SmartWaste adalah sistem pelaporan sampah digital berbasis web yang
          memudahkan masyarakat dalam melaporkan permasalahan sampah secara
          cepat dan terstruktur. Sistem ini memungkinkan setiap laporan
          terdokumentasi dengan baik serta membantu petugas dalam mengelola
          dan menindaklanjuti laporan secara efisien dan transparan, sehingga
          mendukung terciptanya lingkungan yang lebih bersih dan sehat.
        </p>

        {/* Stats Badge */}
        <div style={styles.statsBadge}>
          <div style={styles.statsCheckCircle}>
            <span style={styles.statsCheckIcon}>✔</span>
          </div>
          <div>
            <div style={styles.statsNumber}>
              Sudah <strong>1rb+ laporan</strong>
            </div>
            <div style={styles.statsSub}>tertangani di seluruh Aceh</div>
          </div>
        </div>
      </div>

      {/* Phone Mockup Area */}
      <div style={styles.mockupArea}>

        {/* Phone Kiri — lebih kecil, posisi kiri bawah */}
        <div style={styles.phoneKiriWrap}>
          <div style={styles.phoneFrameSmall}>
            <div style={styles.phoneNotch} />
            <div style={styles.phoneScreen}>
              {FOTO_PHONE_KIRI
                ? <img src={FOTO_PHONE_KIRI} alt="Screenshot kiri" style={styles.phoneImg} />
                : <PlaceholderKiri />
              }
            </div>
          </div>
        </div>

        {/* Phone Kanan — lebih besar, posisi kanan, dipegang tangan */}
        <div style={styles.phoneKananWrap}>
          <div style={styles.phoneFrameLarge}>
            <div style={styles.phoneNotch} />
            <div style={styles.phoneScreen}>
              {FOTO_PHONE_KANAN
                ? <img src={FOTO_PHONE_KANAN} alt="Screenshot kanan" style={styles.phoneImg} />
                : <PlaceholderKanan />
              }
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={styles.footer}>
        © 2026 Kelompok 1 - SmartWaste - All rights reserved
      </div>

    </div>
  );
}

/* ── Placeholder phone kiri (halaman laporan / dashboard) ── */
function PlaceholderKiri() {
  return (
    <div style={ph.wrap}>
      <div style={ph.topBar} />
      {[1, 0.7, 0.5].map((w, i) => (
        <div key={i} style={ph.row}>
          <div style={ph.thumb} />
          <div style={{ flex: 1 }}>
            <div style={{ ...ph.line, width: `${w * 100}%` }} />
            <div style={{ ...ph.line, width: `${w * 60}%`, marginTop: 3 }} />
          </div>
        </div>
      ))}
      <div style={ph.btn} />
    </div>
  );
}

/* ── Placeholder phone kanan (halaman riwayat / list) ── */
function PlaceholderKanan() {
  return (
    <div style={ph.wrap}>
      <div style={ph.topBar} />
      <div style={ph.gridRow}>
        {[...Array(3)].map((_, i) => <div key={i} style={ph.gridBox} />)}
      </div>
      <div style={{ ...ph.line, width: "50%", marginBottom: 6 }} />
      {[...Array(3)].map((_, i) => (
        <div key={i} style={ph.row}>
          <div style={ph.thumb} />
          <div style={{ flex: 1 }}>
            <div style={ph.line} />
            <div style={{ ...ph.line, width: "60%", marginTop: 3 }} />
          </div>
          <div style={ph.badge} />
        </div>
      ))}
      <div style={ph.btn} />
    </div>
  );
}

const ph = {
  wrap: {
    padding: 7,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    height: "100%",
    overflow: "hidden",
  },
  topBar: {
    height: 10,
    backgroundColor: "#4A7C59",
    borderRadius: 4,
    opacity: 0.45,
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(74,124,89,0.15)",
    borderRadius: 6,
    padding: "5px 6px",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "rgba(74,124,89,0.4)",
    flexShrink: 0,
  },
  line: {
    height: 5,
    width: "100%",
    backgroundColor: "#4A7C59",
    borderRadius: 3,
    opacity: 0.4,
  },
  badge: {
    width: 28,
    height: 14,
    borderRadius: 8,
    backgroundColor: "#D4860A",
    opacity: 0.7,
    flexShrink: 0,
  },
  gridRow: {
    display: "flex",
    gap: 5,
  },
  gridBox: {
    flex: 1,
    height: 30,
    backgroundColor: "rgba(74,124,89,0.25)",
    borderRadius: 6,
  },
  btn: {
    height: 16,
    backgroundColor: "#D4860A",
    borderRadius: 8,
    opacity: 0.75,
    marginTop: "auto",
  },
};

const styles = {
  container: {
    width: 390,
    minHeight: 844,
    backgroundColor: "#4A7C59",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
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
  kembaliArrow: { color: "#fff", fontSize: 22 },
  kembaliText: { color: "#fff", fontSize: 14 },
  trashIcon: { fontSize: 24 },

  heroSection: { padding: "8px 24px 0" },
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
  brandSmart: { color: "#D4A843" },
  brandWaste: { color: "#fff" },

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
  statsCheckIcon: { fontSize: 16, color: "#fff" },
  statsNumber: { color: "#fff", fontSize: 13 },
  statsSub: { color: "#E8D8C4", fontSize: 12, marginTop: 2 },

  // Phone mockup layout
  mockupArea: {
    position: "relative",
    height: 230,
    margin: "4px 20px 0",
  },
  phoneKiriWrap: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 1,
  },
  phoneKananWrap: {
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  phoneFrameSmall: {
    width: 118,
    height: 200,
    backgroundColor: "#111",
    borderRadius: 22,
    padding: "6px 5px 5px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
    display: "flex",
    flexDirection: "column",
  },
  phoneFrameLarge: {
    width: 148,
    height: 220,
    backgroundColor: "#111",
    borderRadius: 26,
    padding: "7px 6px 6px",
    boxShadow: "0 12px 36px rgba(0,0,0,0.55)",
    display: "flex",
    flexDirection: "column",
  },
  phoneNotch: {
    width: 36,
    height: 6,
    backgroundColor: "#000",
    borderRadius: 4,
    alignSelf: "center",
    marginBottom: 4,
    flexShrink: 0,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: "#EDE8D0",
    borderRadius: 16,
    overflow: "hidden",
  },
  phoneImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  footer: {
    color: "#C8DFC9",
    fontSize: 10,
    textAlign: "center",
    padding: "18px 20px 24px",
    opacity: 0.7,
  },
};