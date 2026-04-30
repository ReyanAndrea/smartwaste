import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Loginpage() {
  const navigate = useNavigate();

  const [showRole, setShowRole] = useState(false);
  const [role, setRole] = useState("Pilih Login Sebagai");
  const [showPass, setShowPass] = useState(false);

  const inputLine = {
    width: "100%",
    border: "none",
    borderBottom: "2px solid #7a5336",
    background: "transparent",
    padding: "10px 0",
    fontSize: "15px",
    color: "#fff",
    outline: "none"
  };

  return (
    <div style={{
      width:"100%",
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      background:"#a8c28f",
      margin:0
    }}>
      <div style={{
        width:"570px",
        minHeight:"100vh",
        background:"#a8c28f",
        overflow:"hidden",
        fontFamily:"Poppins,sans-serif"
      }}>

        {/* HEADER */}
        <div style={{
          background:"#557f59",
          padding:"26px 32px 82px",
          borderBottomLeftRadius:"50% 70px",
          borderBottomRightRadius:"50% 70px"
        }}>
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"10px",
            marginTop:"55px"
          }}>
            <img src={logo} style={{width:"24px"}} />

            <div style={{
              fontSize:"30px",
              fontWeight:"800"
            }}>
              <span style={{color:"#D2D0A0"}}>Smart</span>
              <span style={{color:"#6F4E37"}}>Waste</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{padding:"22px 48px"}}>

          <div style={{
            textAlign:"center",
            color:"#fff",
            fontSize:"28px",
            fontWeight:"800"
          }}>
            Log in
          </div>

          {/* ROLE */}
          <div style={{
            marginTop:"28px",
            position:"relative"
          }}>
            <div
              onClick={()=>setShowRole(!showRole)}
              style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                borderBottom:"2px solid #7a5336",
                padding:"10px 0",
                color:"#fff",
                cursor:"pointer",
                fontSize:"15px"
              }}
            >
              <span>{role}</span>
              <span>⌄</span>
            </div>

            {showRole && (
              <div style={{
                position:"absolute",
                right:0,
                top:"42px",
                width:"180px",
                background:"#7f9d74",
                borderRadius:"16px",
                overflow:"hidden",
                border:"1px solid #000",
                zIndex:10
              }}>
                <div
                  onClick={()=>{
                    setRole("Warga");
                    setShowRole(false);
                  }}
                  style={{
                    padding:"12px",
                    textAlign:"center",
                    color:"#fff",
                    cursor:"pointer",
                    borderBottom:"1px solid #000"
                  }}
                  onMouseEnter={(e)=>{
                    e.currentTarget.style.background="#68865f";
                  }}
                  onMouseLeave={(e)=>{
                    e.currentTarget.style.background="transparent";
                  }}
                >
                  Warga
                </div>

                <div
                  onClick={()=>{
                    setRole("Admin");
                    setShowRole(false);
                  }}
                  style={{
                    padding:"12px",
                    textAlign:"center",
                    color:"#fff",
                    cursor:"pointer"
                  }}
                  onMouseEnter={(e)=>{
                    e.currentTarget.style.background="#68865f";
                  }}
                  onMouseLeave={(e)=>{
                    e.currentTarget.style.background="transparent";
                  }}
                >
                  Admin
                </div>
              </div>
            )}
          </div>

          {/* EMAIL */}
          <div style={{marginTop:"20px"}}>
            <input placeholder="Email" style={inputLine}/>
          </div>

          {/* PASSWORD */}
          <div style={{
            marginTop:"18px",
            position:"relative"
          }}>
            <input
              type={showPass ? "text":"password"}
              placeholder="Kata Sandi"
              style={inputLine}
            />

            <span
              onClick={()=>setShowPass(!showPass)}
              style={{
                position:"absolute",
                right:"6px",
                top:"10px",
                cursor:"pointer",
                color:"#fff"
              }}
            >
              👁
            </span>
          </div>

          <div style={{
            textAlign:"right",
            fontSize:"13px",
            color:"#fff",
            marginTop:"6px"
          }}>
            Lupa Kata Sandi?
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={()=>navigate("/dashboard")}
            style={{
              width:"100%",
              height:"52px",
              border:"none",
              borderRadius:"28px",
              background:"#b4825d",
              color:"#fff",
              fontSize:"18px",
              fontWeight:"700",
              marginTop:"18px",
              cursor:"pointer",
              transition:"0.25s"
            }}
            onMouseEnter={(e)=>{
              e.currentTarget.style.transform="scale(1.03)";
            }}
            onMouseLeave={(e)=>{
              e.currentTarget.style.transform="scale(1)";
            }}
          >
            Masuk
          </button>

          {/* DIVIDER */}
          <div style={{
            display:"flex",
            alignItems:"center",
            gap:"12px",
            marginTop:"28px",
            color:"#fff"
          }}>
            <div style={{flex:1,height:"1px",background:"#7a5336"}}></div>
            <span>Atau</span>
            <div style={{flex:1,height:"1px",background:"#7a5336"}}></div>
          </div>

          {/* GMAIL */}
 <button style={{
  width:"100%",
  height:"50px",
  border:"none",
  borderRadius:"28px",
  background:"#557f59",
  color:"#fff",
  fontSize:"16px",
  fontWeight:"700",
  marginTop:"20px",
  cursor:"pointer",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  gap:"10px"
}}>
  <img
    src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
    style={{width:"20px",height:"20px"}}
  />
  Gmail
</button>

          {/* FACEBOOK */}
   <button style={{
  width:"100%",
  height:"50px",
  border:"none",
  borderRadius:"28px",
  background:"#557f59",
  color:"#fff",
  fontSize:"16px",
  fontWeight:"700",
  marginTop:"14px",
  cursor:"pointer",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  gap:"10px"
}}>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
    style={{width:"20px",height:"20px"}}
  />
  Facebook
</button>

          {/* REGISTER */}
          <div style={{
            textAlign:"center",
            marginTop:"18px",
            fontSize:"15px",
            color:"#fff"
          }}>
            Belum mempunyai akun?{" "}
            <span
              onClick={()=>navigate("/register")}
              style={{
                color:"#557f59",
                fontWeight:"700",
                cursor:"pointer"
              }}
            >
              Daftar akun
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}