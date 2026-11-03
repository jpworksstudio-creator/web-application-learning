"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import type { Topic } from "@/data/topics";
import {
  getLearnedSlugs,
  getServerLearnedSlugs,
  subscribeLearnedTopics,
} from "@/lib/learned-topics";

type TopicsListProps = {
  topics: Topic[];
};

export function TopicsList({ topics }: TopicsListProps) {
  const learnedSlugs = useSyncExternalStore(
    subscribeLearnedTopics,
    getLearnedSlugs,
    getServerLearnedSlugs,
  );

  return (
    <ul className="mt-8 flex flex-col gap-4">
      {topics.map((topic) => {
        const learned = learnedSlugs.includes(topic.slug);

        return (
          <li key={topic.slug}>
            <Link
              href={`/topics/${topic.slug}`}
              className="block rounded-md border border-zinc-200 p-4 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-zinc-500">{topic.phase}</span>
                {learned ? (
                  <span className="text-sm text-zinc-500">学習済み</span>
                ) : null}
              </div>
              <h2 className="mt-1 text-xl font-semibold">{topic.title}</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{topic.summary}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
