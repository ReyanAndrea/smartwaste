import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <h2>Halo, Zalvia Inasya!</h2>
        <p>Total Laporanmu</p>
        <h1>6 laporan</h1>
      </div>

      <div className="card">
        <div className="status">
          <div className="box">Menunggu<br/>1</div>
          <div className="box">Diproses<br/>1</div>
          <div className="box">Selesai<br/>4</div>
        </div>

        <h3>Laporan Terbaru</h3>

        <div className="item">Tumpukan sampah di jalan...</div>
        <div className="item">Sampah berserakan di depan...</div>
        <div className="item">Selokan tersumbat plastik...</div>

        <button onClick={() => nav("/report")}>
          + Buat Laporan Baru
        </button>
      </div>

      <div className="navbar">
        <span>Beranda</span>
        <span onClick={()=>nav("/report")}>+</span>
        <span onClick={()=>nav("/history")}>Riwayat</span>
      </div>
    </div>
  );
}