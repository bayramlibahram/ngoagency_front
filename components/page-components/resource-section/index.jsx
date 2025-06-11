"use client";

import React from "react";
import { motion } from "framer-motion";

import { containerVariants, resources } from "@/constants";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import SectionTitle from "@/components/custom-components/section-title";
import { Card } from "@/components/ui/card";

const ResourceCard = ({ icon, title, description }) => (
  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
    <Card className="group relative overflow-hidden bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-none hover:shadow-lg transition-all duration-300 backdrop-blur-md">
      <div className="p-6 flex flex-col items-center text-center relative">
        `{/* Icon circle */}
        <div className="mb-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-primary/30 backdrop-blur-xl flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(icon, {
              className:
                "h-7 w-7 text-primary group-hover:text-primary-700 transition-colors duration-300",
            })}
          </div>
        </div>
        {/* Title */}
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{title}</h3>
        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">{description}</p>
      </div>
    </Card>
  </motion.div>
);

export default function ResourceSection({ title }) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-background/60">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex flex-row flex-wrap gap-2 p-0.5 pointer-events-none opacity-5">
        {Array.from({ length: 250 }).map((_, i) => (
          <div key={i} className="text-gold-500" style={{ width: "30px" }}>
            +
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollAnimationWrapper>
          <SectionTitle title={title} variants={containerVariants} />
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResourceCard {...resource} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
