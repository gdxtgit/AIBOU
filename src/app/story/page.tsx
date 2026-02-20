import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIBOUの原点｜人が壊れない働き方をつくる",
  description:
    "なぜ「AIトレーナー」という仕事を始めたのか。広告代理店で100人以上が壊れていく現場を見た創業者の原体験と、AIBOUの思想。",
};

export default function StoryPage() {
  return (
    <>
      {/* ========== Sticky Nav ========== */}
      <header className="sticky top-0 z-30 bg-gray-100/70 backdrop-blur-md border-b border-gray-900/10">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between py-3.5 gap-4 flex-wrap">
          <Link href="/" className="flex items-center gap-3 font-extrabold tracking-wide">
            <span className="w-[34px] h-[34px] rounded-xl grid place-items-center bg-gray-900 text-white text-xs font-black">
              AI
            </span>
            <span>
              AIトレーナー <span className="font-black">AIBOU</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-gray-900/75 font-semibold">
            <Link href="/" className="hover:text-gray-900">サービス</Link>
            <a href="#manifesto" className="hover:text-gray-900">宣言</a>
            <a href="#story" className="hover:text-gray-900">原体験</a>
            <a href="#vision" className="hover:text-gray-900">未来像</a>
          </nav>
          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gray-800 text-white font-bold text-sm tracking-wide hover:-translate-y-px hover:bg-gray-700 transition-all"
            >
              無料の相棒診断（30分）
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ========== HERO: MANIFESTO ========== */}
        <section
          id="manifesto"
          className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-28 md:py-36"
        >
          <div className="w-full max-w-[1280px] mx-auto px-6">
            <div className="max-w-[820px] mx-auto text-center">
              <span className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/10 border border-white/12 text-white/90 font-semibold text-sm backdrop-blur-sm">
                Manifesto
              </span>
              <h1 className="mt-6 text-[clamp(28px,3.6vw,56px)] font-black leading-[1.2] tracking-tight">
                人が壊れない働き方を、
                <br />
                当たり前にする。
              </h1>
              <p className="mt-8 text-[clamp(15px,1.15vw,18px)] text-white/75 leading-[2] max-w-[640px] mx-auto">
                知的労働の多くの問題は、能力不足ではなく
                <br />
                「整理されないまま仕事が始まる構造」にある。
                <br />
                <br />
                AIBOUは、人に依頼する前にAIを介在させることで
                <br />
                思考の前処理を標準化し、人間同士の摩擦と消耗を減らす。
              </p>
            </div>
          </div>
        </section>

        {/* ========== VALUES: 5つの宣言 ========== */}
        <section className="bg-gray-950 text-white py-20 md:py-24 border-t border-white/5">
          <div className="w-full max-w-[1280px] mx-auto px-6">
            <div className="max-w-[820px] mx-auto">
              <h2 className="text-center text-[clamp(20px,2vw,30px)] font-bold mb-14 tracking-tight">
                AIBOUが掲げる5つの指針
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "頑張りではなく、設計で解決する",
                    desc: "根性論で乗り越えるのではなく、仕組みで成果を出す。",
                  },
                  {
                    num: "02",
                    title: "人を消耗させない",
                    desc: "速さではなく、持続可能性を重視する。",
                  },
                  {
                    num: "03",
                    title: "まず整理する",
                    desc: "整理していない情報を渡すのはダサい。それが文化の出発点。",
                  },
                  {
                    num: "04",
                    title: "AIを遠慮なく使う",
                    desc: "AIは作業ツールではなく、思考整理装置。相棒として使い倒す。",
                  },
                  {
                    num: "05",
                    title: "人に感謝される働き方をする",
                    desc: "忙しさではなく、周囲の快適性と持続可能な成果で評価される。",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/8"
                  >
                    <span className="shrink-0 w-10 h-10 rounded-xl grid place-items-center bg-white/10 text-white font-black text-sm">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="mt-1.5 text-white/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== STORY: 原体験 ========== */}
        <section id="story" className="py-20 md:py-28">
          <div className="w-full max-w-[1280px] mx-auto px-6">
            <div className="max-w-[820px] mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm">
                  Story
                </span>
                <h2 className="mt-4 text-[clamp(22px,2.4vw,36px)] font-bold tracking-tight">
                  なぜ、AIBOUを始めたのか
                </h2>
              </div>

              {/* Chapter 1 */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-8 rounded-lg grid place-items-center bg-gray-900 text-white text-xs font-black">
                    01
                  </span>
                  <h3 className="text-xl font-bold">目撃した現実</h3>
                </div>
                <div className="pl-11 space-y-4 text-gray-700 leading-[1.9]">
                  <p>
                    大手広告代理店で、運用型広告とデータ分析に従事していた頃。
                    <br />
                    現場で多くの同僚が心身を病んでいく姿を目の当たりにしました。
                  </p>
                  <p>
                    その数は、<strong className="text-gray-900">100人以上</strong>。
                  </p>
                  <p>
                    壊れていった人たちには、共通点がありました。
                    <br />
                    要件が曖昧で、目的も不明確で、期待値も不透明。
                    <br />
                    にもかかわらず、責任感で全部背負ってしまう。
                    <br />
                    そして、構造的なミスが個人の責任に転化される。
                  </p>
                  <p>
                    彼らは、能力が足りなかったのではありません。
                    <br />
                    <strong className="text-gray-900">
                      整理されていない仕事の責任を、個人が背負わされる構造
                    </strong>
                    の中にいただけです。
                  </p>
                </div>
              </div>

              {/* Blockquote */}
              <div className="my-16 py-10 px-8 md:px-12 rounded-2xl bg-gray-900 text-white text-center">
                <p className="text-[clamp(16px,1.6vw,22px)] font-bold leading-[1.7]">
                  思考しないまま仕事を始めること自体が、
                  <br />
                  最大の無駄であり、最大の暴力である。
                </p>
                <p className="mt-4 text-white/50 text-sm">
                  &mdash;&mdash; AIBOUの思想的仮説
                </p>
              </div>

              {/* Chapter 2 */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-8 rounded-lg grid place-items-center bg-gray-900 text-white text-xs font-black">
                    02
                  </span>
                  <h3 className="text-xl font-bold">
                    AIとの出会いが、認識を変えた
                  </h3>
                </div>
                <div className="pl-11 space-y-4 text-gray-700 leading-[1.9]">
                  <p>
                    2021年以降、AIを業務に取り入れ始めました。
                    <br />
                    最初は効率化ツール、作業短縮ツールだと思っていました。
                  </p>
                  <p>しかし使い込むうちに、認識が根本から変わりました。</p>
                  <p className="text-gray-900 font-bold text-lg">
                    AIは作業ツールではなく、思考整理装置だった。
                  </p>
                  <p>
                    要件の言語化。構造整理。仮説生成。論点分解。
                    <br />
                    これまで人が一人で抱えていた「思考の前処理」を、AIが引き受けられる。
                  </p>
                  <p>
                    つまり、
                    <strong className="text-gray-900">
                      知的労働の多くは、能力ではなく設計の問題
                    </strong>
                    であり、
                    <br />
                    人が壊れる働き方は、
                    <strong className="text-gray-900">構造的に回避可能</strong>
                    だということ。
                  </p>
                </div>
              </div>

              {/* Chapter 3 */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-8 rounded-lg grid place-items-center bg-gray-900 text-white text-xs font-black">
                    03
                  </span>
                  <h3 className="text-xl font-bold">独立と実証</h3>
                </div>
                <div className="pl-11 space-y-4 text-gray-700 leading-[1.9]">
                  <p>
                    2025年、独立。
                    <br />
                    同期の会社にジョインし、AI協働体制を一から構築しました。
                  </p>
                </div>
                {/* Evidence Card */}
                <div className="mt-8 ml-11 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                    <p className="text-3xl font-black text-gray-900">3倍以上</p>
                    <p className="mt-2 text-sm text-gray-500 font-medium">
                      売上・利益の伸長
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                    <p className="text-3xl font-black text-gray-900">2名</p>
                    <p className="mt-2 text-sm text-gray-500 font-medium">社員数</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                    <p className="text-3xl font-black text-gray-900">1.5億円</p>
                    <p className="mt-2 text-sm text-gray-500 font-medium">年商規模</p>
                  </div>
                </div>
                <div className="pl-11 mt-6">
                  <p className="text-gray-700 leading-[1.9]">
                    これが証明したのは、シンプルな事実でした。
                  </p>
                  <p className="mt-3 text-gray-900 font-bold text-lg">
                    生産性は人数ではなく、設計で決まる。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROBLEM → SOLUTION ========== */}
        <section className="py-20 md:py-24 bg-gray-50 border-t border-gray-200">
          <div className="w-full max-w-[1280px] mx-auto px-6">
            <div className="max-w-[820px] mx-auto">
              <div className="text-center mb-14">
                <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm">
                  Core Problem
                </span>
                <h2 className="mt-4 text-[clamp(22px,2.4vw,36px)] font-bold tracking-tight">
                  多くの現場で起きていること
                </h2>
              </div>

              {/* Current Flow */}
              <div className="p-8 rounded-2xl bg-white border border-gray-200 mb-8">
                <h3 className="font-bold text-lg mb-6 text-gray-500">
                  現在の知的労働の典型フロー
                </h3>
                <div className="space-y-4">
                  {[
                    "思考未整理のまま依頼が来る",
                    "曖昧なまま実行が始まる",
                    "手戻りが増える",
                    "最終責任だけ個人に集中する",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="shrink-0 w-7 h-7 rounded-full grid place-items-center bg-gray-200 text-gray-500 text-xs font-bold">
                        {i + 1}
                      </span>
                      <p className="text-gray-600 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-400 font-medium">
                  → 構造的に人が消耗する設計
                </p>
              </div>

              {/* AIBOU Flow */}
              <div className="p-8 rounded-2xl bg-gray-900 text-white">
                <h3 className="font-bold text-lg mb-6 text-white/60">
                  AIBOUが提案する新しいフロー
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      bold: "まずAIに無茶振りする",
                      sub: "（思考の壁打ち）",
                    },
                    {
                      bold: "AIが要件を整理する",
                      sub: "（思考の前処理）",
                    },
                    {
                      bold: "人間が判断・実行する",
                      sub: "（本来の仕事に集中）",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="shrink-0 w-7 h-7 rounded-full grid place-items-center bg-white/15 text-white text-xs font-bold">
                        {i + 1}
                      </span>
                      <p className="text-white/90 leading-relaxed">
                        <strong>{item.bold}</strong>
                        {item.sub}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-white/40 font-medium">
                  → 人に依頼する前に、AIを介在させる
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== VISION: 未来像 ========== */}
        <section id="vision" className="py-20 md:py-28">
          <div className="w-full max-w-[1280px] mx-auto px-6">
            <div className="max-w-[820px] mx-auto">
              <div className="text-center mb-14">
                <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-500 font-semibold text-sm">
                  Vision
                </span>
                <h2 className="mt-4 text-[clamp(22px,2.4vw,36px)] font-bold tracking-tight">
                  10年後の「当たり前」をつくる
                </h2>
                <p className="mt-4 text-gray-500 leading-relaxed max-w-[540px] mx-auto">
                  AIBOUが目指すのは、仕事の始まり方が変わった世界。
                  <br />
                  それは特別な未来ではなく、自然な進化です。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    title: "会議が変わる",
                    desc: "詰め文化・属人責任がなくなる。全員がAIへの事前投下を前提に、整理済みの議論だけで進む。心理的安全性が常態化する。",
                  },
                  {
                    title: "業務フローが変わる",
                    desc: "AIに無茶振り → AIが要件整理 → 人間が実行。このフローが標準になり、手戻りと消耗が構造的に減る。",
                  },
                  {
                    title: "新人育成が変わる",
                    desc: "まずAIに壁打ち。思考整理の習慣が初期装備になり、属人的なOJT依存から脱却する。",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-7 rounded-2xl bg-gray-50 border border-gray-200"
                  >
                    <h3 className="font-bold text-base mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-[1.8]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== CLOSING STATEMENT ========== */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
          <div className="w-full max-w-[1280px] mx-auto px-6">
            <div className="max-w-[820px] mx-auto text-center">
              <h2 className="text-[clamp(20px,2.4vw,34px)] font-bold leading-[1.6] tracking-tight">
                AIBOUは、AI推進企業ではありません。
                <br />
                <span className="text-white/50 text-[0.85em]">
                  人が壊れない働き方を実現するために、
                </span>
                <br />
                仕事の始まり方を変える事業です。
              </h2>

              <div className="mt-12 py-8 px-8 rounded-2xl bg-white/5 border border-white/10 inline-block">
                <p className="text-white/60 text-sm font-medium mb-2">
                  AIBOUの最終定義
                </p>
                <p className="text-[clamp(16px,1.4vw,20px)] font-bold leading-[1.7]">
                  思考を整理してから仕事を始める文化を、
                  <br />
                  実装する存在。
                </p>
              </div>

              <div className="mt-14 flex flex-wrap justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-gray-300 text-gray-900 font-bold text-sm shadow-lg hover:-translate-y-px transition-all"
                >
                  無料の相棒診断（30分）
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/10 border border-white/15 text-white font-bold text-sm hover:-translate-y-px transition-all"
                >
                  サービスを見る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== Footer ========== */}
      <footer className="py-9 px-6 text-gray-900/70 font-semibold">
        <div className="w-full max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-[10px] grid place-items-center bg-gray-900 text-white text-[10px] font-black">
              AI
            </span>
            <span>
              AIトレーナー <strong>AIBOU</strong>
            </span>
          </div>
          <div className="text-gray-500">&copy; 2025 AIトレーナーAIBOU</div>
        </div>
      </footer>
    </>
  );
}
