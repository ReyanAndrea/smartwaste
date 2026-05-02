import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Welcomepage() {
  const navigate = useNavigate();

  const btnIn = (e) => {
    e.currentTarget.style.transform = "translateX(-50%) scale(1.06)";
    e.currentTarget.style.boxShadow = "0 10px 18px rgba(0,0,0,.18)";
  };

  const btnOut = (e) => {
    e.currentTarget.style.transform = "translateX(-50%) scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={{
      width:"100%",
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      background:"#dcdcdc",
      paddingTop:"10px",
      margin:0
    }}>
      <div style={{
        width:"820px",
        height:"100vh",
        background:"#a8c28f",
        position:"relative",
        overflow:"hidden"
      }}>

        {/* TITLE */}
        <div style={{
          position:"absolute",
          top:"95px",
          width:"100%",
          textAlign:"center",
          fontSize:"28px",
          fontWeight:"800",
          whiteSpace:"nowrap",
          fontFamily:"Poppins, sans-serif"
        }}>
          <span style={{color:"#ffffff"}}>Welcome to </span>
          <span style={{color:"#D2D0A0"}}>Smart</span>
          <span style={{color:"#6F4E37"}}>Waste!</span>
        </div>

        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          style={{
            position:"absolute",
            top:"220px",
            left:"48%",
            transform:"translateX(-50%)",
            width:"180px",
            height:"auto"
          }}
        />

        {/* BUTTON */}
        <button
          onClick={() => navigate("/landing")}
          onMouseEnter={btnIn}
          onMouseLeave={btnOut}
          style={{
            position:"absolute",
            top:"570px",
            left:"50%",
            transform:"translateX(-50%)",
            width:"145px",
            height:"42px",
            border:"none",
            borderRadius:"30px",
            background:"#734d35",
            color:"#fff",
            fontSize:"18px",
            fontWeight:"700",
            cursor:"pointer",
            transition:"all .25s ease"
          }}
        >
          Mulai
        </button>

        {/* ZIGZAG */}
        <div style={{
          position:"absolute",
          left:0,
          right:0,
          bottom:"0"
        }}>
          <div style={{
            height:"24px",
            background:`
              linear-gradient(-45deg, transparent 12px, #734d35 0),
              linear-gradient(45deg, transparent 12px, #734d35 0)
            `,
            backgroundSize:"24px 24px"
          }} />

          <div style={{
            height:"24px",
            marginTop:"8px",
            background:`
              linear-gradient(-45deg, transparent 12px, #b68762 0),
              linear-gradient(45deg, transparent 12px, #b68762 0)
            `,
            backgroundSize:"24px 24px"
          }} />

          <div style={{
            height:"24px",
            marginTop:"8px",
            background:`
              linear-gradient(-45deg, transparent 12px, #ebb27b 0),
              linear-gradient(45deg, transparent 12px, #ebb27b 0)
            `,
            backgroundSize:"24px 24px"
          }} />
        </div>

      </div>
    </div>
  );
}