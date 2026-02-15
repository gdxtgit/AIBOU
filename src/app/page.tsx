import { siteConfig } from "@/config";
import { MobileMenu } from "@/components/MobileMenu";

/* ---------- data ---------- */

const problems = [
  {
    num: "01",
    title: "AIを触っているのに、\n仕事が楽にならない",
    desc: "便利そうで始めたのに、結局いつも通り。少しだけ虚しくなることがある。",
  },
  {
    num: "02",
    title: "情報が多すぎて、\n正解が分からない",
    desc: "おすすめ手法はたくさんあるのに、どれが自分に合うか分からず手が止まる。",
  },
  {
    num: "03",
    title: "この使い方で合っているか、\n少し不安",
    desc: "「使える人」と「使えない人」の差が見え始めて、静かに焦る。",
  },
] as const;

const reasons = [
  {
    num: "01",
    title: "講座ではなく、フォームを整える",
    desc: "つまずきの多くは「プロンプトの知識不足」ではありません。AIに任せるところ／人が考えるところの分け方が曖昧なまま、自己流で続けてしまうこと。AIBOUは、その\u201C分け方\u201Dを一緒に整えます。",
  },
  {
    num: "02",
    title: "あなたの仕事の延長線で進める",
    desc: "新しいことを増やすのではなく、いまの仕事の中で「ここはAIに任せられる」を見つけます。だから、無理なく続きます。\u201C気づいたら自然に使えている\u201D状態を目指します。",
  },
  {
    num: "03",
    title: "人にしかできない仕事に集中できる",
    desc: "AI時代に価値が高まるのは、寄り添うこと／まとめること／0→1を生むこと。AIを相棒にできると、考える余裕が生まれ、あなたらしい仕事に時間を使えるようになります。",
  },
] as const;

const steps = [
  {
    num: "1",
    title: "無料の相棒診断（30分）",
    desc: "いま困っていること／理想の状態／現状の使い方を整理します。無理な勧誘はしません。",
  },
  {
    num: "2",
    title: "月1回セッション（60分）",
    desc: "実務を題材に、AIとの役割分担とワークフローを整えます。",
  },
  {
    num: "3",
    title: "非同期レビュー（随時）",
    desc: "間の期間の実装を支援。迷いを減らし、続けやすい形にします。",
  },
] as const;

const plans = [
  {
    id: "letter",
    name: "レターサブスク",
    sub: "実証ログ／成功モデルNo.の配信（note想定）",
    price: "¥980",
    unit: "/ 月（想定）",
    features: [
      "週1回：成功モデル No. 配信",
      "実証ログの要約＋再現ポイント",
      "インタビュー・振り返り",
    ],
    cta: "レターを受け取る",
    recommended: false,
  },
  {
    id: "trainer",
    name: "トレーナープラン",
    sub: "月1セッション＋非同期レビュー（実務伴走）",
    price: "¥100,000",
    unit: "/ 月",
    features: [
      "月1回（60分）パーソナル",
      "非同期レビュー（随時）",
      "役割分担・思考分業の設計",
      "実案件レビュー／テンプレ整備",
    ],
    cta: "無料の相棒診断から",
    recommended: true,
  },
  {
    id: "spot",
    name: "スポット相談",
    sub: "単発で整えたい方向け（初回のみ）",
    price: "¥30,000",
    unit: "/ 回（想定）",
    features: [
      "60分の壁打ち・整理",
      "優先度・やることの明確化",
      "次の1週間の運用設計",
    ],
    cta: "相談してみる",
    recommended: false,
  },
] as const;

const voices = [
  {
    name: "山田さん（仮）",
    attr: "30代・企画",
    quote:
      "何をAIに任せていいか分からなかったのが、整理されました。迷う時間が減って、気持ちが楽になりました。",
  },
  {
    name: "佐藤さん（仮）",
    attr: "40代・マーケ",
    quote:
      "使い方を増やすより、仕事に合わせて\u201C整える\u201Dという発想が新鮮でした。自然に使えるようになってきました。",
  },
  {
    name: "鈴木さん（仮）",
    attr: "30代・PM",
    quote:
      "AIに任せすぎて思考が浅くなる不安がありましたが、役割分担を整えたら逆に考える余裕が増えました。",
  },
] as const;

const faqs = [
  {
    q: "AIに詳しくなくても大丈夫ですか？",
    a: "大丈夫です。AIBOUは知識の詰め込みではなく、あなたの仕事に合う形に「整える」サポートです。いまの状態から一緒に整理します。",
  },
  {
    q: "どのAIツールを使いますか？",
    a: "特定ツールの推しではなく、目的に合わせて使い分けます。すでに使っているツールがあれば、それを前提に設計します。",
  },
  {
    q: "月1回で本当に変わりますか？",
    a: "月1回は「設計と確認」。間の期間が「実装」です。非同期レビューで支える前提なので、無理なく変化を積み上げられます。",
  },
  {
    q: "AI講座やプロンプト講座と何が違いますか？",
    a: "AIBOUは「使い方」を増やすのではなく、あなたの仕事の中でAIと人の役割を分け、自然に使える状態に整えます。フォーム矯正に近い支援です。",
  },
  {
    q: "無料診断では何をしますか？",
    a: "現状の困りごと、理想の状態、AIとの役割分担を整理し、次に何を整えると良いかを明確にします。無理な勧誘はしません。",
  },
] as const;

/* ---------- helpers ---------- */

const sectionLabel =
  "inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gray-900/6 border border-gray-900/12 text-gray-900/80 font-semibold text-sm tracking-wide";

const cardBase =
  "bg-white border border-gray-900/10 rounded-[20px] shadow-[0_8px_30px_rgba(10,10,30,0.07)] p-6";

const ctaPrimary =
  "inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gray-800 text-white font-bold text-sm tracking-wide shadow-lg hover:-translate-y-0.5 hover:bg-gray-700 active:translate-y-0 transition-all";

const ctaGhost =
  "inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 hover:-translate-y-0.5 hover:border-white/35 transition-all";

const numBadge =
  "w-[46px] h-[46px] rounded-[14px] grid place-items-center bg-gray-900/8 border border-gray-900/12 text-gray-700 font-extrabold text-sm mb-3";

/* ---------- Page ---------- */

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ========== Sticky Nav ========== */}
      <header
        className="sticky top-0 z-30 bg-gray-100/80 backdrop-blur-md border-b border-gray-900/8"
        role="banner"
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between py-3 gap-4">
          <a
            href="#top"
            className="flex items-center gap-3 font-extrabold tracking-wide"
            aria-label="AIトレーナーAIBOU トップへ"
          >
            <span className="w-[34px] h-[34px] rounded-xl grid place-items-center bg-gray-900 text-white text-xs font-black select-none">
              AI
            </span>
            <span>
              AIトレーナー <span className="font-black">AIBOU</span>
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-6 text-gray-900/70 font-semibold text-[15px]"
            aria-label="メインナビゲーション"
          >
            <a href="#problem" className="hover:text-gray-900 transition-colors">
              お悩み
            </a>
            <a href="#reasons" className="hover:text-gray-900 transition-colors">
              選ばれる理由
            </a>
            <a href="#service" className="hover:text-gray-900 transition-colors">
              サービス
            </a>
            <a href="#trainer" className="hover:text-gray-900 transition-colors">
              トレーナー
            </a>
            <a href="#plans" className="hover:text-gray-900 transition-colors">
              プラン
            </a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className={ctaPrimary}>
              無料の相棒診断（30分）
            </a>
          </div>

          <MobileMenu />
        </div>
      </header>

      <main id="top">
        {/* ========== Hero ========== */}
        <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 md:py-28">
          <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-12 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/10 border border-white/12 text-white/90 font-semibold text-sm backdrop-blur-sm">
                AIを「使う」から、AIと「働く」へ。
              </span>
              <h1 className="mt-4 text-[clamp(30px,3.2vw,52px)] font-bold leading-[1.25] tracking-tight">
                AIをライバルではなく、
                <br />
                &ldquo;最強の相棒&rdquo;に。
              </h1>
              <p className="mt-5 text-[clamp(16px,1.2vw,19px)] text-white/85 max-w-[60ch] leading-relaxed">
                AIが話題になっているのに、思ったほど仕事が楽にならない。
                <br />
                それは努力不足ではなく、
                <strong className="text-white">役割の分け方</strong>
                が整っていないだけかもしれません。
                <br />
                AIBOUは、あなたの仕事に合わせて
                <strong className="text-white">
                  AIとの働き方を一緒に整える
                </strong>
                パーソナルAIトレーニングです。
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={siteConfig.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-gray-900 font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  無料の相棒診断（30分）
                </a>
                <a href="#service" className={ctaGhost}>
                  サービスを見る
                </a>
              </div>

              {/* Key Points */}
              <div className="grid gap-3 mt-6">
                {[
                  {
                    title: "講座ではなく、フォームを整える",
                    desc: "自己流の「使い方」より、あなたに合う「役割分担」へ。",
                  },
                  {
                    title: "月1回でも、ちゃんと変わる",
                    desc: "間の期間は実装フェーズ。無理なく続く設計に。",
                  },
                ].map((pt) => (
                  <div
                    key={pt.title}
                    className="flex gap-3 items-start p-3.5 rounded-2xl bg-white/6 border border-white/10"
                  >
                    <span className="w-2.5 h-2.5 rounded-full mt-[7px] bg-gray-400 shadow-[0_0_0_6px_rgba(163,163,163,0.18)] shrink-0" />
                    <div>
                      <strong className="block text-white">{pt.title}</strong>
                      <span className="text-white/75 text-sm">{pt.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <aside className="bg-white/6 border border-white/12 rounded-[22px] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <h2 className="text-lg font-bold">
                まずは状況を整理するところから
              </h2>
              <p className="text-white/75 mt-2 text-sm">
                無理な勧誘はありません。
                <br />
                「今の使い方が合っているか」を一緒に整理します。
              </p>
              <div className="grid gap-3 mt-4">
                <div className="bg-white/8 border border-white/14 rounded-[18px] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <strong>無料の相棒診断</strong>
                    <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/18">
                      30分
                    </span>
                  </div>
                  <p className="mt-2 text-white/80 text-sm">
                    いま困っていること／理想の状態／AIとの役割分担を整理します。
                  </p>
                </div>
                <div className="bg-white/8 border border-white/14 rounded-[18px] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <strong>パーソナルセッション</strong>
                    <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/18">
                      月1回
                    </span>
                  </div>
                  <p className="mt-2 text-white/80 text-sm">
                    実務ベースで、あなたの「AIの使いどころ」を整えます。
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <a
                  href={siteConfig.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-5 py-3.5 rounded-full bg-white text-gray-900 font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  無料の相棒診断（30分）
                </a>
                <p className="mt-2.5 text-white/60 text-xs text-center">
                  ※ 現在は少人数でのご案内です
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ========== Problem ========== */}
        <section id="problem" className="py-24 px-6 scroll-mt-20">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <span className={sectionLabel}>Empathy</span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                最近、こんなふうに感じることはありませんか？
              </h2>
              <p className="text-gray-500 max-w-[76ch] mx-auto mt-2 leading-relaxed">
                AIは便利そう。でも、日々の仕事にうまくなじまない。
                <br />
                その&ldquo;言葉にしづらいモヤモヤ&rdquo;を、まず一緒にほどきます。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {problems.map((item) => (
                <div key={item.num} className={cardBase}>
                  <div className={numBadge}>{item.num}</div>
                  <h3 className="text-[clamp(17px,1.5vw,21px)] font-bold leading-snug whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Reasons ========== */}
        <section id="reasons" className="py-24 px-6 scroll-mt-20">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <span className={sectionLabel}>Trust</span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                AIBOUが大切にしていること
              </h2>
              <p className="text-gray-500 max-w-[78ch] mx-auto mt-2 leading-relaxed">
                AIの「使い方」を増やすのではなく、あなたの仕事に合う「働き方」を整えます。
                <br />
                無理なく続く形で、少しずつ&ldquo;相棒化&rdquo;していく設計です。
              </p>
            </div>
            <div className="grid gap-5">
              {reasons.map((item) => (
                <div
                  key={item.num}
                  className={`${cardBase} grid grid-cols-1 md:grid-cols-2 gap-6 items-center`}
                >
                  <div>
                    <div className={numBadge}>{item.num}</div>
                    <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="rounded-[20px] border border-gray-900/10 bg-gradient-to-br from-gray-900/5 to-gray-400/8 h-[240px] grid place-items-center text-gray-400 font-extrabold tracking-widest select-none">
                    PHOTO
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Service / Flow ========== */}
        <section id="service" className="py-24 px-6 scroll-mt-20">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <span className={sectionLabel}>Service</span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                トレーニングの流れ
              </h2>
              <p className="text-gray-500 max-w-[78ch] mx-auto mt-2 leading-relaxed">
                まずは状況を整理し、次に&ldquo;相棒として働ける形&rdquo;に整えていきます。
                <br />
                月1回のセッションを軸に、間の期間は実装フェーズとして支えます。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((item) => (
                <div key={item.num} className={`${cardBase} relative`}>
                  <div className={numBadge}>{item.num}</div>
                  <h3 className="text-[clamp(17px,1.5vw,21px)] font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                  {/* Connector arrow (hidden on last) */}
                  {item.num !== "3" && (
                    <span className="hidden md:block absolute top-1/2 -right-3 w-1.5 h-1.5 border-r-2 border-b-2 border-gray-400 rotate-[-45deg] -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Trainer ========== */}
        <section id="trainer" className="py-24 px-6 scroll-mt-20">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <span className={sectionLabel}>Trainer</span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                トレーナー紹介
              </h2>
              <p className="text-gray-500 max-w-[76ch] mx-auto mt-2 leading-relaxed">
                難しい言葉で置き去りにしません。あなたの仕事の現場に合わせて、一緒に整えていきます。
              </p>
            </div>

            {/* Trainer Card */}
            <div className="max-w-[720px] mx-auto">
              <div className={cardBase}>
                <div className="rounded-[18px] border border-gray-900/10 bg-gray-200 text-gray-500 grid place-items-center font-extrabold tracking-widest min-h-[200px] select-none">
                  PHOTO
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-[clamp(20px,1.8vw,26px)] font-bold">
                      {siteConfig.trainer.name}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gray-900/6 border border-gray-900/12 text-gray-700">
                      {siteConfig.trainer.role}
                    </span>
                  </div>
                  <p className="text-gray-500 mt-3 leading-relaxed">
                    {siteConfig.trainer.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {siteConfig.trainer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-gray-900/6 border border-gray-900/12 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a
                      href={siteConfig.trainer.sns.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-semibold"
                      aria-label="X (Twitter)"
                    >
                      X
                    </a>
                    <a
                      href={siteConfig.trainer.sns.note}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-semibold"
                      aria-label="note"
                    >
                      note
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== Founder Story ========== */}
        <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white">
          <div className="w-full max-w-[860px] mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/12 text-white/80 font-semibold text-sm tracking-wide">
              Story
            </span>
            <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
              AIBOUを始めた理由
            </h2>
            <blockquote className="mt-6 text-white/80 text-[clamp(15px,1.15vw,18px)] leading-[1.9] max-w-[60ch] mx-auto">
              {siteConfig.founder.story}
            </blockquote>
            <p className="mt-5 font-bold text-white/90">
              {siteConfig.founder.name}
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <a
                href={siteConfig.founder.sns.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-sm font-semibold"
                aria-label="X (Twitter)"
              >
                X
              </a>
              <a
                href={siteConfig.founder.sns.note}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-sm font-semibold"
                aria-label="note"
              >
                note
              </a>
            </div>
          </div>
        </section>

        {/* ========== Plans ========== */}
        <section id="plans" className="py-24 px-6 scroll-mt-20">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <span className={sectionLabel}>Plans</span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                料金プラン
              </h2>
              <p className="text-gray-500 max-w-[76ch] mx-auto mt-2 leading-relaxed">
                まずは&ldquo;整う感覚&rdquo;を体験してから。必要に応じて選べる入り口を用意しています。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative overflow-hidden ${
                    plan.recommended
                      ? "bg-white border-2 border-gray-700/30 rounded-[20px] shadow-[0_12px_36px_rgba(60,60,60,0.13)] p-6"
                      : cardBase
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute top-4 right-4 px-3 py-1.5 bg-gray-800 text-white rounded-full font-extrabold text-xs tracking-wide">
                      おすすめ
                    </span>
                  )}
                  <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm">{plan.sub}</p>
                  <div className="text-[34px] font-black tracking-tight mt-4">
                    {plan.price}
                  </div>
                  <div className="text-gray-500 font-bold text-sm">
                    {plan.unit}
                  </div>
                  <ul className="mt-4 pl-4 text-gray-700 list-disc space-y-2 text-sm">
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <a
                      href={siteConfig.reservationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-full px-5 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 ${
                        plan.recommended
                          ? "bg-gray-800 text-white hover:bg-gray-700 shadow-lg"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Testimonials ========== */}
        <section id="voice" className="py-24 px-6 scroll-mt-20">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <span className={sectionLabel}>Voice</span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                お客様の声
              </h2>
              <p className="text-gray-500 max-w-[76ch] mx-auto mt-2 leading-relaxed">
                数字の自慢ではなく、日常が少し軽くなる変化を大切にしています。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {voices.map((v, i) => (
                <div key={i} className={cardBase}>
                  <div className="rounded-[18px] border border-gray-900/10 bg-gray-200 text-gray-400 grid place-items-center font-extrabold tracking-widest min-h-[120px] select-none">
                    PHOTO
                  </div>
                  <div className="flex gap-0.5 text-gray-400 text-lg mt-3">
                    {"★★★★★"}
                  </div>
                  <p className="mt-2">
                    <strong>{v.name}</strong>
                    <span className="text-gray-500 ml-1">｜{v.attr}</span>
                  </p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    「{v.quote}」
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section id="faq" className="py-24 px-6 scroll-mt-20">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <span className={sectionLabel}>FAQ</span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                よくある質問
              </h2>
              <p className="text-gray-500 max-w-[74ch] mx-auto mt-2 leading-relaxed">
                「私にもできるかな？」という不安を、先回りしてほどきます。
              </p>
            </div>
            <div className="max-w-[920px] mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="border border-gray-900/10 rounded-2xl bg-white p-4 px-5 shadow-[0_6px_20px_rgba(10,10,30,0.04)] group"
                >
                  <summary className="cursor-pointer list-none font-bold flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span>{faq.q}</span>
                    <span className="w-3 h-3 border-r-2 border-b-2 border-gray-900/45 rotate-45 group-open:-rotate-[135deg] transition-transform shrink-0 -mt-0.5" />
                  </summary>
                  <div className="pt-3 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section
          id="contact"
          className="py-24 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white scroll-mt-20"
        >
          <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <h2 className="text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                まずは、無料の相棒診断から
              </h2>
              <p className="text-white/75 mt-3 leading-relaxed">
                今の状況を整理するところから始めます。
                <br />
                「この使い方で合ってる？」を、安心できる形に整えましょう。
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href={siteConfig.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-gray-900 font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  無料の相棒診断（30分）を申し込む
                </a>
                <a href="#plans" className={ctaGhost}>
                  プランを見る
                </a>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-white/8 border border-white/15 text-white/80">
                  受付：{siteConfig.businessHours}
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-white/8 border border-white/15 text-white/80">
                  返信：{siteConfig.replyTime}
                </span>
              </div>
            </div>
            <div className="bg-white/6 border border-white/12 rounded-[20px] p-6 text-white">
              <h3 className="text-lg font-bold">無料診断でわかること</h3>
              <p className="text-white/75 mt-2 text-sm leading-relaxed">
                売り込みではなく、「AIを相棒にする」という考え方を、あなたの仕事に沿って整理します。
              </p>
              <ul className="mt-4 pl-4 text-white/80 list-disc space-y-2 text-sm">
                <li>現状の棚卸し</li>
                <li>AIとの役割分担の整理</li>
                <li>次の1週間の行動が決まる</li>
              </ul>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center mt-4 text-white/60 hover:text-white text-sm font-semibold transition-colors"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ========== Footer ========== */}
      <footer className="py-10 px-6 text-gray-600" role="contentinfo">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-[10px] grid place-items-center bg-gray-900 text-white text-[10px] font-black select-none">
                AI
              </span>
              <span className="font-semibold text-gray-800">
                AIトレーナー <strong>AIBOU</strong>
              </span>
            </div>

            <div className="flex items-center gap-5 text-sm font-semibold">
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="X (Twitter)"
              >
                X
              </a>
              <a
                href={siteConfig.social.note}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="note"
              >
                note
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-5 border-t border-gray-900/8 text-sm">
            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.legal.privacy}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                プライバシーポリシー
              </a>
              <a
                href={siteConfig.legal.tokushoho}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                特定商取引法に基づく表記
              </a>
            </div>
            <div className="text-gray-400">
              &copy; {currentYear} AIトレーナーAIBOU
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
