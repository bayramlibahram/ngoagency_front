"use client";
import React from "react";
import Link from "next/link";

export default function Socials({ socials }) {
  return (
    <div className="flex align-items-center md:justify-content-center px-2 md:p-0">
      {React.Children.toArray(
        socials &&
          socials.map((s) => {
            return (
              <Link
                tabIndex="0"
                className="cursor-pointer lg:mt-0 block text-black-alpha-80 md:text-white flex align-items-center justify-content-center no-underline"
                style={{
                  width: "40px",
                  height: "40px",
                }}
                href={s.social_url}
                key={s.id}
                target="_blank"
              >
                <i className={`${s.social_icon} p-1 border-circle`} />
              </Link>
            );
          })
      )}
    </div>
  );
}
