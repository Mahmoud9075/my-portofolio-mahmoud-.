import { useEffect, useRef } from "react";

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        try {
          // Find child elements that should animate and stagger them
          const selectors = [
            ".anim-reveal",
            ".anim-line-reveal",
            ".anim-reveal-child",
            ".anim-reveal-1",
            ".anim-reveal-2",
            ".anim-reveal-3",
            ".anim-reveal-4",
          ].join(",");

          const children = Array.from(entry.target.querySelectorAll(selectors));

          // If the container itself has an anim-reveal class, include it first
          if (entry.target.matches && entry.target.matches(selectors)) {
            children.unshift(entry.target);
          }

          const baseDelay = typeof options.baseDelay === "number" ? options.baseDelay : 0;
          const step = typeof options.step === "number" ? options.step : 0.08;

          children.forEach((child, i) => {
            // set inline delay to trigger staggered animation when the section enters
            child.style.animationDelay = `${baseDelay + i * step}s`;
            // ensure element is visible to allow animation to run
            child.style.opacity = "1";
          });
        } catch (e) {
          // graceful fallback
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }

        // stop observing after reveal
        if (ref.current) observer.unobserve(ref.current);
      }
    }, {
      threshold: 0.12,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return ref;
};
