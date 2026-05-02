import { useState } from "react";

const STATUS_OPTIONS = ["Diproses", "Belum Diproses", "Selesai"];

function PopUpHapus({ onHapus }) {
  return (
    <div style={popupStyles.card}>
      <div style={popupStyles.iconCircle}>
        <span style={popupStyles.questionMark}>?</span>
      </div>
      <div style={popupStyles.title}>Yakin ingin Hapus?</div>
      <button style={popupStyles.yakinBtn} onClick={onHapus}>
        Yakin
      </button>
    </div>
  );
}

const popupStyles = {
  card: {
    backgroundColor: "#C0392B",
    borderRadius: 20,
    padding: "28px 32px 24px",
    width: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    backgroundColor: "#EAF5EC",
    border: "4px solid #C0392B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  questionMark: {
    fontSize: 36,
    fontWeight: "700",
    color: "#C0392B",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  yakinBtn: {
    backgroundColor: "#fff",
    color: "#333",
    border: "none",
    borderRadius: 28,
    padding: "12px 0",
    width: "100%",
    fontSize: 15,
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default function DetailLaporan({ onKembali, laporan }) {
  const [status, setStatus] = useState("Diproses");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPopUpHapus, setShowPopUpHapus] = useState(false);
  const [showKonfirmasiSuccess, setShowKonfirmasiSuccess] = useState(false);

  const getStatusStyle = () => {
    if (status === "Selesai") return { ...styles.statusBtn, backgroundColor: "#3D6B4F" };
    if (status === "Belum Diproses") return { ...styles.statusBtn, backgroundColor: "#C0392B" };
    return styles.statusBtn;
  };

  const handleKonfirmasi = () => {
    setShowKonfirmasiSuccess(true);
    setTimeout(() => setShowKonfirmasiSuccess(false), 2000);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.kembali} onClick={onKembali}>
          <span style={styles.kembaliArrow}>‹</span>
          <span style={styles.kembaliText}>Kembali</span>
        </div>
        <div style={styles.headerTitle}>Detail Laporan</div>
        <div style={styles.trashIcon}>🗑️</div>
      </div>

      {/* Content Card */}
      <div style={styles.contentCard}>
        {/* Image */}
        <div style={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop"
            alt="Laporan"
            style={styles.reportImage}
          />
          <button
            style={styles.deleteImgBtn}
            onClick={() => setShowPopUpHapus(true)}
          >
            🗑
          </button>
        </div>

        {/* Location & Date */}
        <div style={styles.infoRow}>
          <div style={styles.locationPill}>
            <span style={styles.locationText}>Lokasi</span>
            <span style={styles.locationIcon}>📍</span>
          </div>
          <div style={styles.dateBlock}>
            <div style={styles.dateText}>10 April 2026</div>
            <div style={styles.dayText}>Kamis</div>
          </div>
        </div>

        {/* Reporter Info */}
        <div style={styles.reporterCard}>
          <div style={styles.reporterRow}>
            <span style={styles.reporterAvatar}>👤</span>
            <span style={styles.reporterName}>
              {laporan?.reporter || "Reyan Andrea"}
            </span>
          </div>
          <p style={styles.reporterDesc}>
            {laporan?.description ||
              "Tumpukkan sampah di jalan yang sangat banyak. Sudah menumpuk 3 hari yang lalu, bau tidak sedap dan mengganggu"}
          </p>
        </div>

        {/* Status Dropdown */}
        <div style={styles.statusWrapper}>
          <button style={getStatusStyle()} onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span>{status}</span>
            <span style={styles.arrow}>▼</span>
          </button>
          {dropdownOpen && (
            <div style={styles.dropdown}>
              {STATUS_OPTIONS.map((opt) => (
                <div
                  key={opt}
                  style={{
                    ...styles.dropdownItem,
                    backgroundColor:
                      opt === "Belum Diproses"
                        ? "#C0392B"
                        : opt === "Selesai"
                        ? "#3D6B4F"
                        : "#D4860A",
                  }}
                  onClick={() => {
                    setStatus(opt);
                    setDropdownOpen(false);
                  }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Konfirmasi Button */}
        <button style={styles.konfirmasiBtn} onClick={handleKonfirmasi}>
          {showKonfirmasiSuccess ? "✓ Tersimpan!" : "Konfirmasi"}
        </button>
      </div>

      {/* Pop Up Hapus */}
      {showPopUpHapus && (
        <div style={styles.overlay}>
          <PopUpHapus
            onHapus={() => setShowPopUpHapus(false)}
            onBatal={() => setShowPopUpHapus(false)}
          />
        </div>
      )}
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
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "56px 20px 16px",
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
    lineHeight: 1,
  },
  kembaliText: {
    color: "#fff",
    fontSize: 14,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  trashIcon: {
    fontSize: 24,
  },
  contentCard: {
    backgroundColor: "#5A8F6A",
    borderRadius: 24,
    margin: "0 14px",
    padding: "20px 16px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  imageWrapper: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
  },
  reportImage: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 16,
    display: "block",
  },
  deleteImgBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(200,200,200,0.85)",
    border: "none",
    borderRadius: 8,
    width: 32,
    height: 32,
    cursor: "pointer",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4A7C59",
    borderRadius: 12,
    padding: "10px 14px",
  },
  locationPill: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#6A9E7A",
    borderRadius: 20,
    padding: "6px 14px",
  },
  locationText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  locationIcon: {
    fontSize: 14,
  },
  dateBlock: {
    textAlign: "right",
  },
  dateText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  dayText: {
    color: "#D4A843",
    fontSize: 13,
    fontWeight: "700",
  },
  reporterCard: {
    backgroundColor: "#F5F5F0",
    borderRadius: 12,
    padding: "12px 14px",
  },
  reporterRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  reporterAvatar: {
    fontSize: 18,
  },
  reporterName: {
    color: "#D4860A",
    fontWeight: "600",
    fontSize: 14,
  },
  reporterDesc: {
    color: "#333",
    fontSize: 13,
    lineHeight: 1.5,
    margin: 0,
  },
  statusWrapper: {
    position: "relative",
  },
  statusBtn: {
    backgroundColor: "#D4860A",
    color: "#fff",
    border: "none",
    borderRadius: 24,
    padding: "12px 20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "600",
    cursor: "pointer",
  },
  arrow: {
    fontSize: 12,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 10,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  dropdownItem: {
    padding: "13px 20px",
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    cursor: "pointer",
  },
  konfirmasiBtn: {
    backgroundColor: "#2D5A3D",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "16px",
    width: "100%",
    fontSize: 16,
    fontWeight: "700",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
};