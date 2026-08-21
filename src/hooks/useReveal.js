import { useEffect } from 'react';

/**
 * Adds the `.in` class to any element with `.reveal` once it enters
 * the viewport. Call once per page (e.g. in a top-level useEffect).
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.15 }
    );

    const els = document.querySelectorAll('.reveal:not(.in)');
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
