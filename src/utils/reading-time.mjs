/**
 * Shared reading-time estimation for Atelier listings and review pages.
 * Explicit frontmatter values take precedence over the estimate.
 */
const WORDS_PER_MINUTE = 180;

export function countReadableWords(markdown) {
  const text = String(markdown ?? "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/~~~[\s\S]*?~~~/g, " ")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/!?(\[[^\]]*\])\([^)]*\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ");
  return text.trim().split(/\s+/u).filter(Boolean).length;
}

export function estimateReadingTime(markdown, wordsPerMinute = WORDS_PER_MINUTE) {
  if (!Number.isFinite(wordsPerMinute) || wordsPerMinute <= 0) {
    throw new RangeError("wordsPerMinute must be a positive finite number");
  }
  return Math.max(1, Math.ceil(countReadableWords(markdown) / wordsPerMinute));
}

export function getReadingTime(article) {
  const explicit = article?.data?.readingTime;
  if (Number.isFinite(explicit) && explicit > 0) return Math.ceil(explicit);
  return estimateReadingTime(article?.body ?? "");
}
