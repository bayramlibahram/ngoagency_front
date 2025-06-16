"use client";

import { motion } from "framer-motion";

import { containerVariants, stats } from "@/constants";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import SectionTitle from "@/components/custom-components/section-title";
import { StatsCard } from "@/components/ui/stats-card";

export default function StatsSection({ title, twVariants = {} }) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-navy-950 dark:to-navy-900 relative overflow-hidden">
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
          <SectionTitle title={title} variants={containerVariants} twVariants={twVariants}/>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatsCard
                icon={stat.icon}
                value={stat.value}
                title={stat.title}
                description={stat.description}
                trend={stat.trend}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
