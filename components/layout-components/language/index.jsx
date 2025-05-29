"use client";
import React from "react";
import Link from "next/link";
import { useLanguageContext } from "@/providers/language.provider";

export default function Language({ lang }) {
  const { pageUrls } = useLanguageContext();
  return (
    <div className="flex align-items-center justify-content-between md:justify-content-center p-0 md:p-2">
      <div>
        {lang === "az" ? (
          <Link
            className="text-black-alpha-80 md:text-white no-underline font-medium"
            href={pageUrls?.url_en}
            prefetch={true}
          >
            EN
          </Link>
        ) : (
          <Link
            className="text-black-alpha-80 md:text-white no-underline font-medium"
            href={pageUrls?.url_az}
            prefetch={true}
          >
            AZ
          </Link>
        )}
      </div>
      <div className="ml-3">
        <Link
          className="text-black-alpha-80 md:text-white no-underline font-medium"
          href={lang === "az" ? "/az/search" : "/en/search"}
          title={lang === "az" ? "axtar" : "search"}
        >
          <i className="fas fa-search"></i>
        </Link>
      </div>
    </div>
  );
}
