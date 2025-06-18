"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import parseHtml from "@/lib/html-parser";
import SectionWrapper from "@/components/custom-components/section-wrapper";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { MotionButton } from "@/components/motion-components/motion-button";
import { detailed_button } from "@/constants";
import AboutHero from "../about-hero";
import { ChevronRight } from "lucide-react";
import CardLightSection from "@/components/custom-components/card-light-section";
import CustomPageSection from "@/components/custom-components/custom-page-section";
import CustomContainer from "@/components/custom-components/custom-container";
import PageHeader from "@/components/layout-components/page-header";

const section_title = {
  az: "Haqqımızda",
  en: "About us",
  ru: "О нас",
};

// card-lar eyni olduguna gore burada component kimi yazib asagida props-lar ile temin edilecekler.
const CardLightContents = ({ title, description, link }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Link href={link}>
      <CardLightSection card="card">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gold-500 group-hover:translate-x-2 transition-transform">
          Ətraflı
          <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </CardLightSection>
    </Link>
  </MotionDiv>
);

export default function AboutSection({ lang, data, section_padding }) {
  const breadcrumbs = [{ label: "Haqqımızda" }];
  return (
    <div aria-label="About Section">
      <PageHeader
        title="Haqqımızda"
        subtitle="Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi haqqında ümumi məlumat"
        breadcrumbs={breadcrumbs}
      />
      <CustomContainer>
        <CustomPageSection>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AboutHero />
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <CardLightContents
                title={`Ümumi məlumat`}
                description={`Agentliyin yaranma tarixi, inkişaf mərhələləri və əsas nailiyyətləri haqqında məlumat.`}
                link={"/about/general-info"}
              />

              <CardLightContents
                title={`Missiyamız`}
                description={`Agentliyin missiyası, dəyərləri və gələcək hədəfləri haqqında məlumat.`}
                link={"/mission"}
              />

              <CardLightContents
                title={`Nizamnamə`}
                description={`Agentliyin nizamnaməsi və fəaliyyətini tənzimləyən digər sənədlər.`}
                link={"/charter"}
              />
            </section>
          </MotionDiv>
        </CustomPageSection>
      </CustomContainer>
    </div>
  );
}
