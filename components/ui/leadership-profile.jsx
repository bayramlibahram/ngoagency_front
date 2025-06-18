import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LeadershipProfile = (
  ({ className, name, position, image, biography, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-navy-50 to-gold-50 px-8 py-6 border-b border-gray-100">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-navy-900 mb-2 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {name}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gold-600 font-semibold text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {position}
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Professional Image */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-[3/4] relative overflow-hidden rounded-xl shadow-xl">
                <img
                  src={image}
                  alt={`${name} - ${position}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target;
                    target.src = "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg";
                  }}
                />
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/5 to-transparent" />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-200 to-navy-200 rounded-xl -z-10 opacity-30" />
            </div>
          </motion.div>

          {/* Biography Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {biography.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-gray-700 leading-relaxed text-base md:text-lg text-justify"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Decorative bottom accent */}
          <motion.div 
            className="mt-8 pt-6 border-t border-gray-100"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-navy-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

LeadershipProfile.displayName = "LeadershipProfile";

export { LeadershipProfile };