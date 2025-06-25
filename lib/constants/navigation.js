export const navigation = [
  {
    title: "Haqqımızda",
    href: "#",
    children: [
      {
        title: "Ümumi məlumat",
        href: "/about-us",
      },
      {
        title: "Missiyamız",
        href: "/about-us/mission",
      },
      {
        title: "Nizamnamə",
        href: "/about-us/charter",
        isExternal: true,
      },
      {
        title: "Rəhbərlik",
        href: "#",
        children: [
          {
            title: "Müşahidə Şurası",
            href: "/about-us/management/supervisory-board",
          },
          {
            title: "İcraçı direktor",
            href: "/about-us/management/executive-director",
          },
          {
            title: "İcraçı direktorun müavinləri",
            href: "/about-us/management/deputy-directors",
          },
        ],
      },
      {
        title: "Struktur",
        href: "/about-us/structure",
        children: [
          {
            title: "Qrafik sxemi",
            href: "/about-us/structure/graphic-schema",
          },
          {
            title: "Şöbələr",
            href: "/about-us/structure/departments",
          },
        ],
      },
    ],
  },
  {
    title: "Qanunvericilik",
    href: "/legislation",
    children: [
      { title: "Konstitusiya", href: "/legislation/constitution" },
      { title: "Qanunlar", href: "/legislation/laws" },
      { title: "Sənədlər", href: "/legislation/documents",
        children: [
          {
            title: "Hesabatlar",
            href: "/about-us/legislation/documents/reports",
          },
          {
            title: "Təlimatlar",
            href: "/about-us/legislation/documents/instructions",
          },
          {
            title: "Əsasnamələr",
            href: "/about-us/legislation/documents/regulations",
          },
        ],
       },
    ],
  },
  {
    title: "Fəaliyyət",
    href: "/activities",
    children: [
      { title: "E-xidmətlər", href: "/activities/e-services" },
    ],
  },
  {
    title: "Media",
    href: "/media",
    children: [
      { title: "Xəbərlər", href: "/media/news" },
      { title: "Elanlar", href: "/media/announcements" },
      { title: "Fotoqalereya", href: "/media/photo-gallery" },
      { title: "Videoqalereya", href: "/media/video-gallery" }
    ],
  },
  { title: "Müraciət", href: "/apply",
    children: [
      { title: "Elektron müraciət", href: "/apply/electron-application" },
      { title: "Ən çox verilən suallar (FAQ)", href: "/apply/faq" },
    ],
   },
  { title: "Əlaqə", href: "/contact" },
];
