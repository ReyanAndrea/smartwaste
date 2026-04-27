import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    { icon: '📍', label: 'Lapor dengan Lokasi', color: '#E8F5E9', iconBg: '#4CAF50' },
    { icon: '⚡', label: 'Laporan Cepat', color: '#FFF9E6', iconBg: '#FFC107' },
    { icon: '✓', label: 'Terlaksana', color: '#E3F2FD', iconBg: '#2196F3' },
    { icon: '📊', label: 'Pantau Status Realtime', color: '#F3E5F5', iconBg: '#9C27B0' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header green section */}
      <div style={{
        background: 'linear-gradient(180deg, #6B8F5E 0%, #7A9E6A 60%, #8BAF78 100%)',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        padding: '2rem 1.5rem 3rem',
        position: 'relative',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '20px' }}>🗑️</span>
          <span style={{ fontWeight: '700', fontSize: '18px', color: 'white' }}>
            Smart<span style={{ color: '#FFD54F' }}>Waste</span>
          </span>
        </div>

        <h2 style={{
          color: 'white',
          fontSize: '22px',
          fontWeight: '700',
          marginBottom: '0.5rem',
          lineHeight: '1.3',
        }}>
          Laporkan sampah,<br />lebih cepat & mudah
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '2rem' }}>
          Sistem pelaporan sampah digital berbasis web
        </p>

        {/* Feature grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: f.color,
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: f.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}>
                {f.icon}
              </div>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#333', textAlign: 'center' }}>
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div style={{ padding: '2rem 1.5rem', flex: 1 }}>
        <h3 style={{ fontWeight: '700', fontSize: '18px', color: '#2d2d2d', marginBottom: '0.5rem' }}>
          Mulai Sekarang
        </h3>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '2rem', lineHeight: '1.5' }}>
          Buat akun gratis & laporkan masalah sampah<br />di sekitarmu.
        </p>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '1.5rem' }}>
          <button
            onClick={() => navigate('/register')}
            style={{
              flex: 1,
              background: 'transparent',
              color: '#6B8F5E',
              border: '2px solid #6B8F5E',
              borderRadius: '30px',
              padding: '12px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Daftar
          </button>
          <button
            onClick={() => navigate('/login')}
            style={{
              flex: 1,
              background: '#6B8F5E',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              padding: '12px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Masuk
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#E8F5E9',
          borderRadius: '12px',
          padding: '12px 16px',
        }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: '#4CAF50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
          }}>✓</div>
          <span style={{ fontSize: '13px', color: '#2d2d2d' }}>
            Sudah <strong>1rb+ laporan</strong> tertangani di seluruh Aceh
          </span>
        </div>
      </div>
    </div>
  );
}