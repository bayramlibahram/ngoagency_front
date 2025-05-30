"use client";
import React from "react";
import Link from "next/link";
import { useLanguageContext } from "@/providers/language.provider";
import Language from "@/components/layout-components/language";
import Navbar from "@/components/layout-components/navbar";
import Socials from "@/components/layout-components/socials";
import MenuOpen from "@/components/layout-components/menu-open";

//Don't repeat you self -
export default function HeaderTop({ lang, navigations, socials }) {
  return (
    <div className="md:py-4 header-top">
      <div className="flex md:flex-row align-items-center">
        <div className="flex-grow-1">
          <Socials socials={socials} />
        </div>
        <div className="hidden md:flex md:flex-grow-1">
          <Navbar navigations={navigations} lang={lang} />
        </div>
        <div className="hidden md:flex flex-grow-1">
          <Language lang={lang} />
        </div>
        <div className="block md:hidden">
          <MenuOpen lang={lang} navigations={navigations} />
        </div>
      </div>
    </div>
  );
}
