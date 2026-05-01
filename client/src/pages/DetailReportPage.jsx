import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function DetailReportPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#a8c28f",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          width: "430px",
          minHeight: "100vh",
          background: "#a8c28f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div style={{ padding: "24px" }}>
          <div
            onClick={() => navigate("/history")}
            style={{
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            ← Kembali
          </div>

          {/* notif */}
          <div
            onClick={() => navigate("/notif")}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            🔔
            <div
              style={{
                position: "absolute",
                top: "-4px",
                right: "-6px",
                background: "red",
                color: "#fff",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                fontSize: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              4
            </div>
          </div>

          <h1
            style={{
              textAlign: "center",
              color: "#fff",
              marginTop: "32px",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Detail Laporan
          </h1>

          <img
            src={logo}
            alt="logo"
            style={{
              width: "30px",
              position: "absolute",
              right: "26px",
              top: "92px",
            }}
          />
        </div>

        {/* BODY */}
        <div
          style={{
            background: "#557f59",
            borderTopLeftRadius: "48px",
            borderTopRightRadius: "48px",
            marginTop: "28px",
            padding: "42px 18px 80px",
            minHeight: "78vh",
          }}
        >
          {/* TOP */}
          <div style={{ display: "flex", gap: "16px" }}>
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=300"
              alt=""
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "18px",
                objectFit: "cover",
              }}
            />

            <div style={{ flex: 1 }}>
              <div
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "1.4",
                }}
              >
                Tumpukan sampah di Jl. Syiah Kuala
              </div>

              <div
                style={{
                  marginTop: "10px",
                  background: "#b4825d",
                  color: "#fff",
                  width: "120px",
                  textAlign: "center",
                  padding: "7px",
                  borderRadius: "22px",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Menunggu
              </div>
            </div>
          </div>

          {/* LOKASI + TANGGAL */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                flex: 1,
                background: "#93af7f",
                borderRadius: "24px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Lokasi
              </div>

              <div
                style={{
                  marginTop: "10px",
                  color: "#fff",
                  fontSize: "13px",
                }}
              >
                Jl. Syiah Kuala Kec. Darussalam
              </div>
            </div>

            <div
              style={{
                width: "160px",
                background: "#8b8a62",
                borderRadius: "24px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  color: "#d7d39c",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Tanggal
              </div>

              <div
                style={{
                  marginTop: "10px",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                7 April 2026
              </div>
            </div>
          </div>

          {/* DESKRIPSI */}
          <div
            style={{
              marginTop: "22px",
              background: "#dfe8dc",
              borderRadius: "28px",
              padding: "18px",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                color: "#5a5a5a",
                fontSize: "16px",
              }}
            >
              Deskripsi
            </div>

            <div
              style={{
                marginTop: "14px",
                fontSize: "14px",
                color: "#333",
                lineHeight: "1.5",
                fontWeight: "500",
              }}
            >
              Terdapat tumpukan sampah yang banyak di pinggir Jl Syiah Kuala.
              Sudah menumpuk 3 hari dan menimbulkan bau tidak sedap.
            </div>
          </div>

          {/* RIWAYAT STATUS */}
          <div
            style={{
              marginTop: "22px",
              background: "#dfe8dc",
              borderRadius: "28px",
              padding: "18px",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                color: "#5a5a5a",
                fontSize: "16px",
              }}
            >
              Riwayat Status
            </div>

            <div style={{ marginTop: "16px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#b4825d",
                    marginTop: "6px",
                  }}
                ></div>

                <div>
                  <div
                    style={{
                      color: "#b4825d",
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    Menunggu
                  </div>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "#333",
                      marginTop: "4px",
                    }}
                  >
                    7 April 2026, 8.35 WIB
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginLeft: "5px",
                  width: "1px",
                  height: "18px",
                  background: "#777",
                  marginTop: "4px",
                  marginBottom: "4px",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    border: "2px solid #888",
                    borderRadius: "50%",
                  }}
                ></div>

                <div
                  style={{
                    color: "#666",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Diproses (menunggu update admin)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}