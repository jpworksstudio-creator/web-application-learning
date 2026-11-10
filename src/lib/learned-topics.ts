const STORAGE_KEY = "dev-practice-lab:learned-topics";
const EMPTY_LEARNED_SLUGS: string[] = [];

type Listener = () => void;

const listeners = new Set<Listener>();
let cachedSlugs: string[] = EMPTY_LEARNED_SLUGS;
let hasClientCache = false;

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function readFromLocalStorage(): string[] {
  if (typeof window === "undefined") {
    return EMPTY_LEARNED_SLUGS;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return EMPTY_LEARNED_SLUGS;
    }

    const parsed: unknown = JSON.parse(raw);
    if (!isStringArray(parsed)) {
      return EMPTY_LEARNED_SLUGS;
    }

    return parsed;
  } catch {
    return EMPTY_LEARNED_SLUGS;
  }
}

export function subscribeLearnedTopics(onStoreChange: Listener): () => void {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

export function getLearnedSlugs(): string[] {
  if (typeof window === "undefined") {
    return EMPTY_LEARNED_SLUGS;
  }

  if (!hasClientCache) {
    cachedSlugs = readFromLocalStorage();
    hasClientCache = true;
  }

  return cachedSlugs;
}

export function getServerLearnedSlugs(): string[] {
  return EMPTY_LEARNED_SLUGS;
}

export function setTopicLearned(slug: string, learned: boolean): void {
  if (typeof window === "undefined") {
    return;
  }

  const next = new Set(getLearnedSlugs());

  if (learned) {
    next.add(slug);
  } else {
    next.delete(slug);
  }

  cachedSlugs = [...next];
  hasClientCache = true;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedSlugs));
  emit();
}

export function isTopicLearned(slug: string): boolean {
  return getLearnedSlugs().includes(slug);
}
