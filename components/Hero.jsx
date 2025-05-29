import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const slides = [
  {
    title: "The roots of the Global South NGO Platform",
    countries: "127 countries",
    signatures: "1023 NGO signatures",
    description: "110-dan çox ölkədən QHT-lər Bakıya toplaşır",
    images: {
      mobile:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/hChsWWqZ2QxzRyUSfzwgG2BZuJfqkmJOAUmbfalT.jpg",
    },
  },
  {
    title: "Strengthening Civil Society Partnerships",
    countries: "50+ projects",
    signatures: "200+ organizations",
    description: "Vətəndaş cəmiyyəti təşkilatları ilə əməkdaşlıq",
    images: {
      mobile:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/Jez0ZCuxv9hHrfBiN30OcbSmEAwzcf6ValrvyK2B.jpg",
    },
  },
  {
    title: "Supporting Community Development",
    countries: "32 regions",
    signatures: "500+ initiatives",
    description: "İctimai inkişaf təşəbbüslərinə dəstək",
    images: {
      mobile:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/YQgo6frBCkY5CjaVxwLS9gh8889qnJRuGhhERNTm.jpg",
    },
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

const Hero = () => {
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

    emblaApi.on("select", onSelect);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, currentSlide]);

  return (
    <section className="relative bg-gray-50 dark:bg-navy-950 text-white">
      {/* Background Pattern */}
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

      <div className="w-[80%] m-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <AspectRatio ratio={16 / 9} className="overflow-hidden">
                  {/* Background Image with srcset for responsive images */}
                  <picture>
                    <source media="(min-width: 1280px)" srcSet={slide.images.desktop} />
                    <source media="(min-width: 768px)" srcSet={slide.images.tablet} />
                    <img
                      src={slide.images.mobile}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[2s] hover:scale-110"
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="100vw"
                    />
                  </picture>

                  {/* Lighter Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950/20 via-navy-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent opacity-90" />

                  {/* Content Container */}
                  <div className="absolute bottom-[5rem] left-0 right-0 container mx-auto px-4 flex items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-5xl backdrop-blur-sm bg-navy-950/20 p-8 rounded-2xl"
                    >
                      {/* Title */}
                      <h1 className="md:text-xl lg:text-2xl font-bold mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500">
                          {slide.title}
                        </span>
                      </h1>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-2 rounded-full font-semibold transition-colors duration-300 flex items-center group"
                      >
                        Ətraflı
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </motion.button>
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none text-white md:p-6 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none text-white md:p-6 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center gap-3 py-4">
          {slides.map((_, index) => (
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
      </div>
    </section>
  );
};

export default Hero;
