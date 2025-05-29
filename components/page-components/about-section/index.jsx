import React from "react";
import Link from "next/link";
import Image from "next/image";
import parseHtml from "@/lib/html-parser";
import SectionTitle from "@/components/custom-components/section-title";
import SectionWrapper from "@/components/custom-components/section-wrapper";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { MotionButton } from "@/components/motion-components/motion-button";
import { detailed_button } from "@/constants";

const section_title = {
  az: "Haqqımızda",
  en: "About us",
  ru: "О нас",
};

export default function AboutSection({ lang, data, section_padding }) {
  return (
    <div aria-label="About Section">
      <SectionWrapper>
        <ScrollAnimationWrapper>
          <SectionTitle title={section_title[lang]} />
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="md:w-1/2"
            >
              <Image
                src={`/media-sources/${data?.image}` || "/image-pomegranate.png"}
                alt="image-pomegranate"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="md:w-1/2 space-y-6"
            >
              <h2 className={`font-prata text-2xl md:text-3xl text-gray-700`}>
                {data?.[`name_${lang}`]}
              </h2>

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
          </MotionDiv>
        </ScrollAnimationWrapper>
      </SectionWrapper>
    </div>
  );
}
