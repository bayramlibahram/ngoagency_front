import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function (props) {
  const { lang, isView, version } = props;
  return (
    <>
      {isView && (
        <Link href="/">
          <Image src="/logo.svg" width={115} height={68} alt={"logo"} />
        </Link>
      )}
    </>
  );
}
