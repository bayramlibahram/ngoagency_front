"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SectionWrapper from "@/components/custom-components/section-wrapper";

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function Hero({ data, lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
      const nextSlide = (currentSlide + 1) % data.length;
      setCurrentSlide(nextSlide);
    }, SLIDE_DURATION);

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, currentSlide]);

  return (
    <section className="relative overflow-hidden">
      <SectionWrapper>
        <div className="relative overflow-hidden rounded-2xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {data.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <AspectRatio ratio={16 / 10} className="overflow-hidden">
                    {/* Background Image with srcset for responsive images */}
                    <picture>
                      <source media="(min-width: 1000px)" srcSet={slide.images.desktop} />
                      <source media="(min-width: 750px)" srcSet={slide.images.tablet} />
                      <img
                        src={slide.images.mobile}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[2s]"
                        loading={index === 0 ? "eager" : "lazy"}
                        // sizes="100vw"
                      />
                    </picture>

                    {/* Lighter Overlay Gradients */}
                    {/*<div className="absolute inset-0 bg-gradient-to-r from-navy-950/20 via-navy-950/40 to-transparent" />*/}
                    {/*<div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent opacity-90" />*/}

                    {/* Content Container */}
                    <div className="absolute bottom-3 lg:bottom-[5rem] left-0 right-0 container mx-auto px-4 flex items-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl backdrop-blur-sm bg-navy-950/20 p-3 lg:p-8 rounded-2xl font-prata"
                      >
                        {/* Title, TODO: repair title by lang */}
                        <h2 className="md:text-xl lg:text-xl mb-0 lg:mb-6 leading-tight text-white">
                          {/* {slide[`title_${lang}`]} */} {slide.title}
                        </h2>

                        {/* CTA Button */}
                        <Link
                          href={`/${lang}/blog/${slide[`url_${lang}`]}`}
                          className="hidden rounded lg:w-[15%] lg:flex items-center justify-center px-2 lg:px-2 py-2 text-sm sm:text-base font-medium text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg border border-white/30"
                        >
                          {lang === "az" && "Ətraflı"}
                          {lang === "en" && "More"}
                          {lang === "ru" && "Более"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Progress Bar */}
                    {currentSlide === index && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy-800/30">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: SLIDE_DURATION / 1000,
                            ease: "linear",
                          }}
                          className="h-full bg-gold-500"
                        />
                      </div>
                    )}
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none text-white md:p-4 rounded-full z-10"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none text-white md:p-4 rounded-full z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </SectionWrapper>

      {/* Slide Indicators */}
      <div className="absolute -bottom-4 left-0 right-0 flex justify-center items-center gap-3 py-4">
        {data.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-10 bg-gold-500" : "w-2.5 bg-gray-400 hover:bg-gray-300"
            }`}
            onClick={() => {
              emblaApi?.scrollTo(index);
              setCurrentSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 flex flex-row flex-wrap gap-2 p-0.5 pointer-events-none"
        style={{ opacity: 0.1 }}
      >
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i} className="text-gold-500" style={{ width: "30px" }}>
            +
          </div>
        ))}
      </div>
    </section>
  );
}
