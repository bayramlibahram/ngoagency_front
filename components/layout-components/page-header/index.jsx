import React from "react";
import { SmoothText } from "@/components/page-components/smoot-text";

export default function PageHeader({ title = "", keyName } = {}) {
  return (
    <div
      className="relative w-full h-[140px] md:h-[300px] z-10 -mt-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('/pomegranate-header.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-black/45 z-10" />
      {/* Text container */}
      <div className="absolute w-full h-full flex items-center justify-center z-20">
        <SmoothText text={title} keyName={keyName} />
      </div>
    </div>
  );
}
