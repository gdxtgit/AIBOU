import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="text-sm tracking-widest text-secondary mb-4">
            AIトレーナー
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            AIを相棒とする時代へ
          </h1>
          <p className="text-lg md:text-xl text-secondary mt-6 leading-relaxed">
            AIを「使う」から、AIと「働く」へ。
          </p>
          <p className="text-sm md:text-base text-secondary mt-4 max-w-xl mx-auto leading-relaxed">
            AIは便利なツールではなく、最強の相棒になる。
            <br />
            しかし、多くの人はまだその活かし方を知らない。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded text-sm font-medium hover:opacity-80 transition-opacity"
            >
              無料面談を申し込む
            </Link>
            <Link
              href="/concept"
              className="border border-border text-primary px-8 py-3 rounded text-sm font-medium hover:bg-bg-subtle transition-colors"
            >
              コンセプトを読む
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
            AIを導入したのに、
            <br />
            成果が出ていないと感じていませんか？
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "使い方がわからない",
                description:
                  "ChatGPTを触ったことはあるが、実務でどう活用すればいいか見えない。",
              },
              {
                title: "自己流の限界",
                description:
                  "プロンプトを工夫しても、思うような結果が得られない。体系的なアプローチがない。",
              },
              {
                title: "仕事が変わらない",
                description:
                  "AIを使っているはずなのに、仕事のやり方も成果も大きくは変わっていない。",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-bold text-base">{item.title}</h3>
                <p className="text-sm text-secondary mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
            AIトレーナーAIBOUが解決します
          </h2>
          <p className="text-secondary text-center mt-4 text-sm">
            AI講座ではありません。プロンプト講座でもありません。
            <br />
            あなたの業務に合わせた、AIとの「役割分担」を設計します。
          </p>
          <div className="mt-12 space-y-8">
            {[
              {
                num: "01",
                title: "AIとの役割分担設計",
                description:
                  "あなたの業務を分析し、AIに任せるべき領域と、人間が集中すべき領域を明確にします。",
              },
              {
                num: "02",
                title: "思考プロセスの整理",
                description:
                  "AIに的確な指示を出すために必要な、思考の構造化をサポートします。",
              },
              {
                num: "03",
                title: "実務での伴走",
                description:
                  "座学ではなく、あなたの実際の仕事の中でAI活用を実践し、定着させます。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-6 items-start border-b border-border pb-8"
              >
                <span className="text-3xl font-bold text-border shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-base">{item.title}</h3>
                  <p className="text-sm text-secondary mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Value */}
      <section className="py-24 px-6 bg-bg-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            人間にしかできない価値がある
          </h2>
          <p className="text-secondary mt-4 text-sm max-w-xl mx-auto leading-relaxed">
            AIが進化するほど、人間の仕事はなくなるのではなく、
            人間にしかできない仕事に集中できるようになる。
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "人の気持ちに寄り添う",
                description:
                  "共感し、信頼を築き、人を動かす。これはAIには代替できない。",
              },
              {
                title: "リーダーシップを発揮する",
                description:
                  "方向を示し、チームを導き、意思決定を下す力は人間の領域。",
              },
              {
                title: "0から1を生み出す",
                description:
                  "既存の延長ではない、まったく新しい価値の創出は人間の仕事。",
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

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            まずは無料面談で、
            <br />
            あなたのAI活用を診断しませんか？
          </h2>
          <p className="text-sm text-secondary mt-4 leading-relaxed">
            現在の業務とAI活用の状況をヒアリングし、
            <br />
            改善の方向性をご提案します。
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
