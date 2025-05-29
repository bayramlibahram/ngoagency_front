"use client";
import { AnimatePresence } from "framer-motion";

export default function AnimatePresenceComponent({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
