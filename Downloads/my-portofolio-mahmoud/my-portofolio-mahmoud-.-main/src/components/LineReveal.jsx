import React from "react";

/**
 * LineReveal
 * Splits input text into lines (or sentences/words) and applies staggered per-line animation.
 * Props:
 * - text: string
 * - split: 'line' | 'sentence' | 'word'
 * - className: string
 * - baseDelay: number (seconds)
 * - step: number (seconds)
 */
export const LineReveal = ({
  text = "",
  split = "line",
  className = "",
  baseDelay = 0,
  step = 0.08,
}) => {
  const raw = String(text ?? "");

  let parts = [];
  if (split === "line") {
    parts = raw.split(/\r?\n/).filter(Boolean);
  } else if (split === "sentence") {
    parts = raw.split(/(?<=[.!?])\s+/).filter(Boolean);
  } else if (split === "word") {
    parts = raw.split(/\s+/).filter(Boolean);
  } else {
    parts = [raw];
  }

  return (
    <div className={className}>
      {parts.map((part, i) => (
        <span
          key={i}
          className="inline-block opacity-0 anim-line-reveal"
          style={{ animationDelay: `${baseDelay + i * step}s` }}
        >
          {part}
          {i < parts.length - 1 && (split === "word" ? " " : "\n")}
        </span>
      ))}
    </div>
  );
};

export default LineReveal;
