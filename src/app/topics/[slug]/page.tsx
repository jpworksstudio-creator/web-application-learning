import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicBySlug } from "@/data/topics";

export default async function TopicDetailPage({
  params,
}: PageProps<"/topics/[slug]">) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <>
      <span className="text-sm text-zinc-500">{topic.phase}</span>
      <h1 className="mt-1 text-3xl font-bold">{topic.title}</h1>
      <p className="mt-6 leading-7">{topic.description}</p>
      <Link href="/topics" className="mt-8 inline-block underline">
        学習トピック一覧へ戻る
      </Link>
    </>
  );
}
