import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービス | AIトレーナーAIBOU",
  description:
    "AIトレーナーAIBOUのトレーニング内容、流れ、対象者について紹介します。",
};

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-widest text-secondary mb-4">
            SERVICE
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            あなた専用の
            <br />
            AIトレーニング
          </h1>
          <p className="text-secondary mt-6 leading-relaxed max-w-xl">
            一般的なAI講座やプロンプト教室とは異なり、
            あなたの業務に合わせたパーソナル型のトレーニングを提供します。
          </p>
        </div>
      </section>

      {/* Flow */}
      <section className="py-24 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            トレーニングの流れ
          </h2>
          <div className="mt-12 space-y-0">
            {[
              {
                step: "STEP 1",
                title: "ヒアリング",
                description:
                  "現在の業務内容、AI活用の状況、課題を丁寧にヒアリング。あなたの仕事の全体像を把握します。",
              },
              {
                step: "STEP 2",
                title: "役割分担設計",
                description:
                  "業務を分解し、AIに任せるべき領域と人間が担うべき領域を明確に設計。最適な分担プランを作成します。",
              },
              {
                step: "STEP 3",
                title: "実践トレーニング",
                description:
                  "設計した役割分担をもとに、実際の業務でAI活用を実践。座学ではなく、リアルな仕事の中でスキルを身につけます。",
              },
              {
                step: "STEP 4",
                title: "振り返りと改善",
                description:
                  "定期的に成果を振り返り、役割分担やアプローチを改善。継続的にAI活用の精度を高めていきます。",
              },
            ].map((item, index) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  {index < 3 && (
                    <div className="w-px h-full bg-border min-h-[40px]" />
                  )}
                </div>
                <div className="pb-10">
                  <p className="text-xs tracking-widest text-secondary">
                    {item.step}
                  </p>
                  <h3 className="font-bold text-base mt-1">{item.title}</h3>
                  <p className="text-sm text-secondary mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            提供内容
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AIとの役割分担設計",
                description:
                  "業務プロセスを分析し、AIに委ねる領域と人間が注力すべき領域を明確にします。",
              },
              {
                title: "思考プロセスの整理",
                description:
                  "AIへの指示を最適化するために、あなた自身の思考の流れを構造化するサポートを行います。",
              },
              {
                title: "実務での伴走支援",
                description:
                  "教科書的な知識ではなく、あなたのリアルな業務の中でAI活用を実践し、定着させます。",
              },
              {
                title: "定期レビューと改善提案",
                description:
                  "AI活用の成果を定量・定性の両面で振り返り、次のステップへの改善提案を行います。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-border rounded-lg p-6"
              >
                <h3 className="font-bold text-base">{item.title}</h3>
                <p className="text-sm text-secondary mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target */}
      <section className="py-24 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            対象者
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-base mb-4">
                こんな方に向いています
              </h3>
              <ul className="space-y-3">
                {[
                  "AIを触ったことはあるが、体系的に使えていない",
                  "自己流のAI活用に限界を感じている",
                  "業務効率を上げたいが、何から始めるべきかわからない",
                  "AI時代に自分の価値をどう高めるか考えている",
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
              <p className="text-xs text-secondary mt-6">
                想定職種: コンサルタント、PM、事業開発、ディレクター、エンジニア
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base mb-4">
                このサービスが合わない方
              </h3>
              <ul className="space-y-3">
                {[
                  "AIの基礎を一から学びたい初心者の方",
                  "副業ノウハウとしてAIを学びたい方",
                  "プロンプトのテンプレートだけが欲しい方",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm text-secondary flex gap-3 leading-relaxed"
                  >
                    <span className="shrink-0 mt-0.5">--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            まずは無料面談から
          </h2>
          <p className="text-sm text-secondary mt-4 leading-relaxed">
            あなたの業務内容とAI活用の状況をヒアリングし、
            <br />
            最適なトレーニングプランをご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-primary text-white px-10 py-4 rounded text-sm font-medium hover:opacity-80 transition-opacity"
          >
            無料面談を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
