/**
 * サイト設定（TODO項目の集約）
 * 素材が揃い次第、このファイルを更新してください。
 */
export const siteConfig = {
  /** TODO: 予約サービスのURLに差し替え（例: Calendly, timerex, Google Forms） */
  reservationUrl: "https://forms.gle/YOUR_FORM_ID",

  /** TODO: 正式なメールアドレスに差し替え */
  contactEmail: "hello@aibou-trainer.com",

  /** TODO: 正式な受付時間に差し替え */
  businessHours: "平日 10:00 - 18:00",

  /** TODO: 返信目安 */
  replyTime: "24時間以内",

  /** TODO: SNSリンクを設定 */
  social: {
    x: "https://x.com/aibou_trainer",
    note: "https://note.com/aibou_trainer",
  },

  /** TODO: 正式な法的ページURLに差し替え */
  legal: {
    privacy: "/privacy",
    tokushoho: "/tokushoho",
  },

  /** TODO: トレーナー情報を正式なものに差し替え */
  trainer: {
    name: "TODO: 実名",
    role: "AI運用設計 / コーチング",
    bio: "AIを相棒にする働き方の設計を支援。実務に伴走しながら、無理なく続く形に整えます。",
    tags: ["実務伴走", "思考分業", "ワークフロー設計", "習慣化"],
    sns: {
      x: "https://x.com/aibou_trainer",
      note: "https://note.com/aibou_trainer",
    },
  },

  /** TODO: 創業者情報を正式なものに差し替え */
  founder: {
    name: "TODO: 実名",
    story:
      "AIに可能性を感じながらも、多くの人が「使いこなせない自分」に悩んでいる姿を見てきました。知識ではなく習慣、ツールではなく設計。それを一緒に整える存在が必要だと感じ、AIBOUを始めました。",
    sns: {
      x: "https://x.com/aibou_trainer",
      note: "https://note.com/aibou_trainer",
    },
  },
} as const;
