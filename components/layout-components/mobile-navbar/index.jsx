import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import LanguageBar from "@/components/layout-components/language-bar";
import AnimatePresenceComponent from "@/components/motion-components/animate-presence";
import { Menu, X, ChevronDown } from "lucide-react";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { MotionUl } from "@/components/motion-components/motion-ul";

export default function MobileNavbar(props) {
  const { navigations, isSideNavOpen, toggleSideNav, subNavOpen, toggleSubNav } = props;
  return (
    <div className="block md:hidden z-50">
      <div className="w-full h-full flex items-center justify-between px-4 text-gray-950">
        <Image src="/logo.svg" alt="logo" width={100} height={50} loading="lazy" />
        <div className="flex gap-5 items-center justify-between">
          <LanguageBar isMobile />
          <button aria-label="Toggle menu" onClick={toggleSideNav} className="text-gray-900">
            {isSideNavOpen ? <X size={24} /> : <Menu strokeWidth={1.4} size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresenceComponent>
        {isSideNavOpen && (
          <MotionDiv
            initial={{ y: "100%" }}
            animate={{ y: "25%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={clsx(
              "fixed bottom-0 left-0 h-full w-full bg-white shadow-lg flex flex-col p-4 rounded-2xl z-50"
            )}
          >
            <ul className="space-y-3">
              {navigations?.map((link) => (
                <li className="m-0 p-0" key={link.id}>
                  {link.sub_navigations.length > 0 ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link
                          className="flex items-center justify-between w-full px-2 py-1 text-gray-800 hover:bg-gray-100 rounded"
                          aria-expanded={!!subNavOpen[link.key]}
                          onClick={() => toggleSubNav(link.key)}
                          href={link.url}
                        >
                          {link.label}
                        </Link>
                        <button
                          aria-label={`Toggle submenu for ${link.label}`}
                          aria-expanded={!!subNavOpen[link.key]}
                          onClick={() => toggleSubNav(link.key)}
                          className="ml-2"
                        >
                          <ChevronDown
                            size={16}
                            className={clsx("transform", {
                              "rotate-180": subNavOpen[link.key],
                            })}
                          />
                        </button>
                      </div>
                      <AnimatePresenceComponent>
                        {subNavOpen[link.key] && (
                          <MotionUl
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 space-y-1"
                            as="section"
                          >
                            {link.sub_navigations.map((subLink) => (
                              <li key={subLink.id}>
                                <Link
                                  href={subLink.url}
                                  className="block px-2 py-1 text-navy-600 hover:bg-gray-200 rounded"
                                >
                                  {subLink.label}
                                </Link>
                              </li>
                            ))}
                          </MotionUl>
                        )}
                      </AnimatePresenceComponent>
                    </>
                  ) : (
                    <Link
                      className="block px-2 py-1 text-navy-800 hover:bg-gray-100 rounded"
                      href={link.url}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </MotionDiv>
        )}
      </AnimatePresenceComponent>

      <AnimatePresenceComponent>
        {isSideNavOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-navy-800 z-30"
            onClick={toggleSideNav}
            aria-hidden="true"
          />
        )}
      </AnimatePresenceComponent>
    </div>
  );
}
