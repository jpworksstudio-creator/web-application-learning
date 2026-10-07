# 開発プロセス

このドキュメントは、開発プロセス・用語・Issue / PR の書き方の**正本（Single Source of Truth）**である。  
README は概要と入口のみとし、詳細はここに集約する。

このリポジトリでは、次のサイクルを**毎 Issue**で回す。

## サイクル

1. **GitHub Issue** — 背景・目的、学習ゴール、Scope / Out of Scope、Functional Done、Learning Done、Verification を整理する
2. **Plan** — 変更方針・手順・リスク
3. **Implementation** — ブランチで実装（AI 支援可。`main` 直コミット禁止）
4. **Verification** — Issue に書いた確認手順を実行する
5. **AI Review** — 差分レビュー（バグ・学習上の誤解・セキュリティ）
6. **Pull Request** — 概要・Verification 結果・AI Review・Learning Done を記載（Functional Done の再掲はしない）
7. **Merge**
8. **Vercel 確認** — Merge 後、Vercel の Production Deployment が成功し、公開URLに変更が反映されたことを確認する
9. **振り返り** — 理解したこと / まだ曖昧なこと / 次の Issue（短く）

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

PR は Issue の繰り返しではない。次を確認する。

- 実際に何を変更したか（Summary）
- どう Verification したか（Issue の Functional Done をすべて満たしていることの確認を含む）
- AI Review を実施したか
- Learning Done を満たしたか（自分の言葉で短く説明）

## 完了の判断

- **Functional Done** と **Learning Done** の両方を満たす
- Issue に書いた **Verification** を実行し、完成を確認する
- **AI Review** を実施する
- どちらかの Done だけ、または Verification / AI Review 未実施では Merge しない

## Verification 最低ライン（毎 Issue）

Issue の Verification 欄に、その Issue で必要な手順を書く。共通の下限は次のとおり。

- **手動確認** — Functional Done どおりか確認する
- **`build` / `lint`** — プロジェクト導入後は必須。未導入の Issue（ドキュメントのみ等）は対象外と明記
- **CI（GitHub Actions）** — PR 作成時に `lint` / `build` を GitHub 上で自動再実行する。Local Verification の代わりではなく、再確認として使う
- **Learning Done 自己確認** — 説明できる状態か自分で確かめる

Phase 7 以降は、上記に加えて自動化テスト（Vitest / Playwright 等）も含める。

## AI と人間の役割（要点）

- **人間**: なぜその技術を使うか、概念の理解、Issue 各項目の定義と自己確認、秘密情報、次 Issue の決定
- **AI**: ボイラープレート、定型構成、修正案、PR 文下書き、エラー解読の補助（結果は人間が確認）
- 「全部作って」ではなく、**Scope / Out of Scope と両 Done・Verification を渡して部分実装**させる
- 生成コードを読み、Learning Done で説明できる状態にしてから Merge する

詳細が必要になったら、別ドキュメント（例: `AI_COLLABORATION.md`）に分離する。
