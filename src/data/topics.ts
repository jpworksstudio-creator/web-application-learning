export type Topic = {
  slug: string;
  title: string;
  phase: string;
  summary: string;
  description: string;
};

export const topics: Topic[] = [
  {
    slug: "routing",
    title: "画面と Routing",
    phase: "Phase 1",
    summary: "App Router でフォルダ構成と URL を対応させ、ページを作る。",
    description:
      "app ディレクトリのフォルダ構成がそのまま URL になる仕組みを学ぶ。page.tsx によるページ作成、[slug] のような動的ルート、Link によるページ遷移を扱う。",
  },
  {
    slug: "react-components",
    title: "React / Server・Client Component",
    phase: "Phase 2",
    summary: "コンポーネントを分割し、Server と Client の使い分けを練習する。",
    description:
      "画面を小さなコンポーネントに分ける方法と、サーバーで描画する Server Component・ブラウザで動く Client Component の違いを学ぶ。",
  },
  {
    slug: "form",
    title: "Form",
    phase: "Phase 3",
    summary: "入力フォームとバリデーション、Server Actions による送信を練習する。",
    description:
      "フォームの入力値を検証し、Server Actions を使ってサーバーへ送信する流れを学ぶ。",
  },
  {
    slug: "api",
    title: "API",
    phase: "Phase 4",
    summary: "Route Handler で API を作り、画面から呼び出す。",
    description:
      "Route Handler で API エンドポイントを作り、フロントエンドからデータを取得・送信する方法を学ぶ。",
  },
  {
    slug: "database",
    title: "Database + CRUD",
    phase: "Phase 5",
    summary: "Prisma と Supabase（PostgreSQL）で練習データを CRUD する。",
    description:
      "Prisma を使ってデータベースのテーブルを定義し、データの作成・読み取り・更新・削除（CRUD）を実装する方法を学ぶ。",
  },
  {
    slug: "authentication",
    title: "Authentication",
    phase: "Phase 6",
    summary: "Auth.js でログインと、自分のデータだけを扱う仕組みを作る。",
    description:
      "Auth.js でログイン機能を作り、ログインしたユーザーだけがページを見られる仕組みや、自分のデータだけを操作できる仕組みを学ぶ。",
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
