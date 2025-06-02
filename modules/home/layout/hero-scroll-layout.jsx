'use client';

import React, { useState, useEffect } from "react";
import {ChevronRight} from "lucide-react";

import {motion} from "framer-motion";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import useEmblaCarousel from 'embla-carousel-react';
import HeroScrollCard from "../ui/components/hero-scroll-card";
import { HeroScrollBtn } from "../ui/components/hero-scroll-btn";

const slides = [
  {
    title: "The roots of the Global South NGO Platform",
    countries: "127 countries",
    signatures: "1023 NGO signatures",
    description: "110-dan çox ölkədən QHT-lər Bakıya toplaşır",
    images: {
      mobile: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/global/hChsWWqZ2QxzRyUSfzwgG2BZuJfqkmJOAUmbfalT.jpg",
    },
  },
  {
    title: "Strengthening Civil Society Partnerships",
    countries: "50+ projects",
    signatures: "200+ organizations",
    description: "Vətəndaş cəmiyyəti təşkilatları ilə əməkdaşlıq",
    images: {
      mobile: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/global/Jez0ZCuxv9hHrfBiN30OcbSmEAwzcf6ValrvyK2B.jpg",
    },
  },
  {
    title: "Supporting Community Development",
    countries: "32 regions",
    signatures: "500+ initiatives",
    description: "İctimai inkişaf təşəbbüslərinə dəstək",
    images: {
      mobile: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/global/YQgo6frBCkY5CjaVxwLS9gh8889qnJRuGhhERNTm.jpg",
    },
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

const HeroScrollLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, SLIDE_DURATION);

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);

    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, currentSlide]);

  return (
    <section className="relative bg-gray-50 dark:bg-navy-950 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex flex-row flex-wrap gap-2 p-0.5 pointer-events-none" style={{ opacity: 0.1 }}>
        {Array.from({ length: 1000 }).map((_, i) => (
          <div key={i} className="text-gold-500" style={{ width:"30px" }}>
            +
          </div>
        ))}
      </div>

      <div className="w-[80%] m-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <HeroScrollCard 
                key={index} 
                index={index}
                src={slide.images.desktop}
                srcSet1={slide.images.desktop}
                srcSet2={slide.images.tablet}
                title={slide.title}
                currentSlide={currentSlide} 
                SLIDE_DURATION={SLIDE_DURATION}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <HeroScrollBtn
          emblaApi={emblaApi}
          clsName="hidden md:block"
        />

        {/* Slide Indicators */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center gap-3 py-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-10 bg-gold-500" 
                  : "w-2.5 bg-gray-400 hover:bg-gray-300"
              }`}
              onClick={() => {
                emblaApi?.scrollTo(index);
                setCurrentSlide(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroScrollLayout;