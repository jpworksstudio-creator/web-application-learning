import Link from "next/link";

export default function TopicNotFound() {
  return (
    <>
      <h1 className="text-3xl font-bold">トピックが見つかりません</h1>
      <p className="mt-6 leading-7">指定された URL の学習トピックは存在しません。</p>
      <Link href="/topics" className="mt-8 inline-block underline">
        学習トピック一覧へ戻る
      </Link>
    </>
  );
}
