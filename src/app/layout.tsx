import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AIトレーナーAIBOU | AIを「使う」から、AIと「働く」へ。",
  description:
    "AIをライバルではなく最強の相棒にする。AIとの役割分担を設計し、仕事の質と速度を変えるパーソナル型AIトレーニングサービス。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
