"use client";
import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Sidebar } from "primereact/sidebar";
import Navbar from "@/components/layout-components/navbar";
import { Button } from "primereact/button";
import Language from "@/components/layout-components/language";

export default function MenuOpen({ lang, navigations }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="p-2">
      <Sidebar className="p-3" visible={visible} onHide={() => setVisible(false)}>
        <div className="mb-3">
          <h3 className="m-0 p-0 text-black-alpha-80">
            {" "}
            {lang === "az" ? "QƏRBİ AZƏRBAYCAN İRSİ" : "Western Azerbaijan Heritage"}
          </h3>
        </div>
        <div className="mb-2 relative">
          <Navbar navigations={navigations} lang={lang} />
        </div>
        <div>
          <Language lang={lang} />
        </div>
      </Sidebar>

      <Button
        className="bg-black-alpha-80 hover:bg-white-alpha-80 hover:text-black-alpha-80 transition-all flex align-items-center justify-content-center border-none outline-none text-3xl p-1"
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          <X className="block h-6 w-6 text-3xl" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6 text-3xl" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}
