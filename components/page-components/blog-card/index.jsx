import React from "react";
import Link from "next/link";
import Image from "next/image";
import PCalendarIcon from "@/components/icon-components/calendar-icon";
import { formatDate } from "@/utils/formatDate.util";
import { ArrowRight, Eye } from "lucide-react";
import { MotionP } from "@/components/motion-components";

export default function BlogCard({ blog, lang }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
      <Link href={`/${lang}/blog/detail/${blog[`url_${lang}`]}`}>
        <div className="relative aspect-[16/10]" style={{ minHeight: "200px" }}>
          {blog.post_image ? (
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
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-700">
              <svg
                className="h-12 w-12 text-muted-foreground/30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {blog.isNew && (
            <div className="absolute top-4 left-4 bg-gold-600 text-white text-xs px-2 py-1 rounded-md shadow-md z-20 font-['Times_New_Roman']">
              YENİ
            </div>
          )}

          {blog.tag && (
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md shadow-md z-20 font-['Times_New_Roman']">
              {blog.tag}
            </div>
          )}

          {blog.views && (
            <div className="absolute bottom-4 right-4 flex items-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <Eye className="h-3 w-3 mr-1" />
              <span>{blog.views}</span>
            </div>
          )}
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center text-gray-500 gap-2">
            <PCalendarIcon />
            <span className="text-xs">{formatDate(blog.post_date, lang)}</span>
          </div>
          <div>
            <h3
              className={`text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors duration-300 line-clamp-2`}
            >
              {blog[`title_${lang}`] ? blog[`title_${lang}`] : blog.post_title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm my-2 line-clamp-3 flex-grow">
              {blog.description}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center text-gold-600 dark:text-gold-400 hover:text-gold-700 p-6 dark:hover:text-gold-300 font-medium group/link relative mt-auto">
          <span className="relative z-10">Daha ətraflı</span>
          <MotionP initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
            <ArrowRight className="ml-1 h-4 w-4" />
          </MotionP>
        </div>
      </Link>
    </article>
  );
}