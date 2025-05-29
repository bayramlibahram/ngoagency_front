"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@/components/motion-components";

export default function AnimatedWrapper({
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  delay,
  exit,
  transition = { duration: 0.5, ease: "easeOut", delay: delay },
  threshold = 0.5,
  once = true,
  className,
  style,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  // 👇 fallback in case animation never runs
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  return (
    <MotionDiv
      ref={ref}
      initial={initial}
      animate={hasAnimated ? animate : initial}
      exit={exit}
      transition={transition}
      style={{ willChange: "opacity, transform", ...style }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}
