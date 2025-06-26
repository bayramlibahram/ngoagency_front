import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation } from "@/lib/constants/navigation";
import CustomContainer from "@/components/custom-components/custom-container";

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex flex-row flex-wrap gap-2 p-0.5 pointer-events-none opacity-5">
        {Array.from({ length: 250 }).map((_, i) => (
          <div key={i} className="text-gold-500" style={{ width: "30px" }}>
            +
          </div>
        ))}
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <CustomContainer>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Logo and About Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src="/global/logo-vertical.png" alt="Logo" className="h-16 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi vətəndaş cəmiyyəti
                təşəbbüslərinə və QHT-lərə dəstək göstərən dövlət qurumudur.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold-500">Sürətli Keçid</h3>
              <ul className="space-y-4">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* E-Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold-500">E-Xidmətlər</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/services/application"
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                    E-Müraciət
                  </a>
                </li>
                <li>
                  <a
                    href="/services/expertise"
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                    E-Ekspertiza
                  </a>
                </li>
                <li>
                  <a
                    href="/services/contract"
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                    E-Müqavilə
                  </a>
                </li>
                <li>
                  <a
                    href="/services/management"
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                    E-İdarəetmə
                  </a>
                </li>
                <li>
                  <a
                    href="/services/report"
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                    E-Hesabat
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold-500">Əlaqə</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 hover:text-gold-500 transition-colors duration-300">
                    Bakı şəhəri, Nərimanov rayonu, Əhməd Rəcəbli küçəsi 1, AZ1052
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 text-gold-500 mr-3 flex-shrink-0" />
                  <a
                    href="tel:+994124933717"
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                  >
                    +994 (12) 493-37-17
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-6 w-6 text-gold-500 mr-3 flex-shrink-0" />
                  <a
                    href="mailto:info@ngoagency.gov.az"
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
                  >
                    info@ngoagency.gov.az
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </CustomContainer>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p className="mb-4 md:mb-0">
                © 2024 Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi. Bütün hüquqlar
                qorunur.
              </p>
              <div className="flex space-x-8">
                <a href="/privacy" className="hover:text-gold-500 transition-colors duration-300">
                  Məxfilik siyasəti
                </a>
                <a href="/terms" className="hover:text-gold-500 transition-colors duration-300">
                  İstifadə şərtləri
                </a>
                <a href="/sitemap" className="hover:text-gold-500 transition-colors duration-300">
                  Saytın xəritəsi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
