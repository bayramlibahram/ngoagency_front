import React from "react";
import SiteWrapper from "@/components/layout-components/site-wrapper";

export default function LayoutMain({ children }) {
  return <main className="site-main flex-1">{children}</main>;
}
