"use client";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function InfiniteMarquee({
  children,
  speed = 30,
  direction = "left",
  className = "",
}: InfiniteMarqueeProps) {
  const animDir = direction === "left" ? "normal" : "reverse";

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: animDir,
        }}
      >
        <div className="inline-flex shrink-0">{children}</div>
        <div className="inline-flex shrink-0">{children}</div>
      </div>
    </div>
  );
}
