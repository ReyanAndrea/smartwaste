import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'Warga') navigate('/login-warga');
    // tambahkan navigasi admin sesuai kebutuhan
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '22px' }}>🗑️</span>
          <span style={{ fontWeight: '700', fontSize: '22px', color: 'white' }}>
            Smart<span style={{ color: '#FFD54F' }}>Waste</span>
          </span>
        </div>
      </div>

      {/* Form card */}
      <div style={{
        margin: '-1.5rem 1.5rem 0',
        background: 'white',
        borderRadius: '20px',
        padding: '2rem 1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        flex: 1,
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '22px',
          fontWeight: '700',
          color: '#2d2d2d',
          marginBottom: '1.5rem',
        }}>Log in</h2>

        <form onSubmit={handleLogin}>
          {/* Role select */}
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#6B8F5E' }}>👤</div>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              style={{
                width: '100%',
                padding: '13px 14px 13px 40px',
                border: '1.5px solid #ddd',
                borderRadius: '12px',
                fontSize: '14px',
                color: role ? '#2d2d2d' : '#999',
                appearance: 'none',
                background: 'white',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <option value="" disabled>Pilih Login Sebagai</option>
              <option value="Warga">Warga</option>
              <option value="Admin">Admin</option>
            </select>
            <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>▼</div>
          </div>

          {/* Email */}
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#6B8F5E' }}>✉️</div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '13px 14px 13px 40px',
                border: '1.5px solid #ddd',
                borderRadius: '12px',
                fontSize: '14px',
                fontFamily: "'Poppins', sans-serif",
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Password */}
          <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
            <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#6B8F5E' }}>🔒</div>
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="Kata Sandi"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '13px 40px 13px 40px',
                border: '1.5px solid #ddd',
                borderRadius: '12px',
                fontSize: '14px',
                fontFamily: "'Poppins', sans-serif",
                boxSizing: 'border-box',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              style={{
                position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '16px',
              }}
            >
              {showPass ? '🙈' : '👁️'}
            </button>
          </div>

          <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '12px', color: '#6B8F5E', cursor: 'pointer' }}>Lupa Kata Sandi?</span>
          </div>

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
              marginBottom: '1.5rem',
            }}
          >
            Masuk
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ flex: 1, height: '1px', background: '#eee' }} />
            <span style={{ fontSize: '12px', color: '#999' }}>Atau</span>
            <div style={{ flex: 1, height: '1px', background: '#eee' }} />
          </div>

          {/* Social login */}
          <button type="button" style={{
            width: '100%',
            background: 'white',
            border: '1.5px solid #ddd',
            borderRadius: '30px',
            padding: '12px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: "'Poppins', sans-serif",
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}>
            <span>G</span> Gmail
          </button>
          <button type="button" style={{
            width: '100%',
            background: '#1877F2',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '12px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: "'Poppins', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}>
            <span>f</span> Facebook
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '13px', color: '#666', marginTop: '1.5rem' }}>
          Belum mempunyai akun?{' '}
          <span
            onClick={() => navigate('/register')}
            style={{ color: '#6B8F5E', fontWeight: '600', cursor: 'pointer' }}
          >
            Daftar akun
          </span>
        </p>
      </div>
    </div>
  );
}