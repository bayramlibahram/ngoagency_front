import React from "react";

// used for home page sections
export default function SectionWrapper({ children }) {
  return <div className="p-[1.5rem] w-full lg:w-[80%] lg:m-auto">{children}</div>;
}
