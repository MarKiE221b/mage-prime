import { motion } from "framer-motion";

const VARIANTS = {
  up:    { hidden: { opacity: 0, y: 52 },               visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -52 },              visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -64, scale: 0.97 }, visible: { opacity: 1, x: 0, scale: 1 } },
  right: { hidden: { opacity: 0, x: 64 },              visible: { opacity: 1, x: 0 } },
  none:  { hidden: { opacity: 0 },                     visible: { opacity: 1 } },
};

/**
 * Wraps children in a motion.div that fades + slides into view on scroll.
 *
 * Props:
 *   direction  "up" | "down" | "left" | "right" | "none"  (default "up")
 *   delay      seconds before transition starts            (default 0)
 *   duration   seconds for the transition                  (default 0.75)
 *   amount     0–1 fraction of element visible to trigger  (default 0.18)
 *   className  extra classes passed to the wrapper
 */
const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1.2,
  amount = 0.18,
  className = "",
  style = {},
}) => {
  const variant = VARIANTS[direction] ?? VARIANTS.up;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variant}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
