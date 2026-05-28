import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#D9D9D9",
          color: "#32404B",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -90,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 260,
            background: "#A5C8E2"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -110,
            bottom: -170,
            width: 560,
            height: 560,
            borderRadius: 280,
            background: "#FF5A4B",
            opacity: 0.86
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
            padding: "82px 92px",
            maxWidth: 880
          }}
        >
          <div style={{ fontSize: 34, color: "#FF5A4B", fontWeight: 700 }}>
            Алина Насретдинова / @animygirll
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.04, fontWeight: 800 }}>
            SMM: стратегия, Reels и органический рост
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.35, color: "#32404B" }}>
            Кейсы до 3,5 млн просмотров, 1 млн охвата в месяц и полный цикл
            контент-продакшена.
          </div>
        </div>
      </div>
    ),
    size
  );
}
