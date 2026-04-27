import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f5f0e8 0%, #e8dcc8 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Wave bottom decoration */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: '#c8b89a',
        clipPath: 'ellipse(60% 100% at 50% 100%)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: '#b8a888',
        clipPath: 'ellipse(55% 100% at 50% 100%)',
        opacity: 0.6,
      }} />

      {/* Content */}
      <div style={{ textAlign: 'center', zIndex: 1, padding: '2rem' }}>
        {/* Trash bin icon */}
        <div style={{
          width: '140px',
          height: '140px',
          margin: '0 auto 2rem',
          position: 'relative',
        }}>
          <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bin body */}
            <rect x="25" y="45" width="90" height="80" rx="8" fill="#8B5E3C"/>
            {/* Bin lid */}
            <rect x="20" y="32" width="100" height="16" rx="4" fill="#7A5230"/>
            {/* Handle */}
            <rect x="55" y="22" width="30" height="12" rx="6" fill="#7A5230"/>
            {/* Recycle symbol */}
            <circle cx="70" cy="85" r="28" fill="#5B8A3C" opacity="0.9"/>
            {/* Arrows of recycle */}
            <path d="M70 65 L80 78 L74 78 L74 90 L66 90 L66 78 L60 78 Z" fill="white" transform="rotate(0 70 85)"/>
            <path d="M70 65 L80 78 L74 78 L74 90 L66 90 L66 78 L60 78 Z" fill="white" transform="rotate(120 70 85)"/>
            <path d="M70 65 L80 78 L74 78 L74 90 L66 90 L66 78 L60 78 Z" fill="white" transform="rotate(240 70 85)"/>
            {/* WiFi signal */}
            <path d="M58 30 Q70 22 82 30" stroke="#5B8A3C" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M52 24 Q70 14 88 24" stroke="#5B8A3C" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <circle cx="70" cy="36" r="3" fill="#5B8A3C"/>
          </svg>
        </div>

        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#2d2d2d',
          marginBottom: '0.5rem',
          letterSpacing: '-0.5px',
        }}>
          Welcome to <span style={{ color: '#5B8A3C' }}>Smart</span><span style={{ color: '#8B5E3C' }}>Waste!</span>
        </h1>

        <button
          onClick={() => navigate('/landing')}
          style={{
            marginTop: '2.5rem',
            background: '#8B5E3C',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '14px 60px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: "'Poppins', sans-serif",
            boxShadow: '0 4px 15px rgba(139,94,60,0.4)',
          }}
        >
          Mulai
        </button>
      </div>
    </div>
  );
}