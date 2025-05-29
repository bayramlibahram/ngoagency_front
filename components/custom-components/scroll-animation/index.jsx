"use client";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { MotionDiv } from "@/components/motion-components";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function ScrollAnimationWrapper({
  children,
  variants = fadeIn,
  className,
  style,
  once = true,
  amount = 0.2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={variants}
      style={{ willChange: "opacity, transform", ...style }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}
