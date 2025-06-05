"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Menu,
  Search,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { ThemeToggle } from "../theme/theme-toggle";

const navigation = [
  {
    title: "Haqqımızda",
    href: "/about",
    children: [
      { title: "Agentlik haqqında", href: "/about/agency" },
      { title: "Rəhbərlik", href: "/about/leadership" },
      { title: "Struktur", href: "/about/structure" },
      { title: "Nizamnamə", href: "/about/charter" },
    ],
  },
  {
    title: "Qanunvericilik",
    href: "/legislation",
    children: [
      { title: "Qanunlar", href: "/legislation/laws" },
      { title: "Fərmanlar", href: "/legislation/decrees" },
      { title: "Sərəncamlar", href: "/legislation/orders" },
    ],
  },
  {
    title: "Fəaliyyət",
    href: "/activities",
    children: [
      { title: "E-xidmətlər", href: "/activities/e-services" },
      { title: "Layihələr", href: "/activities/projects" },
      { title: "Tədbirlər", href: "/activities/events" },
    ],
  },
  {
    title: "Media",
    href: "/media",
    children: [
      { title: "Xəbərlər", href: "/media/news" },
      { title: "Elanlar", href: "/media/announcements" },
      { title: "Qalereya", href: "/media/gallery" },
    ],
  },
  { title: "Müraciət", href: "/apply" },
  { title: "Əlaqə", href: "/contact" },
];

const DesktopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDropdownMobile, setActiveDropdownMobile] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownHover = (title) => {
    setActiveDropdown(title);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (title) => {
    if (activeDropdownMobile.includes(title)) {
      // varsa, cixar
      setActiveDropdownMobile((prev) => prev.filter((item) => item !== title));
    } else {
      // yoxsa, elave edir
      setActiveDropdownMobile((prev) => [...prev, title]);
    }
  };

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "dark:bg-navy-950"
      )}
    >
      <div className="w-full">
        <div className="border-b">
          <div className="w-[80%] m-auto">
            <div className={"flex items-center justify-between"}>
              {/* Left: Logo and Language */}
              <div className="flex items-center space-x-6">
                <a href="/" className="flex items-center space-x-3 w-1/3 min-w-[220px]">
                  <img
                    src="/global/logo-vertical.png"
                    alt="logo"
                    className="w-full h-full object-fill"
                  />
                </a>
              </div>

              {/*Right side*/}
              <div className="flex items-center space-x-6">
                {/* Right: Search and Theme */}
                <div className="hidden lg:flex items-center space-x-4">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Axtar..."
                      className="w-64 pl-10 rounded-full"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="hidden md:flex items-center space-x-2">
                  <button className="btn-language btn-language-active">AZ</button>
                  <span className="text-muted-foreground">|</span>
                  <button className="btn-language">EN</button>
                  <button className="btn-language">RU</button>
                </div>

                {/* Center: Social Media */}
                <div className="hidden md:flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>

                <div className="flex items-center">
                  {/* Middle Section */}
                  <div className="flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
                      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                  </div>

                  {/*Theme changer*/}
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] m-auto">
          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7 justify-center h-20">
            {navigation.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(item.title)}
                onMouseLeave={handleDropdownLeave}
              >
                <a href={item.href} className="flex items-center nav-link px-4 py-2">
                  {item.title}
                  {item.children && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                {item.children && activeDropdown === item.title && (
                  <div className="absolute top-full left-0 w-64 bg-popover shadow-lg rounded-lg py-2 animate-in fade-in-0 zoom-in-95 border">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4">
              <div className="space-y-4">
                {/* Mobile Search */}
                <div className="relative px-4">
                  <Input type="search" placeholder="Axtar..." className="w-full pl-10" />
                  <Search className="absolute left-7 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.title} className="relative">
                      <div className="flex items-center">
                        <a
                          href={item.href}
                          className="block py-2 px-4 text-foreground hover:text-primary transition-colors"
                        >
                          {item.title}
                        </a>
                        {item.children &&
                          (activeDropdownMobile.length > 0 &&
                          activeDropdownMobile.includes(item.title) ? (
                            <ChevronUp
                              className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                              onClick={() => toggleDropdown(item.title)}
                            />
                          ) : (
                            <ChevronDown
                              className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                              onClick={() => toggleDropdown(item.title)}
                            />
                          ))}
                      </div>
                      {item.children && activeDropdownMobile.includes(item.title) && (
                        <div className="pl-8 space-y-2 mt-2">
                          {item.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {child.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Language Selector */}
                <div className="px-4 pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <button className="btn-language btn-language-active">AZ</button>
                    <span className="text-muted-foreground">|</span>
                    <button className="btn-language">EN</button>
                    <button className="btn-language">RU</button>
                  </div>
                </div>

                {/* Mobile Social Media */}
                <div className="flex items-center space-x-4 px-4 pt-4 border-t">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
