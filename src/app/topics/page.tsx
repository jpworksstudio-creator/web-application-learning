import Link from "next/link";
import { topics } from "@/data/topics";

export default function TopicsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold">学習トピック一覧</h1>
      <ul className="mt-8 flex flex-col gap-4">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link
              href={`/topics/${topic.slug}`}
              className="block rounded-md border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <span className="text-sm text-zinc-500">{topic.phase}</span>
              <h2 className="mt-1 text-xl font-semibold">{topic.title}</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{topic.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-8 inline-block underline">
        トップへ戻る
      </Link>
    </main>
  );
}
