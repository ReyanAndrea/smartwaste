import { useState } from "react";

function PopUpLogout({ onYakin, onBatal }) {
  return (
    <div style={popupStyles.overlay} onClick={onBatal}>
      <div style={popupStyles.card} onClick={(e) => e.stopPropagation()}>
        <div style={popupStyles.iconCircle}>
          <span style={popupStyles.questionMark}>?</span>
        </div>
        <div style={popupStyles.title}>Yakin ingin keluar?</div>
        <button style={popupStyles.yakinBtn} onClick={onYakin}>
          Yakin
        </button>
      </div>
    </div>
  );
}

const popupStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  card: {
    backgroundColor: "#C0392B",
    borderRadius: 20,
    padding: "28px 32px 24px",
    width: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
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

export default function ProfilAdmin({ onBeranda, onLaporan, onTentangSistem, onLogout }) {
  const [activeNav, setActiveNav] = useState("profil");
  const [showLogout, setShowLogout] = useState(false);

  const [form, setForm] = useState({
    nama: "admin123",
    email: "admin123@gmail.com",
    alamat: "Jl. Admin",
    noHp: "+ 62-812-3456-7890",
  });

  const handleLogout = () => {
    setShowLogout(false);
    onLogout && onLogout();
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTitle}>Profil</div>
        <div style={styles.trashIcon}>🗑️</div>
      </div>

      {/* Avatar */}
      <div style={styles.avatarWrapper}>
        <div style={styles.avatar}>
          <span style={styles.avatarIcon}>👤</span>
        </div>
      </div>

      {/* Form Card */}
      <div style={styles.formCard}>
        {/* Nama Lengkap */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Nama Lengkap</label>
          <input
            style={styles.input}
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
          />
        </div>

        {/* Email */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Alamat */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Alamat</label>
          <input
            style={styles.input}
            value={form.alamat}
            onChange={(e) => setForm({ ...form, alamat: e.target.value })}
          />
        </div>

        {/* No HP */}
        <div style={styles.fieldGroup}>
          <label style={styles.label}>No. HP</label>
          <input
            style={styles.input}
            value={form.noHp}
            onChange={(e) => setForm({ ...form, noHp: e.target.value })}
          />
        </div>

        {/* Buttons */}
        <button style={styles.btnEditProfil}>Edit Profil</button>

        <button style={styles.btnUbahKataSandi}>Ubah Kata Sandi</button>

        <button
          style={styles.btnTentangSistem}
          onClick={() => onTentangSistem && onTentangSistem()}
        >
          <div style={styles.btnTentangTitle}>Tentang Sistem</div>
          <div style={styles.btnTentangSub}>SmartWaste V.1.0.0</div>
        </button>

        <button style={styles.btnKeluar} onClick={() => setShowLogout(true)}>
          Keluar Dari Akun
        </button>
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
          onClick={() => { setActiveNav("laporan"); onLaporan && onLaporan(); }}
        >
          <span style={styles.navIcon}>🕐</span>
          <span style={styles.navLabel}>Laporan</span>
        </div>
        <div
          style={{ ...styles.navItem, ...(activeNav === "profil" ? styles.navActive : {}) }}
          onClick={() => setActiveNav("profil")}
        >
          <span style={styles.navIcon}>👤</span>
          <span style={styles.navLabel}>Profil</span>
        </div>
      </div>

      {/* Pop Up Logout */}
      {showLogout && (
        <PopUpLogout
          onYakin={handleLogout}
          onBatal={() => setShowLogout(false)}
        />
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
    display: "flex",
    flexDirection: "column",
    paddingBottom: 80,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "56px 20px 8px",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 22,
    flex: 1,
    textAlign: "center",
  },
  trashIcon: {
    fontSize: 24,
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    backgroundColor: "#C8DFC9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarIcon: {
    fontSize: 40,
  },
  formCard: {
    backgroundColor: "#4A7C59",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    flex: 1,
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  label: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 2,
  },
  input: {
    backgroundColor: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "12px 14px",
    fontSize: 14,
    color: "#333",
    outline: "none",
  },
  btnEditProfil: {
    backgroundColor: "#A0784A",
    color: "#fff",
    border: "none",
    borderRadius: 28,
    padding: "14px",
    fontSize: 15,
    fontWeight: "600",
    cursor: "pointer",
    marginTop: 4,
  },
  btnUbahKataSandi: {
    backgroundColor: "#3A6B7A",
    color: "#fff",
    border: "none",
    borderRadius: 28,
    padding: "14px",
    fontSize: 15,
    fontWeight: "700",
    cursor: "pointer",
  },
  btnTentangSistem: {
    backgroundColor: "#6B4A2A",
    color: "#fff",
    border: "none",
    borderRadius: 28,
    padding: "10px 14px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  btnTentangTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },
  btnTentangSub: {
    fontSize: 11,
    color: "#D4C4A8",
  },
  btnKeluar: {
    backgroundColor: "#C0392B",
    color: "#fff",
    border: "none",
    borderRadius: 28,
    padding: "14px",
    fontSize: 15,
    fontWeight: "600",
    cursor: "pointer",
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    left: 0,
    right: 0,
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