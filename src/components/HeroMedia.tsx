import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const mediaClass =
  "absolute inset-0 h-full w-full origin-top-left scale-110 object-cover object-right";

export const HeroMedia = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const skip = prefersReducedMotion();
    setReduceMotion(skip);
    if (skip) return;

    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => undefined);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <img
        src="/hero-poster.jpg"
        alt="Crystal whisky tumbler with a sphere of ice, a dark bottle behind, and drifting smoke"
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="high"
        className={mediaClass}
      />
      {reduceMotion ? null : (
        <video
          ref={videoRef}
          className={mediaClass}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          width={1280}
          height={720}
          aria-hidden
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
          <source src="/hero/hero.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
};
