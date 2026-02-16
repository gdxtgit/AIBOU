# AIBOU 公式サイト — 引き継ぎ書

## 1. プロジェクト概要

| 項目 | 内容 |
|------|------|
| リポジトリ | `gdxtgit/AIBOU` |
| 技術スタック | Next.js 16.1.6 / Tailwind CSS v4 / TypeScript |
| デプロイ先 | GitHub Pages (`https://gdxtgit.github.io/AIBOU/`) |
| デプロイ方法 | `main` ブランチへの push → GitHub Actions 自動デプロイ |
| ビルド出力 | Static Export (`./out`) |

---

## 2. 現在のブランチ状態

| ブランチ | 状態 |
|----------|------|
| `main` | PR #1 マージ済み（改修反映済み） |
| `claude/aibou-official-site-GjSdT` | 開発ブランチ（main とマージ済み・差分なし） |
| タグ `v0.1-wireframe-graytone` | 改修前のワイヤーフレーム版を保存 |

---

## 3. 完了済みの作業

### コミット履歴（古い順）
1. `cc4aa09` — 初期実装（複数ページ構成）
2. `60b650f` — GitHub Pages デプロイ設定追加
3. `a9ccea1` — 1ページLP構成に刷新（グレートーン）
4. `dc0650a` — `src/config.ts` 作成 + 現行版タグ付け
5. `a494305` — **LP全面改修**（下記の改修内容すべて）

### 改修内容サマリー
- **`src/config.ts`** — 全 TODO 値の集約（予約URL, 連絡先, 営業時間, SNS, 法的リンク, トレーナー情報, 創業者情報）
- **`src/components/MobileMenu.tsx`** — ハンバーガーメニュー（Client Component）
- **`src/app/page.tsx`** — 全セクション改修:
  - siteConfig からの値参照に統一
  - Founder Story セクション新規追加
  - トレーナーを config ベース 1名表示に統一
  - CSS クラス共通化（`cardBase`, `ctaPrimary`, `sectionLabel` 等）
  - `scroll-mt-20` によるスティッキーヘッダー対応
  - アクセシビリティ改善（`aria-label`, `role`）
  - copyright 年を動的生成に変更
  - フッターに法的リンク・SNSリンク追加
  - ワイヤー用注記の除去
- **`src/app/layout.tsx`** — OGP / Twitter Card メタデータ + FAQ JSON-LD 構造化データ追加

---

## 4. 未完了・次にやるべきこと

### 最優先: デプロイ確認
- PR #1 は main にマージ済みだが、GitHub Pages への反映を要確認
- Actions タブでデプロイワークフローの実行状況をチェック
- `https://gdxtgit.github.io/AIBOU/` で改修版が表示されるか確認

### TODO: `src/config.ts` の仮値を正式値に差し替え

```typescript
// 以下すべて仮値のまま。正式な値が決まり次第更新:
reservationUrl: "https://forms.gle/YOUR_FORM_ID"   // → 予約フォームURL
contactEmail: "hello@aibou-trainer.com"             // → 正式メールアドレス
businessHours: "平日 10:00 - 18:00"                 // → 正式な受付時間
replyTime: "24時間以内"                              // → 返信目安
social.x: "https://x.com/aibou_trainer"             // → 正式X URL
social.note: "https://note.com/aibou_trainer"       // → 正式note URL
legal.privacy: "/privacy"                           // → プライバシーポリシーページ
legal.tokushoho: "/tokushoho"                       // → 特商法ページ
trainer.name: "TODO: 実名"                           // → トレーナー実名
founder.name: "TODO: 実名"                           // → 創業者実名
```

### TODO: コンテンツ差し替え
- [ ] トレーナー写真（PHOTO プレースホルダー → 実画像）
- [ ] お客様の声の写真・実名
- [ ] Reasons セクションの写真
- [ ] OGP 画像の設定（`metadata.openGraph.images`）
- [ ] favicon の設定

### TODO: 法的ページ作成
- [ ] `/privacy` — プライバシーポリシーページ
- [ ] `/tokushoho` — 特定商取引法に基づく表記ページ

---

## 5. ファイル構成

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + グレートーンのカラー定義
│   ├── layout.tsx           # メタデータ + FAQ JSON-LD + フォント読み込み
│   └── page.tsx             # 1ページLP（全セクション）
├── components/
│   └── MobileMenu.tsx       # ハンバーガーメニュー（"use client"）
└── config.ts                # サイト設定（TODO集約）
.github/
└── workflows/
    └── deploy.yml           # GitHub Pages 自動デプロイ（main push 時）
next.config.ts               # Static Export + basePath 設定
```

---

## 6. ビルド・開発コマンド

```bash
npm run dev          # 開発サーバー起動
npm run build        # 本番ビルド（./out に出力）
```

---

## 7. 注意事項

- **Tailwind CSS v4** を使用（`@import "tailwindcss"` 形式、`@theme` ブロックでカスタムカラー定義）
- **Static Export** 設定のため、Server Components の動的機能（API Routes 等）は使用不可
- **basePath** が GitHub Actions 環境変数で制御されている可能性あり（`next.config.ts` を参照）
- `page.tsx` 内のデータ配列（`problems`, `reasons`, `steps`, `plans`, `voices`, `faqs`）はファイル先頭に定義済み
- FAQ の内容は `page.tsx` と `layout.tsx`（JSON-LD）の両方に存在する — 変更時は両方更新が必要
