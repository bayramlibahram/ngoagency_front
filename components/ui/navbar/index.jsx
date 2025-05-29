"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/motion-components";
import { useCurrentPage } from "@/providers/currentPage.provider";

function DropdownContent({ subNavs }) {
  return (
    <div className={`w-full flex flex-col mt-1`}>
      {subNavs?.map((item) => {
        console.log("item", item);
        return (
          <Link
            key={item.id}
            href={item.url}
            className="p-2 rounded hover:text-gray-600 hover:bg-gray-100 transition-all duration-300 ease-in text-[0.9rem]"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

// Utility: Styles based on depth level (horizontal for children of children)
const getDropdownPosition = (depth) =>
  depth === 0 ? "left-0 top-full mt-6 w-[220px]" : "left-full top-0 ml-1 w-[180px]";

const getDropdownAnimation = (depth) =>
  depth === 0
    ? { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 12 } }
    : {
        initial: { opacity: 0, x: 12 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 12 },
      };

const NavItem = React.memo(function NavItem({ nav, depth = 0 }) {
  const [open, setOpen] = useState(false);
  const hasChildren = open && nav.sub_navigations?.length > 0;

  // Animation states
  const { initial, animate, exit } = getDropdownAnimation(depth);

  return (
    <div
      key={nav.id}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`relative group list-none h-fit ${depth === 0 ? "w-fit" : "w-full py-1"}`}
    >
      {/*Nav link*/}
      <Link
        className={`flex items-center justify-between p-0 transition
          ${depth === 0 ? "p-0 text-[0.9rem] " : "p-2 text-[0.8rem] hover:bg-gray-100 rounded"}
        `}
        href={nav.url}
      >
        {nav.label}
        {nav.sub_navigations?.length > 0 && (
          <ChevronDown size="12" className={`ml-2 ${depth === 0 ? "" : "-rotate-90"}`} />
        )}
      </Link>

      {depth === 0 && (
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className={`absolute -bottom-2 -left-2 -right-2 h-0.5
                origin-left rounded-full group-hover:bg-red-500
                transition-transform duration-300 ease-out`}
        />
      )}

      {/* Recursive Dropdown */}
      <AnimatePresence>
        {hasChildren && (
          <MotionDiv
            initial={initial}
            animate={animate}
            exit={exit}
            style={{
              translateX: "-50%",
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
            }}
            transition={{
              duration: "0.2",
              ease: "easeInOut",
            }}
            className={`absolute left-1/2 top-11 bg-white p-2 rounded-xl z-50 ${getDropdownPosition(
              depth
            )}`}
          >
            <div className="absolute -top-6 left-0 right-0 h-6" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/3 rotate-45 bg-white z-20" />
            {/*<DropdownContent subNavs={nav.sub_navigations} lang={lang} sub={sub} />*/}
            {nav.sub_navigations.map((sub) => (
              <NavItem key={sub.id} nav={sub} depth={depth + 1} />
            ))}
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
});

export default function Navbar({ navigations, lang }) {
  return navigations.map((nav) => {
    return (
      <React.Fragment key={nav.id}>
        <NavItem nav={nav} lang={lang} />
      </React.Fragment>
    );
  });
}
