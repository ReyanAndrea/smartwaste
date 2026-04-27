import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ReportPage() {
  const nav = useNavigate();

  return (
    <div className="container">
      <h2>Buat Laporan Sampah</h2>

      <input placeholder="Judul laporan..." />
      <textarea placeholder="Deskripsi..." />
      <input placeholder="Lokasi..." />

      <div className="upload">Upload Foto</div>

      <button onClick={()=>nav("/")}>
        Kirim Laporan
      </button>
    </div>
  );
}