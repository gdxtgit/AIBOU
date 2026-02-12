import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コンセプト | AIトレーナーAIBOU",
  description:
    "AIをライバルではなく相棒にする。AIトレーナーAIBOUのコンセプトと思想を紹介します。",
};

export default function ConceptPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-widest text-secondary mb-4">
            CONCEPT
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            AIをライバルではなく、
            <br />
            最強の相棒にする。
          </h1>
          <p className="text-secondary mt-6 leading-relaxed max-w-xl">
            AI時代に求められるのは、AIを恐れることでも、
            盲目的に頼ることでもない。
            AIと正しく役割を分担し、共に働く力だ。
          </p>
        </div>
      </section>

      {/* Misconception */}
      <section className="py-24 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            AI時代の3つの誤解
          </h2>
          <div className="mt-12 space-y-10">
            {[
              {
                myth: "「AIが仕事を奪う」",
                truth:
                  "AIは仕事を奪うのではなく、仕事の中身を変える。ルーティンはAIに移り、人間はより高度な判断と創造に集中できるようになる。",
              },
              {
                myth: "「プロンプトさえ覚えれば使いこなせる」",
                truth:
                  "プロンプトは手段でしかない。本質は、業務の構造を理解し、AIにどの役割を担わせるかを設計する力にある。",
              },
              {
                myth: "「AIは万能だから任せればいい」",
                truth:
                  "AIには得意・不得意がある。AIの特性を理解し、適切な範囲で使うことが成果につながる。",
              },
            ].map((item) => (
              <div key={item.myth}>
                <h3 className="font-bold text-base text-accent">
                  {item.myth}
                </h3>
                <p className="text-sm text-secondary mt-3 leading-relaxed">
                  {item.truth}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Value */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            人間の価値を再定義する
          </h2>
          <p className="text-secondary mt-4 leading-relaxed max-w-xl">
            AIが進化するほど、人間の存在意義は薄れるのではなく、
            むしろ明確になる。人間にしかできないことがある。
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "共感と信頼構築",
                description:
                  "人の気持ちを理解し、寄り添い、信頼関係を築く。AIにはできない、人間の根源的な力。",
              },
              {
                title: "意思決定とリーダーシップ",
                description:
                  "不確実な状況で方向を定め、チームを導く。責任を取る覚悟を持つのは人間だけ。",
              },
              {
                title: "ゼロイチの創造",
                description:
                  "データの延長線上にない、まったく新しい価値を構想する。これは人間の想像力の領域。",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-base">{item.title}</h3>
                <p className="text-sm text-secondary mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-24 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            「相棒」という考え方
          </h2>
          <div className="mt-8 space-y-6 text-secondary leading-relaxed">
            <p>
              AIは上司でも部下でもない。ライバルでもない。
              <strong className="text-primary">相棒</strong>だ。
            </p>
            <p>
              相棒とは、互いの強みを理解し、弱みを補い合うパートナーのこと。
              人間が得意なことは人間が。AIが得意なことはAIが。
              この役割分担が正しく設計されたとき、仕事の質と速度は劇的に変わる。
            </p>
            <p>
              AIBOUという名前には、
              AIと人間が対等なパートナーとして共に働く未来への想いが込められている。
            </p>
          </div>
        </div>
      </section>

      {/* Why Trainer */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            なぜ「トレーナー」が必要なのか
          </h2>
          <div className="mt-8 space-y-6 text-secondary leading-relaxed">
            <p>
              スポーツ選手にトレーナーがいるように、
              AIを最大限に活用するにもトレーナーが必要だ。
            </p>
            <p>
              独学でAIを触っても、自己流には限界がある。
              業務の特性を踏まえた上で、最適なAI活用の型を見つけるには、
              専門的な知見と伴走が欠かせない。
            </p>
            <p>
              AIトレーナーAIBOUは、あなたの仕事に深く入り込み、
              AIとの最適な共働き方を一緒に設計する。
              講座ではなく、実践的なトレーニング。
              あなた専用のAI活用プランを、共に作り上げる。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-bg-subtle">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            AIとの新しい働き方を、
            <br />
            一緒に始めませんか？
          </h2>
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
