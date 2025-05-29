import React from "react";
import Link from "next/link";
import Image from "next/image";
import PCalendarIcon from "@/components/icon-components/calendar-icon";
import { formatDate } from "@/utils/formatDate.util";

export default function BlogCard({ blog, lang }) {
  return (
    <article className="bg-white rounded-[20px] overflow-hidden duration-300 border border-gray-200 flex flex-col h-full">
      <Link href={`/${lang}/blog/detail/${blog[`url_${lang}`]}`}>
        <div className="relative aspect-[16/10]" style={{ minHeight: "200px" }}>
          <Image
            src={`/media-sources/${blog.post_image}`}
            alt={blog[`seo_${lang}`]}
            fill
            quality="80"
            loading="lazy"
            placeholder={"blur"}
            blurDataURL="/loader.png"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center text-gray-500 gap-2">
            <PCalendarIcon />
            <span className="text-xs">{formatDate(blog.post_date, lang)}</span>
          </div>
          <h3 className={`text-[1rem] leading-[2rem] font-prata`}>{blog[`title_${lang}`]}</h3>
        </div>
      </Link>
    </article>
  );
}
