import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';

import {ChevronRight, Home} from 'lucide-react';

const PageHeader = ({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  className = ""
}) => {
  return (
    <div className={`relative bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-200 overflow-hidden ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
      )}

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d69a33' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2 text-xs md:text-sm">
            <li>
              <Link
                href="/"
                className="flex items-center text-gray-500 hover:text-gold-600 transition-colors duration-200"
              >
                <Home className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                Ana səhifə
              </Link>
            </li>
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-300 mx-1 md:mx-2" />
                {item.href && index < breadcrumbs.length - 1 ? (
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gold-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gold-600 font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Title Section */}
        {/*<motion.div*/}
        {/*  initial={{ opacity: 0, y: 20 }}*/}
        {/*  animate={{ opacity: 1, y: 0 }}*/}
        {/*  transition={{ duration: 0.6, delay: 0.2 }}*/}
        {/*  className="text-center md:text-left"*/}
        {/*>*/}
        {/*  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-gray-900">*/}
        {/*    {title}*/}
        {/*  </h1>*/}
        {/*  */}
        {/*  /!* Gold accent line *!/*/}
        {/*  <div className="w-16 h-0.5 bg-gold-500 mx-auto md:mx-0 mb-3"></div>*/}
        {/*  */}
        {/*  {subtitle && (*/}
        {/*    <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed">*/}
        {/*      {subtitle}*/}
        {/*    </p>*/}
        {/*  )}*/}
        {/*</motion.div>*/}
      </div>
    </div>
  );
};

export default PageHeader;