"use client";
import React from "react";
import { Great_Vibes } from "next/font/google";
import { useCurrentPage } from "@/providers/currentPage.provider";

const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const SmoothText = ({ text, delay = 100, keyName }) => {
  const { currentPages } = useCurrentPage();
  const page_title = currentPages?.find((i) => i?.key === keyName);
  return (
    <h1
      className={`text-3xl sm:text-2xl md:text-6xl lg:text-7xl mb-2 text-white drop-shadow-lg leading-tight ${great_vibes.className}`}
    >
      {text
        ? text.split("").map((char, i) => (
            <span
              key={i}
              style={{
                opacity: 0,
                display: "inline-block",
                transform: "translateY(16px)",
                animation: `fadeInUp 0.4s forwards`,
                animationDelay: `${i * delay}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))
        : page_title?.label.split("").map((char, i) => (
            <span
              key={i}
              style={{
                opacity: 0,
                display: "inline-block",
                transform: "translateY(16px)",
                animation: `fadeInUp 0.4s forwards`,
                animationDelay: `${i * delay}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}

      <style>{`
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
    </h1>
  );
};
