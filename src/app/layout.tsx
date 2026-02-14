import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIトレーナーAIBOU｜AIを「使う」から、AIと「働く」へ。",
  description:
    "AIトレーナーAIBOUは、AIの使い方ではなく「相棒として働く」ための役割分担・思考分業・運用設計を整えるパーソナルAIトレーニングです。初回30分の無料相棒診断から。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
