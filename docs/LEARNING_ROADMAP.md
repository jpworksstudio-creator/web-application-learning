# 学習ロードマップ

参照講座: Udemy「【Next.js】フルスタック開発基本講座(TypeScript/Prisma/Auth)」

アプリは写経ではなく、講座で学んだ技術を使った**ミニ教材アプリ**（技術体験ページの追加）として育てる。

## 横断ルール

- **AI駆動サイクル**（Issue → Plan → Implementation → Verification → AI Review → PR → Merge → Vercel 確認 → 振り返り）は Phase 0 から毎 Issue で実施する
- 各 Phase・各 Issue では **Functional Done**（何ができれば完成か）・**Learning Done**（何を理解できれば学習完了か）・**Verification**（Functional Done をどう確認するか）の3つをセットで意識する
- Phase 7 / 8 は Verification / AI駆動を「開始」する場所ではなく、自動化・高度化のフェーズ

**認証**: 当面 Auth.js に統一。**Supabase** は PostgreSQL のホスティング先として使用する。

用語・Issue / PR の書き方の正本は [DEVELOPMENT_PROCESS.md](DEVELOPMENT_PROCESS.md) を参照。

## Phase 一覧

### Phase 0 — 最短 Bootstrap → Next.js

最小ドキュメント整備、Next.js + TypeScript 初期化、Vercel デプロイ。毎 Issue で Verification / AI Review を回し始める。

### Phase 1 — 画面と Routing

HTML/CSS、基本レイアウト、App Router（`page` / `layout` / 動的ルート）、トピック一覧・詳細。

### Phase 2 — React / Server・Client Component

コンポーネント分割、Server vs Client の使い分け練習、簡単なインタラクション。

### Phase 3 — Form

バリデーション、Server Actions による送信練習ページ。

### Phase 4 — API

Route Handler、フロントから API を呼ぶ練習。

### Phase 5 — Database + CRUD

Prisma + Supabase（PostgreSQL）、練習データの CRUD。

### Phase 6 — Authentication

Auth.js でログイン必須ページ、自分のデータだけ見える CRUD。Supabase Auth 比較は発展課題。

### Phase 7 — Test 自動化・高度化

手動 + build + lint を土台に Vitest / Playwright などで自動化。CI 組み込みを検討。

### Phase 8 — AI駆動開発の高度化

Harness Engineering / Agent Loop などへ拡張。サイクル自体は Phase 0 から実践済み。
