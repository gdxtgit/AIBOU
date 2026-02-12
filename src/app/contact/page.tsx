import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | AIトレーナーAIBOU",
  description: "AIトレーナーAIBOUへの面談申込み・お問い合わせページです。",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm tracking-widest text-secondary mb-4">
            CONTACT
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            無料面談のお申し込み
          </h1>
          <p className="text-secondary mt-6 leading-relaxed">
            AIトレーナーAIBOUに興味をお持ちいただきありがとうございます。
            <br />
            以下のフォームより、無料面談をお申し込みください。
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border border-border rounded-lg p-8 md:p-12 bg-bg-subtle">
            <h2 className="text-xl font-bold mb-2">面談について</h2>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              面談では、以下の内容をお伺いします。
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "現在の業務内容とお役職",
                "AIツールの利用状況",
                "AI活用における課題や目標",
                "トレーニングに期待すること",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-secondary flex gap-3 leading-relaxed"
                >
                  <span className="text-primary shrink-0 mt-0.5">--</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <a
                href="https://forms.gle/YOUR_FORM_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center px-8 py-4 rounded text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Googleフォームで面談を申し込む
              </a>
              <p className="text-xs text-secondary text-center">
                外部サイト（Google Forms）に移動します
              </p>
            </div>
          </div>

          <div className="mt-12 border border-border rounded-lg p-8 md:p-12">
            <h2 className="text-xl font-bold mb-2">面談の流れ</h2>
            <div className="mt-6 space-y-6">
              {[
                {
                  step: "1",
                  title: "お申し込み",
                  description:
                    "上記フォームよりお申し込みください。1営業日以内にご連絡いたします。",
                },
                {
                  step: "2",
                  title: "日程調整",
                  description:
                    "ご都合の良い日時をお伺いし、オンライン面談の日程を確定します。",
                },
                {
                  step: "3",
                  title: "無料面談（30分）",
                  description:
                    "業務内容やAI活用の状況をヒアリングし、改善の方向性をご提案します。",
                },
                {
                  step: "4",
                  title: "ご提案",
                  description:
                    "面談の内容をもとに、最適なトレーニングプランをご提案します。",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-full border border-border text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-sm text-secondary mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
