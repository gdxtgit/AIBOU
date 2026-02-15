import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIトレーナーAIBOU｜AIを「使う」から、AIと「働く」へ。",
  description:
    "AIトレーナーAIBOUは、AIの使い方ではなく「相棒として働く」ための役割分担・思考分業・運用設計を整えるパーソナルAIトレーニングです。初回30分の無料相棒診断から。",
  openGraph: {
    title: "AIトレーナーAIBOU｜AIを「使う」から、AIと「働く」へ。",
    description:
      "AIの使い方ではなく「相棒として働く」ための役割分担・思考分業・運用設計を整えるパーソナルAIトレーニング。初回30分の無料相棒診断から。",
    type: "website",
    locale: "ja_JP",
    siteName: "AIトレーナーAIBOU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIトレーナーAIBOU｜AIを「使う」から、AIと「働く」へ。",
    description:
      "AIの使い方ではなく「相棒として働く」ための役割分担・思考分業・運用設計を整えるパーソナルAIトレーニング。",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AIに詳しくなくても大丈夫ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "大丈夫です。AIBOUは知識の詰め込みではなく、あなたの仕事に合う形に「整える」サポートです。いまの状態から一緒に整理します。",
      },
    },
    {
      "@type": "Question",
      name: "どのAIツールを使いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "特定ツールの推しではなく、目的に合わせて使い分けます。すでに使っているツールがあれば、それを前提に設計します。",
      },
    },
    {
      "@type": "Question",
      name: "月1回で本当に変わりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "月1回は「設計と確認」。間の期間が「実装」です。非同期レビューで支える前提なので、無理なく変化を積み上げられます。",
      },
    },
    {
      "@type": "Question",
      name: "AI講座やプロンプト講座と何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AIBOUは「使い方」を増やすのではなく、あなたの仕事の中でAIと人の役割を分け、自然に使える状態に整えます。フォーム矯正に近い支援です。",
      },
    },
    {
      "@type": "Question",
      name: "無料診断では何をしますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "現状の困りごと、理想の状態、AIとの役割分担を整理し、次に何を整えると良いかを明確にします。無理な勧誘はしません。",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
