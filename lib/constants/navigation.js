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
            title: "Müavinlər",
            href: "/about-us/management/deputy-directors",
          },
        ],
      },
      {
        title: "Struktur",
        href: "/about-us/structure",
        children: [
          {
            title: "Struktur sxemi",
            href: "/about-us/structure/schema",
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
