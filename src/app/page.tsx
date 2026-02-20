import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ========== Sticky Nav ========== */}
      <header className="sticky top-0 z-30 bg-gray-100/70 backdrop-blur-md border-b border-gray-900/10">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between py-3.5 gap-4 flex-wrap">
          <a href="#top" className="flex items-center gap-3 font-extrabold tracking-wide">
            <span className="w-[34px] h-[34px] rounded-xl grid place-items-center bg-gray-900 text-white text-xs font-black">
              AI
            </span>
            <span>
              AIトレーナー <span className="font-black">AIBOU</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-gray-900/75 font-semibold">
            <Link href="/story" className="hover:text-gray-900">AIBOUの原点</Link>
            <a href="#problem" className="hover:text-gray-900">お悩み</a>
            <a href="#reasons" className="hover:text-gray-900">選ばれる理由</a>
            <a href="#trainer" className="hover:text-gray-900">トレーナー</a>
            <a href="#plans" className="hover:text-gray-900">プラン</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gray-800 text-white font-bold text-sm tracking-wide hover:-translate-y-px hover:bg-gray-700 transition-all"
            >
              無料の相棒診断（30分）
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ========== Hero ========== */}
        <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 md:py-24">
          <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-11 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/10 border border-white/12 text-white/90 font-semibold text-sm backdrop-blur-sm">
                AIを「使う」から、AIと「働く」へ。
              </span>
              <h1 className="mt-3.5 text-[clamp(30px,3.2vw,52px)] font-bold leading-[1.25] tracking-tight">
                AIをライバルではなく、
                <br />
                &ldquo;最強の相棒&rdquo;に。
              </h1>
              <p className="mt-4 text-[clamp(16px,1.25vw,20px)] text-white/85 max-w-[62ch] leading-relaxed">
                AIが話題になっているのに、思ったほど仕事が楽にならない。
                <br />
                それは努力不足ではなく、
                <strong>役割の分け方</strong>
                が整っていないだけかもしれません。
                <br />
                AIBOUは、あなたの仕事に合わせて
                <strong>AIとの働き方を一緒に整える</strong>
                パーソナルAIトレーニングです。
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-gray-300 text-gray-900 font-bold text-sm shadow-lg hover:-translate-y-px transition-all"
                >
                  無料の相棒診断（30分）
                </a>
                <a
                  href="#service"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 hover:-translate-y-px hover:border-white/35 transition-all"
                >
                  サービスを見る
                </a>
              </div>
              {/* Points */}
              <div className="grid gap-3 mt-5">
                <div className="flex gap-3 items-start p-3 rounded-2xl bg-white/6 border border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full mt-[7px] bg-gray-400 shadow-[0_0_0_6px_rgba(163,163,163,0.18)] shrink-0" />
                  <div>
                    <strong className="block">講座ではなく、フォームを整える</strong>
                    <span className="text-white/80">
                      自己流の「使い方」より、あなたに合う「役割分担」へ。
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-3 rounded-2xl bg-white/6 border border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full mt-[7px] bg-gray-400 shadow-[0_0_0_6px_rgba(163,163,163,0.18)] shrink-0" />
                  <div>
                    <strong className="block">月1回でも、ちゃんと変わる</strong>
                    <span className="text-white/80">
                      間の期間は実装フェーズ。無理なく続く設計に。
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <aside className="bg-white/6 border border-white/12 rounded-[22px] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <h3 className="text-lg font-bold">まずは状況を整理するところから</h3>
              <p className="text-white/78 mt-2">
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
                  <p className="mt-2 text-white/82 text-sm">
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
                  <p className="mt-2 text-white/82 text-sm">
                    実務ベースで、あなたの「AIの使いどころ」を整えます。
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full px-5 py-3.5 rounded-full bg-gray-300 text-gray-900 font-bold text-sm shadow-lg hover:-translate-y-px transition-all"
                >
                  無料の相棒診断（30分）
                </a>
                <p className="mt-2.5 text-white/70 text-xs">
                  ※ 現在は少人数でのご案内です
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ========== Story Bridge ========== */}
        <section className="py-10 px-6 bg-gray-950 border-t border-white/5">
          <div className="w-full max-w-[1280px] mx-auto">
            <Link
              href="/story"
              className="group flex items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-all"
            >
              <div>
                <p className="text-white/50 text-sm font-semibold mb-1.5">Founder&apos;s Story</p>
                <p className="text-white text-[clamp(16px,1.4vw,20px)] font-bold leading-relaxed">
                  なぜ「AIトレーナー」という仕事を始めたのか。
                  <br className="hidden md:inline" />
                  広告代理店で100人以上が壊れていく現場を見た、創業者の原体験。
                </p>
              </div>
              <span className="shrink-0 text-white/40 group-hover:text-white/70 text-2xl transition-colors">→</span>
            </Link>
          </div>
        </section>

        {/* ========== Problem ========== */}
        <section id="problem" className="py-24 px-6">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-7">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/6 border border-gray-900/12 text-gray-900/85 font-semibold text-sm">
                Empathy
              </span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                最近、こんなふうに感じることはありませんか？
              </h2>
              <p className="text-gray-500 max-w-[76ch] mx-auto mt-1">
                AIは便利そう。でも、日々の仕事にうまくなじまない。
                <br />
                その&ldquo;言葉にしづらいモヤモヤ&rdquo;を、まず一緒にほどきます。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
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
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white border border-gray-900/12 rounded-[18px] shadow-[0_12px_28px_rgba(10,10,30,0.10)] p-5"
                >
                  <div className="w-[46px] h-[46px] rounded-[14px] grid place-items-center bg-gray-900/8 border border-gray-900/15 text-gray-700 font-extrabold text-sm mb-3">
                    {item.num}
                  </div>
                  <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold leading-snug whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Reasons ========== */}
        <section id="reasons" className="py-24 px-6">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-7">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/6 border border-gray-900/12 text-gray-900/85 font-semibold text-sm">
                Trust
              </span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                AIBOUが大切にしていること
              </h2>
              <p className="text-gray-500 max-w-[78ch] mx-auto mt-1">
                AIの「使い方」を増やすのではなく、あなたの仕事に合う「働き方」を整えます。
                <br />
                無理なく続く形で、少しずつ&ldquo;相棒化&rdquo;していく設計です。
              </p>
            </div>
            <div className="grid gap-5">
              {[
                {
                  icon: "A",
                  title: "講座ではなく、フォームを整える",
                  desc: "つまずきの多くは「プロンプトの知識不足」ではありません。AIに任せるところ／人が考えるところの分け方が曖昧なまま、自己流で続けてしまうこと。AIBOUは、その\u201C分け方\u201Dを一緒に整えます。",
                },
                {
                  icon: "B",
                  title: "あなたの仕事の延長線で進める",
                  desc: "新しいことを増やすのではなく、いまの仕事の中で「ここはAIに任せられる」を見つけます。だから、無理なく続きます。\u201C気づいたら自然に使えている\u201D状態を目指します。",
                },
                {
                  icon: "C",
                  title: "人にしかできない仕事に集中できる",
                  desc: "AI時代に価値が高まるのは、寄り添うこと／まとめること／0→1を生むこと。AIを相棒にできると、考える余裕が生まれ、あなたらしい仕事に時間を使えるようになります。",
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="bg-white border border-gray-900/12 rounded-[18px] shadow-[0_12px_28px_rgba(10,10,30,0.10)] p-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
                >
                  <div>
                    <div className="w-[46px] h-[46px] rounded-[14px] grid place-items-center bg-gray-900/8 border border-gray-900/15 text-gray-700 font-extrabold text-sm mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-2">{item.desc}</p>
                  </div>
                  <div className="rounded-[22px] border border-gray-900/12 bg-gradient-to-br from-gray-900/6 to-gray-400/10 h-[240px] grid place-items-center text-gray-900/50 font-extrabold tracking-widest">
                    PHOTO
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Trainer ========== */}
        <section id="trainer" className="py-24 px-6">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-7">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/6 border border-gray-900/12 text-gray-900/85 font-semibold text-sm">
                Trainer
              </span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                トレーナー紹介
              </h2>
              <p className="text-gray-500 max-w-[76ch] mx-auto mt-1">
                難しい言葉で置き去りにしません。あなたの仕事の現場に合わせて、一緒に整えていきます。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  name: "トレーナー名（仮）",
                  role: "AI運用設計",
                  desc: "仕事の進め方・意思決定・アウトプットの質を落とさずに、AIを相棒にするための設計を支援します。",
                  tags: ["実務伴走", "思考分業", "ワークフロー設計"],
                },
                {
                  name: "トレーナー名（仮）",
                  role: "コーチング",
                  desc: "続けられる形に落とし込みながら、あなたに合う「AIとの距離感」を一緒に作ります。",
                  tags: ["習慣化", "整理術", "非同期支援"],
                },
              ].map((trainer, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-900/12 rounded-[18px] shadow-[0_12px_28px_rgba(10,10,30,0.10)] p-5"
                >
                  <div className="rounded-[18px] border border-gray-900/12 bg-gray-300 text-gray-600 grid place-items-center font-extrabold tracking-widest min-h-[170px]">
                    PHOTO
                  </div>
                  <div className="mt-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold">
                        {trainer.name}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-gray-900/6 border border-gray-900/12 text-gray-900/85">
                        {trainer.role}
                      </span>
                    </div>
                    <p className="text-gray-500 mt-2">{trainer.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-2.5">
                      {trainer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-gray-900/6 border border-gray-900/12 text-gray-900/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 mt-3.5 text-sm">
              ※トレーナー欄は初期は1名でもOK。2名表示は将来の拡張を見据えたワイヤーです。
            </p>
          </div>
        </section>

        {/* ========== Service / Flow ========== */}
        <section id="service" className="py-24 px-6">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-7">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/6 border border-gray-900/12 text-gray-900/85 font-semibold text-sm">
                Service
              </span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                トレーニングの流れ
              </h2>
              <p className="text-gray-500 max-w-[78ch] mx-auto mt-1">
                まずは状況を整理し、次に&ldquo;相棒として働ける形&rdquo;に整えていきます。
                <br />
                月1回のセッションを軸に、間の期間は実装フェーズとして支えます。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  num: "1",
                  title: "無料の相棒診断（30分）",
                  desc: "いま困っていること／理想の状態／現状の使い方を整理します。",
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
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white border border-gray-900/12 rounded-[18px] shadow-[0_12px_28px_rgba(10,10,30,0.10)] p-5"
                >
                  <div className="w-[46px] h-[46px] rounded-[14px] grid place-items-center bg-gray-900/8 border border-gray-900/15 text-gray-700 font-extrabold text-sm mb-3">
                    {item.num}
                  </div>
                  <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== Plans ========== */}
        <section id="plans" className="pb-24 px-6">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-7">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/6 border border-gray-900/12 text-gray-900/85 font-semibold text-sm">
                Plans
              </span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                料金プラン
              </h2>
              <p className="text-gray-500 max-w-[76ch] mx-auto mt-1">
                まずは&ldquo;整う感覚&rdquo;を体験してから。必要に応じて選べる2つの入り口を用意しています。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Letter */}
              <div className="relative bg-white border border-gray-900/12 rounded-[18px] shadow-[0_12px_28px_rgba(10,10,30,0.10)] p-5 overflow-hidden">
                <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold">レターサブスク</h3>
                <p className="text-gray-500 mt-1">
                  実証ログ／成功モデルNo.の配信（note想定）
                </p>
                <div className="text-[34px] font-black tracking-tight mt-3">¥980</div>
                <div className="text-gray-900/60 font-bold">/ 月（想定）</div>
                <ul className="mt-3 pl-4 text-gray-900/80 list-disc space-y-2">
                  <li>週1回：成功モデル No. 配信</li>
                  <li>実証ログの要約＋再現ポイント</li>
                  <li>インタビュー・振り返り</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full px-5 py-3.5 rounded-full bg-gray-800 text-white font-bold text-sm hover:-translate-y-px hover:bg-gray-700 transition-all"
                  >
                    レターを受け取る
                  </a>
                </div>
              </div>
              {/* Trainer Plan (Recommended) */}
              <div className="relative bg-white border border-gray-700/35 rounded-[18px] shadow-[0_16px_36px_rgba(64,64,64,0.15)] p-5 overflow-hidden">
                <span className="absolute top-4 right-4 px-3 py-1.5 bg-gray-800 text-white rounded-full font-extrabold text-xs tracking-wide">
                  おすすめ
                </span>
                <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold">
                  トレーナープラン
                </h3>
                <p className="text-gray-500 mt-1">
                  月1セッション＋非同期レビュー（実務伴走）
                </p>
                <div className="text-[34px] font-black tracking-tight mt-3">¥100,000</div>
                <div className="text-gray-900/60 font-bold">/ 月</div>
                <ul className="mt-3 pl-4 text-gray-900/80 list-disc space-y-2">
                  <li>月1回（60分）パーソナル</li>
                  <li>非同期レビュー（随時）</li>
                  <li>役割分担・思考分業の設計</li>
                  <li>実案件レビュー／テンプレ整備</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full px-5 py-3.5 rounded-full bg-gray-800 text-white font-bold text-sm hover:-translate-y-px hover:bg-gray-700 transition-all"
                  >
                    無料の相棒診断から
                  </a>
                </div>
              </div>
              {/* Spot */}
              <div className="relative bg-white border border-gray-900/12 rounded-[18px] shadow-[0_12px_28px_rgba(10,10,30,0.10)] p-5 overflow-hidden">
                <h3 className="text-[clamp(18px,1.6vw,22px)] font-bold">スポット相談</h3>
                <p className="text-gray-500 mt-1">
                  単発で整えたい方向け（初回のみ）
                </p>
                <div className="text-[34px] font-black tracking-tight mt-3">¥30,000</div>
                <div className="text-gray-900/60 font-bold">/ 回（想定）</div>
                <ul className="mt-3 pl-4 text-gray-900/80 list-disc space-y-2">
                  <li>60分の壁打ち・整理</li>
                  <li>優先度・やることの明確化</li>
                  <li>次の1週間の運用設計</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full px-5 py-3.5 rounded-full bg-gray-800 text-white font-bold text-sm hover:-translate-y-px hover:bg-gray-700 transition-all"
                  >
                    相談してみる
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-500 mt-3.5 text-sm">
              ※料金・内容はワイヤー用の仮。最終版では「レター料金」「スポット料金」の有無を確定してください。
            </p>
          </div>
        </section>

        {/* ========== Testimonials ========== */}
        <section id="voice" className="py-24 px-6">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-7">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/6 border border-gray-900/12 text-gray-900/85 font-semibold text-sm">
                Voice
              </span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                お客様の声
              </h2>
              <p className="text-gray-500 max-w-[76ch] mx-auto mt-1">
                数字の自慢ではなく、日常が少し軽くなる変化を大切にしています。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "山田さん（仮）",
                  attr: "30代・企画",
                  quote:
                    "「何をAIに任せていいか分からなかったのが、整理されました。迷う時間が減って、気持ちが楽になりました。」",
                },
                {
                  name: "佐藤さん（仮）",
                  attr: "40代・マーケ",
                  quote:
                    "「使い方を増やすより、仕事に合わせて\u201C整える\u201Dという発想が新鮮でした。自然に使えるようになってきました。」",
                },
                {
                  name: "鈴木さん（仮）",
                  attr: "30代・PM",
                  quote:
                    "「AIに任せすぎて思考が浅くなる不安がありましたが、役割分担を整えたら逆に考える余裕が増えました。」",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-900/12 rounded-[18px] shadow-[0_12px_28px_rgba(10,10,30,0.10)] p-5"
                >
                  <div className="rounded-[18px] border border-gray-900/12 bg-gray-300 text-gray-600 grid place-items-center font-extrabold tracking-widest min-h-[120px]">
                    PHOTO
                  </div>
                  <div className="flex gap-1 text-gray-400 text-base mt-2">
                    {"★★★★★"}
                  </div>
                  <p className="mt-2">
                    <strong>{v.name}</strong>｜{v.attr}
                  </p>
                  <p className="text-gray-500 mt-1">{v.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section id="faq" className="py-24 px-6">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="text-center mb-7">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900/6 border border-gray-900/12 text-gray-900/85 font-semibold text-sm">
                FAQ
              </span>
              <h2 className="mt-3 text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                よくある質問
              </h2>
              <p className="text-gray-500 max-w-[74ch] mx-auto mt-1">
                「私にもできるかな？」という不安を、先回りしてほどきます。
              </p>
            </div>
            <div className="max-w-[920px] mx-auto space-y-3">
              {[
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
              ].map((faq, i) => (
                <details
                  key={i}
                  className="border border-gray-900/12 rounded-2xl bg-white p-3.5 px-4 shadow-[0_10px_22px_rgba(10,10,30,0.06)] group"
                >
                  <summary className="cursor-pointer list-none font-extrabold flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="w-3 h-3 border-r-2 border-b-2 border-gray-900/55 rotate-45 group-open:-rotate-[135deg] transition-transform shrink-0 -mt-0.5" />
                  </summary>
                  <div className="pt-2.5 text-gray-900/80">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section
          id="contact"
          className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-900/92 text-white border-y border-white/10"
        >
          <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
            <div>
              <h2 className="text-[clamp(22px,2.2vw,34px)] font-bold tracking-tight">
                まずは、無料の相棒診断から
              </h2>
              <p className="text-white/75 mt-2">
                今の状況を整理するところから始めます。
                <br />
                「この使い方で合ってる？」を、安心できる形に整えましょう。
              </p>
              <div className="flex flex-wrap gap-3 mt-3.5">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-gray-300 text-gray-900 font-bold text-sm shadow-lg hover:-translate-y-px transition-all"
                >
                  無料の相棒診断（30分）を申し込む
                </a>
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 hover:-translate-y-px hover:border-white/35 transition-all"
                >
                  プランを見る
                </a>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-3.5">
                <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-white/8 border border-white/18 text-white">
                  受付：平日 10:00-18:00
                </span>
                <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-white/8 border border-white/18 text-white">
                  連絡：example@aibou.ai（仮）
                </span>
              </div>
            </div>
            <div className="bg-white/6 border border-white/12 rounded-[18px] p-5 text-white">
              <h3 className="text-lg font-bold">このLPの目的</h3>
              <p className="text-white/82 mt-2">
                売り込みではなく、「AIを相棒にする」という考え方を、あなたの仕事に沿って整理することです。
              </p>
              <ul className="mt-3 pl-4 text-white/82 list-disc space-y-2">
                <li>現状の棚卸し</li>
                <li>役割分担の整理</li>
                <li>次の1週間の行動が決まる</li>
              </ul>
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
