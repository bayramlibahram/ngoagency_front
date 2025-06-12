"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { ChevronRight } from "lucide-react";

import CardLightSection from "@/components/custom-components/card-light-section";

// card-lar eyni olduguna gore burada component kimi yazib asagida props-lar ile temin edilecekler.
const CardLightContents = ({ title, description, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Link href={link}>
      <CardLightSection>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gold-500 group-hover:translate-x-2 transition-transform">
          Ətraflı
          <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </CardLightSection>
    </Link>
  </motion.div>
);

const page = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="bg-[#f8f9fa] rounded-lg overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row">
            <motion.div
              className="lg:w-[40%]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Agency workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="lg:w-[60%] p-8 lg:p-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-8 text-gray-900">
                Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi
              </h1>
              <div className="space-y-6 text-gray-700">
                <p>
                  Agentlik vətəndaş cəmiyyəti təşəbbüslərinə və QHT-lərə dəstək göstərən dövlət
                  qurumudur. Biz QHT-lərin fəaliyyətinin təkmilləşdirilməsi, onların potensialının
                  gücləndirilməsi və inkişafının dəstəklənməsi istiqamətində çalışırıq.
                </p>
                <p>
                  Agentliyin əsas məqsədi vətəndaş cəmiyyətinin inkişafına töhfə vermək, QHT-lərin
                  fəaliyyətini dəstəkləmək və bu sahədə şəffaflığı artırmaqdır. Biz QHT-lərlə sıx
                  əməkdaşlıq edərək, onların layihələrini maliyyələşdirir və texniki dəstək
                  göstəririk.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CardLightContents
            title={`Ümumi məlumat`}
            description={`Agentliyin yaranma tarixi, inkişaf mərhələləri və əsas nailiyyətləri haqqında məlumat.`}
            link={"/about/general-info"}
          />

          <CardLightContents
            title={`Missiyamız`}
            description={`Agentliyin missiyası, dəyərləri və gələcək hədəfləri haqqında məlumat.`}
            link={"/mission"}
          />

          <CardLightContents
            title={`Nizamnamə`}
            description={`Agentliyin nizamnaməsi və fəaliyyətini tənzimləyən digər sənədlər.`}
            link={"/charter"}
          />
        </section>
      </motion.div>
    </div>
  );
};

export default page;
