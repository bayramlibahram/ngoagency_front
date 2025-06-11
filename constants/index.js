import { CalendarDays, CheckCircle, FileSpreadsheet, FileText, Film, Globe, HelpCircle, PieChart, Settings, Users2, Wallet2 } from "lucide-react";

//TODO: implement n811 in future
export const detailed_button = {
  az: "Ətraflı",
  en: "More",
  ru: "Более",
};

export const data = [
  {
    title: "The roots of the Global South NGO Platform",
    countries: "127 countries",
    signatures: "1023 NGO signatures",
    description: "110-dan çox ölkədən QHT-lər Bakıya toplaşır",
    images: {
      mobile:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/global/hChsWWqZ2QxzRyUSfzwgG2BZuJfqkmJOAUmbfalT.jpg",
    },
  },
  {
    title: "Strengthening Civil Society Partnerships",
    countries: "50+ projects",
    signatures: "200+ organizations",
    description: "Vətəndaş cəmiyyəti təşkilatları ilə əməkdaşlıq",
    images: {
      mobile:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/global/Jez0ZCuxv9hHrfBiN30OcbSmEAwzcf6ValrvyK2B.jpg",
    },
  },
  {
    title: "Supporting Community Development",
    countries: "32 regions",
    signatures: "500+ initiatives",
    description: "İctimai inkişaf təşəbbüslərinə dəstək",
    images: {
      mobile:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=1",
      tablet:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=2",
      desktop: "/global/YQgo6frBCkY5CjaVxwLS9gh8889qnJRuGhhERNTm.jpg",
    },
  },
];

export const blogData = [
  {
    id: 1,
    post_date: "1 May, 2023",
    post_title: "QHT-lər üçün strateji planaşdırma",
    src: "",
    alt: "",
    description: "Strateji planaşdırma üzrə təlimat və tövsiyələr",
    tag: "Digər",
    url: "#",
    isNew: true,
    views: 245,
  },
  {
    id: 2,
    post_date: "1 May, 2023",
    post_title: "QHT-lər üçün strateji planaşdırma",
    src: "",
    alt: "",
    description: "Strateji planaşdırma üzrə təlimat və tövsiyələr",
    tag: "Digər",
    url: "#",
    isNew: true,
    views: 245,
  },
  {
    id: 3,
    post_date: "1 May, 2023",
    post_title: "QHT-lər üçün strateji planaşdırma",
    src: "",
    alt: "",
    description: "Strateji planaşdırma üzrə təlimat və tövsiyələr",
    tag: "Digər",
    url: "#",
    isNew: true,
    views: 245,
  },
];

export const CARD_DATA = [
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

export const stats = [
  {
    icon: <Wallet2 className="h-6 w-6 text-gold-600 dark:text-gold-400" />,
    value: "145",
    title: "Maliyyələşdirilən layihələr",
    description: "Agentlik tərəfindən maliyyələşdirilən layihələrin sayı",
    trend: { value: 12.5, isPositive: true }
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-gold-600 dark:text-gold-400" />,
    value: "89",
    title: "Keçirilən tədbirlər",
    description: "Təşkil olunan tədbirlərin ümumi sayı",
    trend: { value: 8.3, isPositive: true }
  },
  {
    icon: <Users2 className="h-6 w-6 text-gold-600 dark:text-gold-400" />,
    value: "234",
    title: "Görüşlər",
    description: "Reallaşdırılan görüşlərin sayı",
    trend: { value: 15.2, isPositive: true }
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6 text-gold-600 dark:text-gold-400" />,
    value: "56",
    title: "Proqramlar",
    description: "Hazırlanan və həyata keçirilən proqramların sayı",
    trend: { value: 5.7, isPositive: true }
  }
];

export const resources = [
  {
    icon: <Globe />,
    title: "Saytlar",
    description: "Agentliyin dəstəyi ilə hazırlanmış saytlar",
    category: "Veb"
  },
  {
    icon: <Film />,
    title: "Filmlər",
    description: "Agentliyin dəstəyi ilə hazırlanmış filmlər",
    category: "Media"
  },
  {
    icon: <FileText />,
    title: "Nəşrlər",
    description: "Agentliyin dəstəyi ilə hazırlanmış nəşrlər",
    category: "Sənəd"
  },
  {
    icon: <HelpCircle />,
    title: "Digər",
    description: "Agentliyin dəstəyi ilə hazırlanmış digər",
    category: "Müxtəlif"
  }
];


export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
