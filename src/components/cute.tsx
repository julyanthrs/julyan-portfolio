import { useEffect, useRef, useState } from "react";

export function Sparkle({ className, delay }: { className: string; delay: string }) {
  return (
    <svg
      className={`absolute animate-sparkle text-candy-pink ${className}`}
      style={{ animationDelay: delay }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
    </svg>
  );
}

export function Heart({ className, delay }: { className: string; delay: string }) {
  return (
    <svg
      className={`absolute text-rose animate-float ${className}`}
      style={{ animationDelay: delay }}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function Blob({ className, color }: { className: string; color: string }) {
  return (
    <div
      className={`absolute animate-blob blur-3xl opacity-60 ${className} ${color}`}
      aria-hidden="true"
    />
  );
}

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  animation = "animate-pop-in",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/** Cute hand-drawn style wireframe sketch used in the case-study wireframe step. */
export function WireframeSketch({ variant }: { variant: "mobile" | "desktop" | "grid" }) {
  const box = "rounded-xl border-2 border-dashed border-chocolate/30 bg-white/60";

  if (variant === "mobile") {
    return (
      <div className="flex justify-center gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-24 shrink-0 rounded-[1.5rem] border-2 border-chocolate/30 bg-cream/80 p-2 shadow-sm transition-transform duration-500 hover:-translate-y-2 hover:rotate-2 sm:w-32"
            style={{ transform: `rotate(${(i - 1) * 3}deg)` }}
          >
            <div className="mx-auto mb-2 h-1.5 w-8 rounded-full bg-chocolate/20" />
            <div className={`${box} mb-2 h-14`} />
            <div className={`${box} mb-1.5 h-2.5`} />
            <div className={`${box} mb-1.5 h-2.5 w-2/3`} />
            <div className="mt-3 h-6 rounded-full border-2 border-chocolate/30 bg-candy-pink/40" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "desktop") {
    return (
      <div className="rounded-2xl border-2 border-chocolate/30 bg-cream/80 p-3 shadow-sm">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-candy-pink" />
          <span className="h-2 w-2 rounded-full bg-butter" />
          <span className="h-2 w-2 rounded-full bg-mint" />
          <div className={`${box} ml-3 h-3 flex-1`} />
        </div>
        <div className={`${box} mb-3 h-20`} />
        <div className="grid grid-cols-3 gap-3">
          <div className={`${box} h-12`} />
          <div className={`${box} h-12`} />
          <div className={`${box} h-12`} />
        </div>
        <div className="mt-3 flex gap-3">
          <div className={`${box} h-3 flex-1`} />
          <div className="h-3 w-16 rounded-full bg-candy-pink/50" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className={`${box} h-16 transition-transform duration-500 hover:-translate-y-1 hover:rotate-3`}
          style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
        />
      ))}
    </div>
  );
}
