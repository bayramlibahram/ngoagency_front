import React from "react";
import Navbar from "@/components/ui/navbar";
import LanguageBar from "@/components/layout-components/language-bar";
import SiteLogo from "@/components/layout-components/site-logo";
// import { Search } from "lucide-react";

export default function DesktopNavbar({ navigations, lang }) {
  return (
    <div className="hidden md:flex items-center justify-between bg-white">
      {/*Left navbar*/}
      <nav
        aria-label="Left Main Navigation"
        className="w-[42.5%] flex justify-between items-center"
      >
        <Navbar lang={lang} navigations={navigations.slice(0, Math.ceil(navigations.length / 2))} />
      </nav>
      {/*Site logo*/}
      <div className="flex items-center justify-center w-[15%] py-2">
        <SiteLogo isView={true} />
      </div>
      {/*Right navbar*/}
      <nav
        aria-label="Right Main Navigation"
        className="w-[42.5%] flex justify-between items-center flex-grow"
      >
        <Navbar lang={lang} navigations={navigations.slice(Math.ceil(navigations.length / 2))} />
        <div className="flex justify-center gap-6">
          {/*<button>*/}
          {/*  <Search size={16} strokeWidth={"1.5px"} />*/}
          {/*</button>*/}
          <LanguageBar />
        </div>
      </nav>
    </div>
  );
}
