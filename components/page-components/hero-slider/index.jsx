"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { MotionH2 } from "@/components/motion-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider({ sliders, lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });
    }
  }, []);

  return (
    <div className="hero-slider relative w-[98%] m-auto h-[calc(100vw*0.6)] max-h-[1050px] sm:h-[420px] md:h-[520px] lg:h-[650px] xl:h-[1050px] overflow-hidden rounded-[0.5rem] md:rounded-[1rem] drop-shadow">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        effect="slide"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-1",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={false}
        className="w-full h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {sliders?.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={`/media-sources/${slide.post_image}`}
                alt={slide[`title_${lang}`]}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
              {activeIndex === index && (
                <AnimatePresence mode="wait">
                  <MotionDiv
                    key={slide.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute left-8 sm:left-12 md:left-16 top-2/3 lg:top-1/2 -translate-y-1/2 max-w-[80%] sm:max-w-[60%] md:w-[40%] text-white"
                  >
                    <h1 className="md:text-2xl lg:text-3xl lg:mb-2 text-white drop-shadow-lg leading-tight font-prata">
                      <Link href={`/${lang}/blog/${slide[`url_${lang}`]}`}>
                        {slide[`title_${lang}`]}
                      </Link>
                    </h1>
                    <MotionH2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="hidden md:block text-sm sm:text-base font-sans uppercase tracking-widest text-white drop-shadow-md mt-2 sm:mt-8 mb-4 sm:mb-6"
                    >
                      {slide[`description_${lang}`]}
                    </MotionH2>
                    <MotionDiv
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <Link
                        href={`/${lang}/blog/${slide[`url_${lang}`]}`}
                        className="hidden rounded lg:w-[30%] lg:flex items-center justify-center px-2 lg:px-2 py-2 text-sm sm:text-base font-medium text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg border border-white/30"
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
                    </MotionDiv>
                  </MotionDiv>
                </AnimatePresence>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="swiper-button-prev absolute left-2 sm:left-4 md:left-6 top-1/2 z-10 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button className="swiper-button-next absolute right-2 sm:right-4 md:right-6 top-1/2 z-10 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination swiper-pagination-1 absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"></div>
    </div>
  );
}
