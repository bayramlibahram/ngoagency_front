import React from "react";
import Link from "next/link";
import Image from "next/image";
import parseHtml from "@/lib/html-parser";
import SectionWrapper from "@/components/custom-components/section-wrapper";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { MotionH1 } from "@/components/motion-components/motion-h1";
import { MotionButton } from "@/components/motion-components/motion-button";
import { detailed_button } from "@/constants";

const slideIn = (x = 0, delay = 0) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function ChairmanSection({ lang, data }) {
  return (
    <div aria-label="Chairman speech" className="relative overflow-hidden">
      <SectionWrapper>
        {/* Background Image */}
        <div
          className="hidden md:block absolute inset-0 w-full h-full bg-no-repeat bg-cover pointer-events-none"
          style={{
            backgroundImage: `url('/section-background.png')`,
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        />

        <ScrollAnimationWrapper>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/*Text content*/}
            <MotionDiv {...slideIn(-50)} className="md:w-1/2 lg:w-7/12 space-y-6">
              <MotionH1
                {...slideIn(-20)}
                className={`text-2xl md:text-4xl text-gray-800 font-prata leading-normal md:leading-normal w-full`}
              >
                {data?.[`name_${lang}`]}
              </MotionH1>
              <div className="w-16 h-1 bg-red-500" />

              <p className="text-gray-600 leading-relaxed line-clamp-6 text-justify tracking-tight">
                {parseHtml(data?.[`content_${lang}`])}
              </p>

              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E1BB78] text-white px-10 py-2 rounded-full text-xl hover:bg-[#D1AB68] transition-colors"
              >
                <Link href={`/${lang}/aboutus/aniia`}>{detailed_button[lang]}</Link>
              </MotionButton>
            </MotionDiv>
            {/*Image content*/}
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="w-full md:w-2/5 aspect-[3/4] px-0 py-5"
            >
              <div className="relative w-full h-full [perspective:1000px]">
                <div className="md:[transform:rotateY(-10deg)] md:[transform-style:preserve-3d] w-full h-full overflow-hidden rounded-xl shadow">
                  <Image
                    src={`/media-sources/${data?.image}` || "/chairman.png"}
                    alt="chairman"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
              </div>
            </MotionDiv>
          </div>
          {/*<div className="flex flex-col lg:flex-row items-center">*/}
          {/*  /!* Text Content *!/*/}
          {/*  <MotionDiv*/}
          {/*    {...slideIn(-50)}*/}
          {/*    className="flex flex-col gap-5 w-full lg:w-7/12"*/}
          {/*  >*/}
          {/*    <MotionH1*/}
          {/*      {...slideIn(-20)}*/}
          {/*      className={`text-2xl md:text-4xl text-gray-800 font-prata leading-normal md:leading-normal w-full`}*/}
          {/*    >*/}
          {/*      {data?.[`name_${lang}`]}*/}
          {/*    </MotionH1>*/}
          {/*    <div className="w-16 h-1 bg-red-500" />*/}
          {/*    <p className="text-gray-600 leading-relaxed line-clamp-6 text-justify tracking-tight">*/}
          {/*      {parseHtml(data?.[`content_${lang}`])}*/}
          {/*    </p>*/}
          {/*    <div className="">*/}
          {/*      <Link*/}
          {/*        href={`/${lang}/aboutus/speech`}*/}
          {/*        className="bg-transparent text-gray-800 border border-gray-300 px-8 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors"*/}
          {/*      >*/}
          {/*        {labels[lang]}*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*  </MotionDiv>*/}
          {/*  /!* Images *!/*/}
          {/*  <MotionDiv*/}
          {/*    initial={{ opacity: 0, x: 50 }}*/}
          {/*    whileInView={{ opacity: 1, x: 0 }}*/}
          {/*    viewport={{ once: true }}*/} {/*  <MotionDiv*/}
          {/*    initial={{ opacity: 0, x: 50 }}*/}
          {/*    whileInView={{ opacity: 1, x: 0 }}*/}
          {/*    viewport={{ once: true }}*/}
          {/*    transition={{ duration: 0.55, delay: 0.25 }}*/}
          {/*    className="w-full md:w-2/5 aspect-[3/4] px-0 py-5"*/}
          {/*  >*/}
          {/*    <div className="relative w-full h-full">*/}
          {/*      <Image*/}
          {/*        src="/chairman.png"*/}
          {/*        alt="chairman"*/}
          {/*        fill={true}*/}
          {/*        quality={100}*/}
          {/*        className="object-cover"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </MotionDiv>*/}
          {/*    transition={{ duration: 0.55, delay: 0.25 }}*/}
          {/*    className="w-full md:w-2/5 aspect-[3/4] px-0 py-5"*/}
          {/*  >*/}
          {/*    <div className="relative w-full h-full">*/}
          {/*      <Image*/}
          {/*        src="/chairman.png"*/}
          {/*        alt="chairman"*/}
          {/*        fill={true}*/}
          {/*        quality={100}*/}
          {/*        className="object-cover"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </MotionDiv>*/}
          {/*</div>*/}
        </ScrollAnimationWrapper>
      </SectionWrapper>
    </div>
  );
}
