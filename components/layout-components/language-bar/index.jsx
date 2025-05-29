"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguageContext } from "@/providers/language.provider";
import { MotionDiv } from "@/components/motion-components";

const Languages = ({ languages, currentLang, isMobile }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit cursor-pointer"
    >
      {isMobile ? (
        <Globe size={20} className="text-gray-900" strokeWidth={1.4} />
      ) : (
        <Globe size={16} strokeWidth={"1.4px"} />
      )}
      {/*Render flyout content*/}
      <AnimatePresence>
        {open && (
          <MotionDiv
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 15,
            }}
            style={{
              translateX: "-50%",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
            transition={{
              duration: "0.2",
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-12 text-black p-5 rounded-xl bg-white z-20"
          >
            <div className="absolute -top-3 left-0 right-0 h-6"></div>
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/3 rotate-45 bg-white rounded z-10 drop-shadow"></div>
            <div className="absolute left-1/2 top-0 h-4 w-6 -translate-x-1/2 -translate-y-0 z-20 bg-white"></div>
            {/*Content*/}
            <ul className="flex flex-col items-center gap-2 w-[50px]">
              {languages?.map(({ code, label, url }) => (
                <li key={code}>
                  <Link href={url} className={`${currentLang === code ? "text-red-600" : ""}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LanguageBar({ isMobile }) {
  const { languages, currentLang } = useLanguageContext();
  return <Languages languages={languages} currentLang={currentLang} isMobile={isMobile} />;
}
