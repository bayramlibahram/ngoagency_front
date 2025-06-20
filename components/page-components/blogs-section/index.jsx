import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/custom-components/section-wrapper";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import AnimationComponent from "@/components/custom-components/animation-component";
import SectionTitle from "@/components/custom-components/section-title";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { MotionButton } from "@/components/motion-components/motion-button";
import { formatDate } from "@/utils/formatDate.util";
import PCalendarIcon from "@/components/icon-components/calendar-icon";
import BlogList from "@/components/page-components/blog-list";
import { ChevronRight } from "lucide-react";

const sectionTitle = {
  az: "Bloq",
  en: "Blog",
  ru: "Блог",
};
const sectionButton = {
  az: "Ətraflı",
  en: "More",
  ru: "Более",
};

export default function BlogsSection({ data, lang, title, variants }) {
  return (
    <div aria-label={sectionTitle[lang]} className="blogs-section">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <SectionTitle title={title} variants={variants} />
        </ScrollAnimationWrapper>
        <BlogList data={data} lang={lang} />
        <ScrollAnimationWrapper>
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center justify-center my-6 lg:my-8">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#E1BB78] text-white px-10 py-2 rounded-full text-xl hover:bg-[#D1AB68] transition-colors flex items-center gap-2"
              >
                <Link href={`/${lang}/blog`}>
                  {sectionButton[lang]}
                </Link>
                <ChevronRight className="h-4 w-4" />
              </MotionButton>
            </div>
          </MotionDiv>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
