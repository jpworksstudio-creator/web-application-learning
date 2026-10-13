import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold">Dev Practice Lab</h1>
      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
        Web アプリ開発の技術を、小さな練習ページで体験しながら学ぶためのミニ教材アプリです。
      </p>
      <Link
        href="/topics"
        className="mt-8 inline-block rounded-md bg-foreground px-5 py-3 font-medium text-background hover:opacity-80"
      >
        学習トピック一覧へ
      </Link>
    </main>
  );
}
