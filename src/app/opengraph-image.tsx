import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const portraitSource = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "media", "photos", "portrait.png"),
).toString("base64")}`;

const noiseSource = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "media", "textures", "noise-soft.png"),
).toString("base64")}`;

const coralShape = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "media", "visuals", "coral-bevel.png"),
).toString("base64")}`;

const blueShape = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "media", "visuals", "blue-slice.png"),
).toString("base64")}`;

const darkShape = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "media", "visuals", "dark-bevel.png"),
).toString("base64")}`;

const logoSource = `data:image/svg+xml;base64,${readFileSync(
  join(process.cwd(), "src", "app", "icon.svg"),
).toString("base64")}`;

const unboundedFont = readFileSync(
  join(process.cwd(), "public", "media", "fonts", "unbounded-og-900.ttf"),
);

const manropeFont = readFileSync(
  join(process.cwd(), "public", "media", "fonts", "manrope-og-700.ttf"),
);

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#D9D9D9",
        color: "#32404B",
        fontFamily: "Manrope",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={darkShape}
        alt=""
        style={{
          position: "absolute",
          right: -120,
          top: -128,
          width: 520,
          height: 520,
          objectFit: "contain",
          opacity: 0.16,
        }}
      />
      <img
        src={coralShape}
        alt=""
        style={{
          position: "absolute",
          left: -156,
          bottom: -178,
          width: 620,
          height: 620,
          objectFit: "contain",
          opacity: 0.58,
        }}
      />
      <img
        src={blueShape}
        alt=""
        style={{
          position: "absolute",
          left: 512,
          bottom: 24,
          width: 206,
          height: 320,
          objectFit: "contain",
          opacity: 0.5,
        }}
      />
      <img
        src={noiseSource}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.25,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          padding: "76px 76px",
          width: 720,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#FF5A4B",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoSource}
              alt=""
              style={{
                width: 54,
                height: 54,
                objectFit: "contain",
              }}
            />
          </div>
          <span>Алина Насретдинова / @animygirl</span>
        </div>
        <div
          style={{
            fontFamily: "Unbounded",
            fontSize: 52,
            lineHeight: 1,
            fontWeight: 900,
          }}
        >
          SMM: стратегия, Reels и органический рост
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 27,
            lineHeight: 1.35,
            color: "#32404B",
            fontWeight: 700,
          }}
        >
          <span>
            Кейсы до 3,5 млн просмотров, 1 млн охвата в месяц и полный цикл
          </span>
          <span style={{ whiteSpace: "nowrap" }}>контент-продакшена</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 92,
          top: 74,
          width: 360,
          height: 498,
          padding: 8,
          borderRadius: 24,
          background: "rgba(247,247,245,.72)",
          border: "2px solid rgba(255,255,255,.68)",
          boxShadow: "0 28px 70px rgba(50,64,75,.22)",
        }}
      >
        <img
          src={portraitSource}
          alt="Алина Насретдинова"
          width={344}
          height={482}
          style={{
            width: 344,
            height: 482,
            objectFit: "cover",
            borderRadius: 16,
          }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Unbounded",
          data: unboundedFont,
          weight: 900,
          style: "normal",
        },
        {
          name: "Manrope",
          data: manropeFont,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
