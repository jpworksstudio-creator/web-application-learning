# 開発プロセス

このドキュメントは、開発プロセス・用語・Issue / PR の書き方の**正本（Single Source of Truth）**である。  
README は概要と入口のみとし、詳細はここに集約する。

このリポジトリでは、次のサイクルを**毎 Issue**で回す。

## サイクル

1. **GitHub Issue** — 背景・目的、学習ゴール、Scope / Out of Scope、Functional Done、Learning Done、Verification を整理する
2. **Plan** — 変更方針・手順・リスク
3. **Implementation** — ブランチで実装（AI 支援可。`main` 直コミット禁止）
4. **Local Verification** — Issue に書いた確認手順のうち、手元で行うものを実行する
5. **Learning Check** — AI Review の前に、Learning Done の各項目について現時点の理解を AI の回答を見ずに自分の言葉で説明し、曖昧な点を把握する。合格判定ではなく、Final Learning Done までに補う理解不足を見つける工程
6. **AI Review** — 差分レビュー（バグ・学習上の誤解・セキュリティ）。指摘の採否は人間が判断する
7. **commit / push** — feature ブランチに commit し、GitHub に push する
8. **Pull Request** — 本文は最低限にする（後述）
9. **CI** — PR を契機に GitHub Actions が `lint` / `build` を再実行し、成功を確認する
10. **Preview Deployment** — Vercel の Preview Deployment が成功していることを確認する
11. **Final Learning Done** — Merge 前に Learning Done を改めて説明し、誤解がないか確認する。Verification / AI Review / Learning Done の結果を Issue コメントに記録する
12. **Merge**
13. **Production Deployment** — Merge 後、Vercel の Production Deployment が成功し、公開URLに変更が反映されたことを確認する
14. **振り返り** — 理解したこと / まだ曖昧なこと / 進め方の振り返り / 次の Issue（短く）を Issue コメントに残す

## 共通用語

| 用語 | 意味 |
|------|------|
| **背景・目的** | なぜやるのか（アプリ上・学習上の必要性） |
| **学習ゴール** | 何を学ぶのか |
| **Scope** | 今回実施する変更・実装範囲 |
| **Out of Scope** | 今回やらない範囲（なければ「特になし」） |
| **Functional Done** | 何ができれば完成か |
| **Learning Done** | 何を理解できれば学習完了か |
| **Verification** | Functional Done をどう確認するか |
| **AI Review** | 変更差分のレビュー（バグ・誤解・セキュリティなど） |

**背景・目的**と**学習ゴール**、**Functional Done**と**Verification**は別概念である。

例:

- Functional Done: 「学習トピック一覧が表示され、詳細ページへ遷移できる」
- Verification: 「ブラウザで一覧を確認する」「複数トピックの遷移を確認する」「`npm run build` が成功する」

## GitHub Issue に書くこと

Issue は詳細仕様書ではない。次のための**最低限の情報**を持たせる。

- AI が作業範囲を誤解しない
- 人間が完了を判断できる
- 学習できたか判断できる
- Verification 方法を事前に明確にできる

書く項目: 背景・目的、学習ゴール、Scope、Out of Scope、Functional Done、Learning Done、Verification（必要なら参考）

**Functional Done は Issue 側で定義する。** PR では再掲しない。

## Pull Request に書くこと

PR は Issue の繰り返しではない。本文は最低限にする。

- PR 本文は **Summary**（何を・なぜ変えたか1〜3行）と **関連 Issue**（`Closes #N`）だけにする
- Verification 結果、AI Review の結果と採否、Learning Done、想定外のことと判断理由、次の Issue 候補は **Issue コメント**に記録する
- Merge 後の Production Deployment の確認結果と振り返りも、同じ Issue のコメントに追記する

## 完了の判断

Merge 前に、次をすべて確認する。どれか1つでも欠けていれば Merge しない。

- **Functional Done** を満たしている
- **Local Verification**（Issue に書いた確認手順のうち、手元で行うもの）を実行した
- **AI Review** を実施した
- **CI** が成功している
- **Preview Deployment** が成功している
- **Final Learning Done** で Learning Done を満たしている

## Verification 最低ライン（毎 Issue）

Issue の Verification 欄に、その Issue で必要な手順を書く。共通の下限は次のとおり。

- **手動確認** — Functional Done どおりか確認する
- **`build` / `lint`** — プロジェクト導入後は必須。未導入の Issue（ドキュメントのみ等）は対象外と明記
- **CI（GitHub Actions）** — PR 作成時に `lint` / `build` を GitHub 上で自動再実行する。Local Verification の代わりではなく、再確認として使う
- **Learning Done 自己確認** — 説明できる状態か自分で確かめる

Phase 7 以降は、上記に加えて自動化テスト（Vitest / Playwright 等）も含める。

## AI と人間の役割（要点）

- **人間**: なぜその技術を使うか、概念の理解、Issue 各項目の定義と自己確認、秘密情報、次 Issue の決定
- **AI**: ボイラープレート、定型構成、修正案、PR 本文・Issue コメントの下書き、エラー解読の補助（結果は人間が確認）
- 「全部作って」ではなく、**Scope / Out of Scope と両 Done・Verification を渡して部分実装**させる
- 生成コードを読み、Learning Done で説明できる状態にしてから Merge する

詳細が必要になったら、別ドキュメント（例: `AI_COLLABORATION.md`）に分離する。
