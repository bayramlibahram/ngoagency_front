import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import MoveUpRightIcon from "@/components/icon-components/moveup-right-icon";
import AnimationComponent from "@/components/custom-components/animation-component";

// const ManagementCard = ({ lang, data }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] p-6 lg:p-8 rounded-2xl bg-white gap-6">
//       <div className="relative hidden md:block w-full h-full lg:w-[220px] md:h-[300px] rounded-2xl overflow-hidden">
//         <Image
//           src={`/media-sources/${data.image}`}
//           className="block rounded-2xl object-cover"
//           alt="Profile"
//           fill
//         />
//       </div>
//       <div className="flex flex-col gap-4 md:gap-6 justify-around">
//         <div className="flex justify-end items-center">
//           <Link
//             href={`/${lang}/managements/${data[`url_${lang}`]}`}
//             className="w-[40px] h-[40px] rounded-full border border-gray-200 flex items-center justify-center"
//             aria-label="View profile"
//           >
//             <MoveUpRightIcon />
//           </Link>
//         </div>
//         <h2 className="flex flex-col font-prata text-xl md:text-3xl leading-relaxed lg:leading-[1.5]">
//           <span>Farhad</span>
//           <span>Qaraşov</span>
//         </h2>
//         <div className="flex gap-3">
//           <div className="p-[2px] bg-red-600 rounded-3xl"></div>
//           <div className="p-2 text-neutral-700 text-sm text-justify tracking-tight">
//             {data["positions"][`name_${lang}`]}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ManagementCard = ({ lang, data }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] p-6 lg:p-8 rounded-2xl bg-white gap-6">
//       {/* Image with an aspect ratio and responsive scaling */}
//       <div className="relative block w-full md:w-[220px] aspect-[3/4]  rounded-2xl overflow-hidden">
//         <Image
//           src={`/media-sources/${data.image}`}
//           alt={data[`full_name_${lang}`]}
//           fill
//           style={{ objectFit: "cover" }}
//           sizes="(max-width: 1024px) 50vw, 220px"
//           priority
//           className="rounded-2xl h-auto"
//         />
//       </div>
//       <div className="flex flex-col gap-4 md:gap-6 justify-around">
//         {/* Management navigate url*/}
//         <div className="hidden md:flex justify-end items-center ">
//           <Link
//             href={`/${lang}/managements/${data[`url_${lang}`]}`}
//             className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition hover:border-neutral-400"
//             aria-label="View profile"
//           >
//             <MoveUpRightIcon />
//           </Link>
//         </div>
//         {/* Management name */}
//         <h2 className="flex flex-col font-prata text-xl md:text-3xl leading-relaxed lg:leading-[1.5]">
//           {data[`full_name_${lang}`]}
//         </h2>
//         {/* Management content*/}
//         <div className="flex gap-3">
//           <div className="p-[2px] bg-red-600 rounded-3xl"></div>
//           <div className="p-2 text-neutral-700 text-sm text-justify tracking-tight">
//             <Link
//               href={`/${lang}/managements/${data[`url_${lang}`]}`}
//               className="no-underline"
//               aria-label="View profile"
//             >
//               {data.positions[`name_${lang}`]}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const ManagementCard = ({ lang, data }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[auto,1fr] p-6 lg:p-8 rounded-2xl bg-white gap-6 overflow-hidden">
      {/* Watermark Logo */}
      <img
        src="/logo.svg" // Replace with your logo path
        alt=""
        aria-hidden="true"
        className="absolute bottom-4 right-4 max-w-24 opacity-80 pointer-events-none select-none"
      />

      {/* Image with an aspect ratio and responsive scaling */}
      <div className="relative block w-full md:w-[220px] aspect-[3/4] rounded-2xl overflow-hidden">
        <Image
          src={`/media-sources/${data.image}`}
          alt={data[`full_name_${lang}`]}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 50vw, 220px"
          priority
          className="rounded-2xl h-auto"
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-6 justify-around">
        {/* Management navigate url*/}
        <div className="hidden md:flex justify-end items-center ">
          <Link
            href={`/${lang}/managements/${data[`url_${lang}`]}`}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition hover:border-neutral-400"
            aria-label="View profile"
          >
            <MoveUpRightIcon />
          </Link>
        </div>
        {/* Management name */}
        <h2 className="flex flex-col font-prata text-xl md:text-3xl leading-relaxed lg:leading-[1.5]">
          {data[`full_name_${lang}`]}
        </h2>
        {/* Management content*/}
        <div className="flex gap-3">
          <div className="p-[2px] bg-red-600 rounded-3xl"></div>
          <div className="p-2 text-neutral-700 text-sm text-justify tracking-tight">
            <Link
              href={`/${lang}/managements/${data[`url_${lang}`]}`}
              className="no-underline"
              aria-label="View profile"
            >
              {data.positions[`name_${lang}`]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ManagementList({ data, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {data?.map((item, index) => {
        return (
          <ScrollAnimationWrapper key={item.id}>
            <AnimationComponent delay={index * 0.1}>
              <ManagementCard data={item} lang={lang} />
            </AnimationComponent>
          </ScrollAnimationWrapper>
        );
      })}
    </div>
  );
}
