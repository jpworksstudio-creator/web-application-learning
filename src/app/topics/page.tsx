import Link from "next/link";
import { TopicsList } from "@/components/TopicsList";
import { topics } from "@/data/topics";

export default function TopicsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">学習トピック一覧</h1>
      <TopicsList topics={topics} />
      <Link href="/" className="mt-8 inline-block underline">
        トップへ戻る
      </Link>
    </>
  );
}
