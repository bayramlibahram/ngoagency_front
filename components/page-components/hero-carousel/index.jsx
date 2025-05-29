"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MotionDiv } from "@/components/motion-components";
import { detailed_button } from "@/constants";
import { ChevronRight } from "lucide-react";
import SiteWrapper from "@/components/layout-components/site-wrapper";

const SLIDE_DURATION = 7000;
export default function HeroCarousel({ slides = [], lang = "en" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);

  // Safe interval management
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // ProgressBar reset and auto-advance setup
  const startProgress = useCallback(() => {
    setProgressKey((k) => k + 1); // Reset progress animation
    clearTimer();
    timerRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, SLIDE_DURATION);
  }, [emblaApi, clearTimer]);

  // On Embla ready, hook to slide changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
      startProgress();
    };

    // Initial setup and listener
    emblaApi.on("select", onSelect);
    // Setup first progress bar/timer
    setCurrentSlide(emblaApi.selectedScrollSnap());
    startProgress();

    return () => {
      clearTimer();
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, startProgress, clearTimer]);

  // Restart animation/timer if slides prop changes
  useEffect(() => {
    if (!emblaApi || slides.length === 0) return;
    emblaApi.scrollTo(0);
    setCurrentSlide(0);
    startProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]); // Only when slide count changes!

  // Manual navigation handlers
  const goToSlide = useCallback(
    (idx) => {
      if (emblaApi) {
        // Progress is automatically synced by 'select' event
        emblaApi.scrollTo(idx);
      }
    },
    [emblaApi]
  );

  // Next Prev navigation handlers
  const goPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const goNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div aria-label="Hero slider" className="relative bg-gray-50 dark:bg-navy-950 text-white">
      <SiteWrapper>
        <div className="relative">
          {/*Slider content*/}
          <div className="overflow-hidden" ref={emblaRef}>
            {/*Do not remove the flex*/}
            <div className="flex">
              {slides?.map((slide, index) => {
                return (
                  <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                    <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/8]">
                      {/* Responsive Image */}
                      <picture>
                        <source
                          media="(min-width: 1280px)"
                          srcSet={`/media-sources/${slide.post_image}`}
                        />
                        <source
                          media="(min-width: 768px)"
                          srcSet={`/media-sources/${slide.post_image}`}
                        />
                        <img
                          src={`/media-sources/${slide.post_image}`}
                          alt={slide.title || "Slide image"}
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] hover:scale-110"
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="100vw"
                        />
                      </picture>

                      {/* Overlay gradients */}
                      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/20 via-navy-950/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent opacity-90" />
                      {/* Slide content */}
                      <div className="absolute bottom-0 lg:bottom-[2rem] left-0 right-0 container mx-auto p-0 lg:px-4 flex items-center">
                        <MotionDiv
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="isolate relative max-w-5xl backdrop-blur-sm bg-navy-950/20 p-3 lg:p-6 lg:rounded-xl "
                        >
                          <h2 className="sm:text-xs md:text-xl lg:text-2xl font-prata lg:mb-4 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-red-300-300 to-red-400">
                              {slide[`title_${lang}`] || slide.title || ""}
                            </span>
                          </h2>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 rounded transition-colors duration-300 items-center group"
                          >
                            {detailed_button[lang]}
                          </motion.button>
                          <Link
                            href={`/${lang || "az"}/blog/detail/${slide[`url_${lang}`] || "#"}`}
                          >
                            <span className="absolute inset-0"></span>
                          </Link>
                        </MotionDiv>
                      </div>
                      {/* Animated Progress Bar */}
                      {currentSlide === index && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy-800/30">
                          <motion.div
                            key={progressKey}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: SLIDE_DURATION / 1000,
                              ease: "easeInOut",
                            }}
                            className="h-full bg-red-700"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-gold-600/10 hover:bg-gold-600/20 backdrop-blur-sm border-none text-white md:p-3 rounded-full z-10"
            aria-label="Previous slide"
            tabIndex={0}
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={goNext}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-gold-600/10 hover:bg-gold-600/20 backdrop-blur-sm border-none text-white md:p-3 rounded-full z-10"
            aria-label="Next slide"
            tabIndex={0}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </SiteWrapper>
    </div>
  );
}
