import React from "react";
export default function SiteWrapper({ children }) {
  return <div className="w-full w-[90%] md:w-[80%] mx-auto sm:px-0">{children}</div>;
}
