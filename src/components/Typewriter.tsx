"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  phrases: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function Typewriter({
  phrases,
  className,
  typingSpeed = 95,
  deletingSpeed = 55,
  pauseMs = 1400
}: TypewriterProps) {
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (safePhrases.length === 0) {
      return;
    }

    const currentPhrase = safePhrases[phraseIndex] ?? "";
    const isComplete = characterCount === currentPhrase.length;
    const isEmpty = characterCount === 0;
    const delay = isComplete && !isDeleting ? pauseMs : isDeleting ? deletingSpeed : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % safePhrases.length);
        return;
      }

      setCharacterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, deletingSpeed, isDeleting, pauseMs, phraseIndex, safePhrases, typingSpeed]);

  const currentText = safePhrases[phraseIndex]?.slice(0, characterCount) ?? "";

  return (
    <span className={className} aria-label={safePhrases.join(", ")}>
      <span aria-hidden="true">{currentText}</span>
      <span aria-hidden="true" className="ml-1 inline-block animate-pulse text-[var(--color-accent)]">
        |
      </span>
    </span>
  );
}
