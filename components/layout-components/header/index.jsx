import React from "react";
import SiteWrapper from "@/components/layout-components/site-wrapper";
import DesktopNavbar from "@/components/layout-components/desktop-navbar";
import MobileNavWrapper from "@/components/layout-components/mobilenav-wrapper";

export default function Header({ lang, navigations }) {
  return (
    <header className="site-header z-20 isolate bg-white  border border-gray-100">
      <SiteWrapper>
        <DesktopNavbar navigations={navigations} lang={lang} />
      </SiteWrapper>
      <MobileNavWrapper lang={lang} navigations={navigations} />
    </header>
  );
}
