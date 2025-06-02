import {motion} from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";

const HeroScrollCard = ({srcSet1, srcSet2, src, alt, index, title,currentSlide,SLIDE_DURATION}) => {
  return (
    <div key={index} className="flex-[0_0_100%] min-w-0">
      <AspectRatio ratio={16 / 9} className="overflow-hidden">
        {/* Background Image with srcset for responsive images */}
        <picture>
          <source media="(min-width: 1280px)" srcSet={srcSet1} />
          <source media="(min-width: 768px)" srcSet={srcSet2} />
          <img
            src={src}
            alt={alt}
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
                {title}
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
          <div className="absolute bg-black z-30 bottom-0 left-0 right-0 h-1 bg-navy-800/30">
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
  );
};

export default HeroScrollCard;
