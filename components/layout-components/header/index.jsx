import React from "react";
import SiteWrapper from "@/components/layout-components/site-wrapper";
import DesktopNavbar from "@/components/layout-components/desktop-navbar";
import MobileNavWrapper from "@/components/layout-components/mobilenav-wrapper";
import HeaderTop from "../header-top";

export default function Header({ lang, navigations }) {
  return (
    <>
      <HeaderTop />
      <DesktopNavbar />
    </>
  );
}
