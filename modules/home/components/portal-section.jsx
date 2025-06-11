'use client';

import React from 'react';
import {CheckCircle, ChevronRight, FileText, PieChart, Settings} from 'lucide-react';
import {Card, CardContent} from "@/components/ui/card";
import {motion} from 'framer-motion';

const CARD_DATA = [
  {
    title: "E-Ərizə",
    description: "Sənədlərin elektron qəbulu və emalı",
    icon: FileText,
  },
  {
    title: "E-Müqavilə",
    description: "Sənədlərin razılaşdırılması və müqavilələrin online imzalanması",
    icon: CheckCircle,
  },
  {
    title: "E-İdarəetmə",
    description: "Layihələrin elektron idarə edilməsi",
    icon: Settings,
  },
  {
    title: "E-Hesabat",
    description: "Təsviri və maliyyə hesabatlarının elektron qəbulu",
    icon: PieChart,
  }
];

const PortalSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const MainCard = () => (
    <motion.div variants={itemVariants} className="h-full flex items-center">
      <Card className="md:h-[250px] bg-gradient-to-br from-gold-600 to-gold-500 dark:from-gold-500 dark:to-gold-600 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative h-full transform hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-x-10 translate-y-10"></div>
        <CardContent className="p-8 sm:p-10 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-2xl font-bold mb-6">
              Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyinin Elektron Xidmətlər Portalı
            </h2>
          </div>
          <motion.a
            href="#"
            className="inline-flex items-center bg-white text-gold-700 dark:bg-navy-900 dark:text-gold-400 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors duration-300 group w-fit"
            whileHover={{ x: 5 }}
          >
            <span>Portala keçid</span>
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  );

  const SmallCard = ({
    title,
    description,
    Icon
  }) => (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="border border-gray-100 dark:border-navy-800 hover:border-gold-200 dark:hover:border-gold-800 transition-all duration-300 hover:shadow-lg group h-full bg-white dark:bg-navy-900">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="h-12 w-12 bg-gold-50 dark:bg-gold-900/20 rounded-full flex items-center justify-center text-gold-600 dark:text-gold-400 mb-4 group-hover:bg-gold-100 dark:group-hover:bg-gold-900/30 transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
            {description}
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 text-sm font-medium group/link"
            whileHover={{ x: 5 }}
          >
            Keçid et
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
          </motion.a>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-navy-950 dark:to-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl items-center">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="section-header"
        >
          <h2 className="section-title">Elektron xidmətlər portalı</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          <MainCard />
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {CARD_DATA.map((card, index) => (
              <SmallCard key={index} {...card} Icon={card.icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;