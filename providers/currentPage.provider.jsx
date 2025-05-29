"use client";
import React, { useCallback, useEffect } from "react";
import { useContext, useState, createContext, useMemo } from "react";

const CurrentPageContext = createContext(null);

function flattenNavTree(navs) {
  const out = [];

  navs.forEach((nav) => {
    out.push({ id: nav.id, key: nav.key, label: nav.label });

    if (Array.isArray(nav.sub_navigations) && nav.sub_navigations.length) {
      out.push(...flattenNavTree(nav.sub_navigations));
    }
  });

  return out;
}

export const PageProvider = ({ children, navs }) => {
  const [currentPages, setCurrentPages] = useState(() => flattenNavTree(navs));

  const serializeNavs = (navs) => {
    let arr = [];
    for (let i = 0; i < navs.length; i++) {
      const nav = navs[i];
      if (Array.isArray(nav.sub_navigations)) {
        arr.push(...serializeNavs(nav.sub_navigations));
      }
      arr.push({
        id: nav.id,
        key: nav.key,
        label: nav.label,
      });
    }
    return arr;
  };

  useEffect(() => {
    setCurrentPages(flattenNavTree(navs));
  }, [navs]);

  const value = useMemo(() => ({ currentPages, setCurrentPages }), [currentPages]);

  return <CurrentPageContext.Provider value={value}>{children}</CurrentPageContext.Provider>;
};

export const useCurrentPage = () => {
  return useContext(CurrentPageContext);
};
