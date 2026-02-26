import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,          // scroll duration multiplier — higher = slower/smoother
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      smoothWheel: true,
      wheelMultiplier: 0.9,   // slightly reduce wheel sensitivity for elegance
      touchMultiplier: 1.5,
    });

    // Keep Framer Motion's whileInView in sync by forwarding scroll events
    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });

    // RAF loop
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Expose lenis on window so anchor links work
    window.__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return children;
};

export default SmoothScroll;
