"use client";
import React, { useCallback, useState } from "react";
import MobileNavbar from "@/components/layout-components/mobile-navbar";

export default function MobileNavWrapper({ navigations, lang }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState({});

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const toggleSubNav = useCallback((key) => {
    setSubNavOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  });

  return (
    <MobileNavbar
      navigations={navigations}
      lang={lang}
      isSideNavOpen={isSideNavOpen}
      toggleSideNav={toggleSideNav}
      subNavOpen={subNavOpen}
      toggleSubNav={toggleSubNav}
    />
  );
}
