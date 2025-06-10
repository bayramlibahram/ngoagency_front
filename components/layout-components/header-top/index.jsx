'use client';

import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from 'framer-motion';

const HeaderTop = () => {
  const controls = useAnimation();
  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div ref={bannerRef} className="relative overflow-hidden border-b border-gold-500/20 dark:bg-navy-950 py-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex flex-row flex-wrap gap-2 p-0.5 pointer-events-none" style={{ opacity: 0.1 }}>
        {Array.from({ length: 250 }).map((_, i) => (
          <div key={i} className="text-gold-500" style={{ width:"30px" }}>
            +
          </div>
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10 flex items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="flex-1 text-center md:text-right text-navy-800 dark:text-navy-200 font-serif italic text-sm md:text-base relative pr-4"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-3">
            <div className="relative">
              "Demokratiyanın inkişafı, vətəndaş cəmiyyətinin formalaşması Azərbaycanda dövlət siyasətinin əsas istiqamətlərindən biridir."

              <motion.div
                  className="h-full bg-gold-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1 }}
              />
            </div>
            <div className="relative">
              <img
                  src="/global/Signature_of_Heydar_Aliyev.png"
                  alt="Heydər Əliyev"
                  className="w-full h-full object-contain"
                  style={{
                    width:"10%",
                    display:"inline-block",
                  }}
              />
              <div className="h-0.5 w-0 md:w-24 bg-gold-400 absolute right-0 bottom-0 mt-1">
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-32 h-32 md:w-40 md:h-30 flex-shrink-0"
        >
          <img
            src="/global/HA.png"
            alt="Heydər Əliyev"
            className="w-full h-full object-contain"
            style={{
              width:"100%",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeaderTop;