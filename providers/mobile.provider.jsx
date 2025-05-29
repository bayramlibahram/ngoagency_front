"use client";
import React, { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext({
  isOpen: false,
  toggleMenu: () => {},
});

export const MobileMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => useContext(MobileMenuContext);
