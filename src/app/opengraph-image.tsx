import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PrimeActuaire — Gouvernance technique · Santé collective · Zone CIMA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0B1628 0%, #122240 50%, #0E1A34 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #C5963A, #D4A843)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 800,
              color: "#0B1628",
            }}
          >
            P
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "800px",
            }}
          >
            PrimeActuaire
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            Gouvernance technique · Santé collective · Zone CIMA
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "30px",
            }}
          >
            {["Tarification", "Pilotage", "Provisions ENR"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: "16px",
                  color: "#C5963A",
                  padding: "8px 20px",
                  border: "1px solid rgba(197,150,58,0.3)",
                  borderRadius: "100px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
