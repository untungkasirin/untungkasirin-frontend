import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ cubic-bezier sama dengan easeOut
    },
  },
};
