"use client";

import { useSyncExternalStore } from "react";
import {
  getServerLearnedSlugs,
  isTopicLearned,
  setTopicLearned,
  subscribeLearnedTopics,
} from "@/lib/learned-topics";

type LearnedToggleProps = {
  slug: string;
};

export function LearnedToggle({ slug }: LearnedToggleProps) {
  const learned = useSyncExternalStore(
    subscribeLearnedTopics,
    () => isTopicLearned(slug),
    () => getServerLearnedSlugs().includes(slug),
  );

  function handleToggle() {
    setTopicLearned(slug, !learned);
  }

  return (
    <div className="mt-8">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {learned ? "学習済み" : "未学習"}
      </p>
      <button type="button" onClick={handleToggle} className="mt-2 underline">
        {learned ? "未学習に戻す" : "学習済みにする"}
      </button>
    </div>
  );
}
