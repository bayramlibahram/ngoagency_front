"use client";
import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import SectionWrapper from "@/components/custom-components/section-wrapper";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import SectionTitle from "@/components/custom-components/section-title";
import styles from "./partner-slider.module.css";
import SiteWrapper from "@/components/layout-components/site-wrapper";

// Constants
const section_titles = {
  az: "Partnyorlarımız",
  en: "Partners",
  ru: "Партнеры",
};

const emblaOptions = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
  breakpoints: {
    "(min-width: 640px)": { slidesToScroll: 2 }, // sm
    "(min-width: 768px)": { slidesToScroll: 3 }, // md
    "(min-width: 1024px)": { slidesToScroll: 4 }, // lg
    "(min-width: 1280px)": { slidesToScroll: 5 }, // xl
    "(min-width: 1536px)": { slidesToScroll: 6 }, // 2xl
  },
  containScroll: "trimSnaps",
  inViewThreshold: 0.2,
  skipSnaps: false,
};

const slideClass =
  "flex-[0_0_100%] min-w-0 " + // mobile (1 per row)
  "sm:flex-[0_0_50%] " + // sm (2 per row)
  "md:flex-[0_0_33.3333%] " + // md (3 per row)
  "lg:flex-[0_0_25%] " + // lg (4 per row)
  "xl:flex-[0_0_20%] " + // xl (5 per row)
  "2xl:flex-[0_0_16.6667%] " + // 2 xl (6 per row)
  "px-2"; // padding between slides

const renderPartnerSlides = (data, lang) => {
  return data?.map((partner) => (
    <div className={slideClass} key={partner.id}>
      <Link
        target="_blank"
        className="block"
        href={`${partner[`url_${lang}`] || "#"}`}
        rel="noopener noreferrer"
      >
        <div className={`rounded-2xl md:rounded-[0.75rem] ${styles.slideContent} p-5`}>
          <div className="bg-white relative w-full h-[220px] md:h-[140px] rounded overflow-hidden">
            <Image
              src={`/media-sources/${partner.image || "placeholder.svg"}`}
              alt={partner[`name_${lang}`] || "Partner"}
              loading="lazy"
              fill
              quality={80}
              className="object-contain object-center"
            />
          </div>
        </div>
      </Link>
    </div>
  ));
};

export default function PartnersSection({ data, lang }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;

    function handleSelect() {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
    function handleResize() {
      setPageCount(emblaApi.scrollSnapList().length);
    }

    setPageCount(emblaApi.scrollSnapList().length); // On mount

    emblaApi.on("select", handleSelect);
    emblaApi.on("resize", handleResize);

    handleSelect();

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("resize", handleResize);
    };
  }, [emblaApi, data?.length]);

  return (
    <div aria-label="Partners">
      <SectionWrapper>
        <ScrollAnimationWrapper>
          <SectionTitle title={section_titles[lang]} />
          <div className={styles.partnerSliderContainer}>
            <div className={`w-full max-w-7xl mx-auto lg:px-4 relative ${styles.sliderWrapper}`}>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -mx-2">{renderPartnerSlides(data, lang)}</div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block  my-4">
            <div className={`${styles.customPagination} z-10`}>
              {[...Array(pageCount)].map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to page ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    selectedIndex === i ? styles.dotActive : styles.dot
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </SectionWrapper>
    </div>
  );
}
