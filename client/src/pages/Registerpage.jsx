import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nama: '', email: '', noHp: '', password: '', konfirmasi: '' });
  const [showPass, setShowPass] = useState(false);
  const [showKonfirmasi, setShowKonfirmasi] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 8) {
      setError('Gunakan kata sandi dengan minimal 8 karakter');
      return;
    }
    if (form.password !== form.konfirmasi) {
      setError('Konfirmasi kata sandi tidak cocok');
      return;
    }
    setError('');
    setShowPopup(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header green */}
      <div style={{
        background: 'linear-gradient(180deg, #6B8F5E 0%, #8BAF78 100%)',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        padding: '2.5rem 1.5rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '22px' }}>🗑️</span>
          <span style={{ fontWeight: '700', fontSize: '22px', color: 'white' }}>
            Smart<span style={{ color: '#FFD54F' }}>Waste</span>
          </span>
        </div>
      </div>

      {/* Form card */}
      <div style={{
        margin: '-1.5rem 1.5rem 2rem',
        background: 'white',
        borderRadius: '20px',
        padding: '2rem 1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '22px', fontWeight: '700', color: '#2d2d2d', marginBottom: '0.25rem' }}>
          Daftar Akun
        </h2>
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginBottom: '1.5rem' }}>
          Sudah mempunyai akun?{' '}
          <span onClick={() => navigate('/login')} style={{ color: '#6B8F5E', fontWeight: '600', cursor: 'pointer' }}>
            Log in
          </span>
        </p>

        <form onSubmit={handleSubmit}>
          {/* Nama */}
          <input
            name="nama"
            placeholder="Masukkan nama"
            value={form.nama}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Masukkan email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* No HP */}
          <input
            name="noHp"
            placeholder="Masukkan nomor hp"
            value={form.noHp}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* Password */}
          <div style={{ position: 'relative', marginBottom: '0.25rem' }}>
            <input
              name="password"
              type={showPass ? 'text' : 'password'}
              placeholder="Masukkan kata sandi"
              value={form.password}
              onChange={handleChange}
              required
              style={{ ...inputStyle, marginBottom: 0, paddingRight: '40px' }}
            />
            <button type="button" onClick={() => setShowPass(!showPass)} style={eyeBtn}>
              {showPass ? '🙈' : '👁️'}
            </button>
          </div>
          <p style={{ fontSize: '11px', color: '#999', marginBottom: '0.75rem', paddingLeft: '4px' }}>
            Gunakan kata sandi dengan minimal 8 karakter
          </p>

          {/* Konfirmasi */}
          <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
            <input
              name="konfirmasi"
              type={showKonfirmasi ? 'text' : 'password'}
              placeholder="Konfirmasi kata sandi"
              value={form.konfirmasi}
              onChange={handleChange}
              required
              style={{ ...inputStyle, marginBottom: 0, paddingRight: '40px' }}
            />
            <button type="button" onClick={() => setShowKonfirmasi(!showKonfirmasi)} style={eyeBtn}>
              {showKonfirmasi ? '🙈' : '👁️'}
            </button>
          </div>

          {error && (
            <p style={{ color: '#e53935', fontSize: '12px', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              background: '#8B5E3C',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              padding: '14px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Daftar
          </button>
        </form>
      </div>

      {/* Popup Berhasil */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1.5rem',
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            width: '100%',
            maxWidth: '300px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
          }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: '#8B5E3C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '32px',
            }}>✓</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2d2d2d', marginBottom: '1.5rem' }}>
              Pendaftaran Berhasil!
            </h3>
            <button
              onClick={() => { setShowPopup(false); navigate('/login'); }}
              style={{
                width: '100%',
                background: 'white',
                color: '#2d2d2d',
                border: '1.5px solid #ddd',
                borderRadius: '30px',
                padding: '12px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Kembali
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '13px 14px',
  border: '1.5px solid #ddd',
  borderRadius: '12px',
  fontSize: '14px',
  fontFamily: "'Poppins', sans-serif",
  boxSizing: 'border-box',
  marginBottom: '0.75rem',
  outline: 'none',
};

const eyeBtn = {
  position: 'absolute',
  right: '14px',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#999',
  fontSize: '16px',
};