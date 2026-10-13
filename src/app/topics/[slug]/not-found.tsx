import Link from "next/link";

export default function TopicNotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold">トピックが見つかりません</h1>
      <p className="mt-6 leading-7">指定された URL の学習トピックは存在しません。</p>
      <Link href="/topics" className="mt-8 inline-block underline">
        学習トピック一覧へ戻る
      </Link>
    </main>
  );
}
