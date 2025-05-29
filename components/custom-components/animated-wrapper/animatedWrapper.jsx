"use client";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export default function AnimatedWrapper({ children, clsName }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className={clsName}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
