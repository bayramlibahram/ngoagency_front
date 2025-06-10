export const navigation = [
  {
    title: "Haqqımızda",
    href: "/about",
    children: [
      {
        title: "Ümumi məlumat",
        href: "/about/general-info",
      },
      {
        title: "Missiyamız",
        href: "/about/mission",
      },
      {
        title: "Nizamnamə",
        href: "#",
        isExternal: true,
      },
      {
        title: "Rəhbərlik",
        href: "/about/management",
        children: [
          {
            title: "Müşahidə Şurası",
            href: "/about/management/supervisory-board",
          },
          {
            title: "İcraçı direktor",
            href: "/about/management/executive-director",
          },
          {
            title: "Müavinlər",
            href: "/about/management/deputy-directors",
          },
        ],
      },
      {
        title: "Struktur",
        href: "/about/structure",
        children: [
          {
            title: "Struktur sxemi",
            href: "/about/structure/schema",
          },
          {
            title: "Şöbələr",
            href: "/about/structure/departments",
          },
        ],
      },
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
