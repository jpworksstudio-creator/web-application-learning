# web-application-learning

Web アプリケーション開発と AI 駆動開発を、実践しながら学ぶためのリポジトリです。

完成したサービスを作ることより、**学びと開発プロセスの習得**を第一目的とします。

## アプリの位置づけ

各技術（Routing、Form、API、DB、Auth など）を体験できる**ミニ教材アプリ**を育てます。  
Udemy「Next.js フルスタック開発基本講座」をロードマップにしつつ、写経ではなく自分の練習ページとして機能を追加していきます。

## 進め方（概要）

GitHub Issue を起点に、次のサイクルで進めます。

Issue → Plan → Implementation → Verification → AI Review → PR → Merge → 振り返り

Issue の項目定義、完了判断、Verification の詳細など**開発プロセスの正本**は次を参照してください。

→ [docs/DEVELOPMENT_PROCESS.md](docs/DEVELOPMENT_PROCESS.md)

## 技術スタック（予定含む）

| 技術 | 役割 |
|------|------|
| Next.js (App Router) / React / TypeScript | アプリ本体 |
| HTML / CSS / Tailwind CSS | UI |
| Prisma | DB アクセス |
| Auth.js | 認証（当面これに統一） |
| Supabase | PostgreSQL のホスティング |
| Vercel | デプロイ |
| Git / GitHub | Issue・PR・レビュー |

## ドキュメント

- [学習ロードマップ](docs/LEARNING_ROADMAP.md)
- [開発プロセス（正本）](docs/DEVELOPMENT_PROCESS.md)

## 始め方

前提: Node.js（LTS 推奨）がインストールされていること。

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、Next.js の初期画面が表示されます。

その他の確認コマンド:

```bash
npm run lint
npm run build
```
