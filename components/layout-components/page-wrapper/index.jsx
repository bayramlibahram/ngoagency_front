import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="relative -mt-5 md:-mt-10 bg-white p-6 md:p-[3rem] shadow z-10 w-[90%] md:w-[80%] m-auto rounded-2xl md:mb-3">
      {children}
    </div>
  );
}
