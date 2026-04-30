import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Dashboard() {
  const navigate = useNavigate();

  const reports = [
    {
      title: "Tumpukan sampah di jalan...",
      date: "7 April 2026",
      status: "Menunggu",
      color: "#b4825d",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=200"
    },
    {
      title: "Sampah berserakan di depan...",
      date: "26 Maret 2026",
      status: "Diproses",
      color: "#4f9bb3",
      img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=200"
    },
    {
      title: "Selokan tersumbat plastik...",
      date: "25 Maret 2026",
      status: "Selesai",
      color: "#6aa06f",
      img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=200"
    },
    {
      title: "Pinggir sungai dipenuhi...",
      date: "14 Februari 2026",
      status: "Selesai",
      color: "#6aa06f",
      img: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=200"
    }
  ];

  const statCard = (title, num) => (
    <div
      style={{
        background:"#dfe8dc",
        borderRadius:"18px",
        padding:"10px",
        width:"82px",
        textAlign:"center",
        boxShadow:"0 8px 15px rgba(0,0,0,.12)",
        cursor:"pointer",
        transition:"0.25s"
      }}
      onMouseEnter={(e)=>{
        e.currentTarget.style.transform="translateY(-4px)";
      }}
      onMouseLeave={(e)=>{
        e.currentTarget.style.transform="translateY(0)";
      }}
    >
      <div style={{fontSize:"13px"}}>{title}</div>

      <div
        style={{
          marginTop:"10px",
          background:"#557f59",
          color:"#fff",
          borderRadius:"14px",
          padding:"8px 0",
          fontSize:"20px",
          fontWeight:"700"
        }}
      >
        {num}
      </div>
    </div>
  );

  return (
    <div
      style={{
        width:"100%",
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        background:"#a8c28f",
        fontFamily:"Poppins,sans-serif"
      }}
    >
      <div
        style={{
          width:"430px",
          minHeight:"100vh",
          background:"#a8c28f",
          position:"relative",
          overflowY:"auto",
          paddingBottom:"120px"
        }}
      >
        {/* HEADER */}
        <div style={{padding:"28px"}}>
          <div
            style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >
            <div
              style={{
                fontSize:"18px",
                fontWeight:"800"
              }}
            >
              <span style={{color:"#D2D0A0"}}>Halo, </span>
              <span style={{color:"#fff"}}>Zalvia Inasya!</span>
            </div>

            <div
              onClick={()=>navigate("/notif")}
              style={{
                position:"relative",
                fontSize:"18px",
                cursor:"pointer"
              }}
            >
              🔔

              <div
                style={{
                  position:"absolute",
                  right:"-2px",
                  top:"-4px",
                  width:"16px",
                  height:"16px",
                  borderRadius:"50%",
                  background:"red",
                  color:"#fff",
                  fontSize:"10px",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >
                4
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop:"20px",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}
          >
            <div>
              <div style={{color:"#fff",fontSize:"16px"}}>
                Total Laporanmu
              </div>

              <div
                style={{
                  fontSize:"20px",
                  fontWeight:"800",
                  color:"#6F4E37"
                }}
              >
                6 laporan
              </div>
            </div>

            <img src={logo} style={{width:"34px"}} />
          </div>
        </div>

        {/* BODY */}
        <div
          style={{
            background:"#557f59",
            borderTopLeftRadius:"60px",
            borderTopRightRadius:"60px",
            padding:"26px"
          }}
        >
          {/* STATS */}
          <div
            style={{
              display:"flex",
              justifyContent:"center",
              gap:"14px"
            }}
          >
            {statCard("Menunggu",1)}
            {statCard("Diproses",1)}
            {statCard("Selesai",4)}
          </div>

          {/* TITLE */}
          <div
            style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              marginTop:"26px"
            }}
          >
            <div
              style={{
                color:"#fff",
                fontSize:"18px",
                fontWeight:"700"
              }}
            >
              Laporan Terbaru
            </div>

            <div
              onClick={()=>navigate("/history")}
              style={{
                color:"#c7d79f",
                textDecoration:"underline",
                cursor:"pointer",
                fontSize:"14px"
              }}
            >
              Lihat Semua
            </div>
          </div>

          {/* REPORT LIST */}
          <div
            style={{
              marginTop:"14px",
              background:"#dfe8dc",
              borderRadius:"28px",
              padding:"18px"
            }}
          >
            {reports.map((item,index)=>(
              <div key={index}>
                <div
                  style={{
                    display:"flex",
                    gap:"14px",
                    alignItems:"center",
                    padding:"10px 0"
                  }}
                >
                  <img
                    src={item.img}
                    style={{
                      width:"56px",
                      height:"56px",
                      objectFit:"cover",
                      borderRadius:"18px"
                    }}
                  />

                  <div style={{flex:1}}>
                    <div
                      style={{
                        fontWeight:"700",
                        fontSize:"14px"
                      }}
                    >
                      {item.title}
                    </div>

                    <div
                      style={{
                        color:"#555",
                        marginTop:"4px",
                        fontSize:"13px"
                      }}
                    >
                      {item.date}
                    </div>
                  </div>

                  <div
                    style={{
                      background:item.color,
                      color:"#fff",
                      padding:"6px 14px",
                      borderRadius:"20px",
                      fontSize:"12px"
                    }}
                  >
                    {item.status}
                  </div>
                </div>

                {index !== reports.length-1 && (
                  <div
                    style={{
                      height:"1px",
                      background:"#a07b5e",
                      margin:"8px 0"
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={()=>navigate("/report")}
            style={{
              width:"100%",
              height:"50px",
              border:"none",
              borderRadius:"30px",
              background:"#b4825d",
              color:"#fff",
              fontSize:"18px",
              fontWeight:"700",
              marginTop:"20px",
              cursor:"pointer"
            }}
          >
            + Buat Laporan Baru
          </button>
        </div>

        {/* FOOTBAR FIXED */}
        <div
          style={{
            position:"fixed",
            bottom:"14px",
            left:"50%",
            transform:"translateX(-50%)",
            width:"430px",
            maxWidth:"92%",
            height:"64px",
            background:"#d2d0a0",
            borderRadius:"36px",
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            zIndex:"999",
            boxShadow:"0 8px 20px rgba(0,0,0,0.12)"
          }}
        >
          <div style={navItem}>
            <div style={{fontSize:"21px"}}>🏠</div>
            Beranda
          </div>

          <div
            onClick={()=>navigate("/report")}
            style={navItem}
          >
            <div style={{fontSize:"21px"}}>📄</div>
            Laporan
          </div>

          <div
            onClick={()=>navigate("/report")}
            style={{
              width:"66px",
              height:"66px",
              borderRadius:"50%",
              background:"#7c9a6f",
              color:"#fff",
              fontSize:"42px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              marginTop:"-34px",
              cursor:"pointer",
              fontWeight:"700"
            }}
          >
            +
          </div>

          <div
            onClick={()=>navigate("/history")}
            style={navItem}
          >
            <div style={{fontSize:"21px"}}>🕒</div>
            Riwayat
          </div>

          <div
            onClick={()=>navigate("/profil")}
            style={navItem}
          >
            <div style={{fontSize:"21px"}}>👤</div>
            Profil
          </div>
        </div>
      </div>
    </div>
  );
}

const navItem = {
  textAlign:"center",
  cursor:"pointer",
  fontSize:"13px",
  color:"#6F4E37",
  fontWeight:"600",
  lineHeight:"1.1"
};