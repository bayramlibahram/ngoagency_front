import Link from "next/link";
import Image from "next/image";
import SiteWrapper from "@/components/layout-components/site-wrapper";
import FbIcon from "@/components/icon-components/fb-icon";
import InstaIcon from "@/components/icon-components/insta-icon";
import XComIcon from "@/components/icon-components/xcom-icon";
import YTubeIcon from "@/components/icon-components/ytube-icon";
import SectionWrapper from "@/components/custom-components/section-wrapper";

const iconMapping = {
  facebook: <FbIcon />,
  instagram: <InstaIcon />,
  x_com: <XComIcon />,
  youtube: <YTubeIcon />,
};

export default function Footer({ socials, lang }) {
  return (
    <footer className="site-footer bg-[#1C1C1C] text-white pt-16 pb-6">
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Description Section */}
          <div className="lg:col-span-4">
            <Image src="/logo.svg" alt="ANiiA Logo" width={216} height={72} className="mb-6" />
            <p className="text-gray-300 text-sm mb-8 max-w-md">
              ANİİA nəşr istehsalını və ixracını dəstəkləyir, keyfiyyəti artırmaq üçün təlim və
              dəstək verir və beynəlxalq sərgilərdə iştirak edir.
            </p>
            <div className="flex space-x-4">
              {socials?.map((social) => {
                return (
                  <Link
                    key={social.id}
                    href={social.social_url}
                    target={`_blank`}
                    className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-red-500 transition-colors"
                  >
                    <img src={`/media-sources/${social?.social_icon}`} alt="" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-medium mb-6 pb-2 border-b-2 border-red-500 inline-block">
              HAQQIMIZDA
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  ANİİA
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Sədrin müraciəti
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Qalereya
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Üzvlər
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Rəhbərlik
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-medium mb-6 pb-2 border-b-2 border-red-500 inline-block">
              ƏSAS MENYU
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Nəşr haqqında
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Tədbirlər
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Proseslər
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  İxrac
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Bloq
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-500">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-medium mb-6 pb-2 border-b-2 border-red-500 inline-block">
              ƏLAQƏ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-gray-300">+994 (12) 510 29 29</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-300">+994 (12) 510 36 33</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-300">info@pomegranate.az</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-300">Bakı, Azərbaycan, AZ 1065</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-12 pt-6">
        <SiteWrapper>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2016 - {new Date().getFullYear()} ANİİA.</p>
            <p className="text-gray-400 text-sm">
              {lang === "az" && "Bütün hüquqlar qorunur."}
              {lang === "en" && "All rights reserved."}
              {lang === "ru" && "Все права защищены."}
            </p>
          </div>
        </SiteWrapper>
      </div>
    </footer>
  );
}
