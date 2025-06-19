import {
  CalendarDays,
  CheckCircle,
  FileSpreadsheet,
  FileText,
  Film,
  Globe,
  HelpCircle,
  PieChart,
  Settings,
  Users2,
  Wallet2,
} from "lucide-react";

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
  },
];

export const stats = [
  {
    icon: <Wallet2 className="h-6 w-6 text-gold-600 dark:text-gold-400" />,
    value: "145",
    title: "Maliyyələşdirilən layihələr",
    description: "Agentlik tərəfindən maliyyələşdirilən layihələrin sayı",
    trend: { value: 12.5, isPositive: true },
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-gold-600 dark:text-gold-400" />,
    value: "89",
    title: "Keçirilən tədbirlər",
    description: "Təşkil olunan tədbirlərin ümumi sayı",
    trend: { value: 8.3, isPositive: true },
  },
  {
    icon: <Users2 className="h-6 w-6 text-gold-600 dark:text-gold-400" />,
    value: "234",
    title: "Görüşlər",
    description: "Reallaşdırılan görüşlərin sayı",
    trend: { value: 15.2, isPositive: true },
  },
  {
    icon: <FileSpreadsheet className="h-6 w-6 text-gold-600 dark:text-gold-400" />,
    value: "56",
    title: "Proqramlar",
    description: "Hazırlanan və həyata keçirilən proqramların sayı",
    trend: { value: 5.7, isPositive: true },
  },
];

export const resources = [
  {
    icon: <Globe />,
    title: "Saytlar",
    description: "Agentliyin dəstəyi ilə hazırlanmış saytlar",
    category: "Veb",
  },
  {
    icon: <Film />,
    title: "Filmlər",
    description: "Agentliyin dəstəyi ilə hazırlanmış filmlər",
    category: "Media",
  },
  {
    icon: <FileText />,
    title: "Nəşrlər",
    description: "Agentliyin dəstəyi ilə hazırlanmış nəşrlər",
    category: "Sənəd",
  },
  {
    icon: <HelpCircle />,
    title: "Digər",
    description: "Agentliyin dəstəyi ilə hazırlanmış digər",
    category: "Müxtəlif",
  },
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

export const romanFontSectionTitleOptions = {
  size: "large",
  align: "center",
  color: "secondary",
  family: "roman",
};
export const interFontSectionLargeTitleOptions = {
  size: "large",
  align: "left",
  color: "primary",
  family: "inter",
};
export const interFontSectionMediumTitleOptions = {
  size: "medium",
  align: "left",
  color: "primary",
  family: "inter",
  weight: "medium",
};
export const interFontSectionSmallTitleOptions = {
  size: "small",
  family: "inter",
  weight: "medium",
  color: "primary",
};

export const boardMembers = [
  {
    id: "1",
    name: "Arif Əsədov",
    position: "Müşahidə Şurasının Sədri",
    image: "/global/ChatGPT Image Jun 17, 2025, 01_05_47 AM.png",
    isFeatured: true,
    biography: {
      currentRole:
        "Müşahidə Şurasının Sədri və Bakı Dövlət Universitetinin professoru olaraq agentliyin strateji istiqamətlərinin müəyyənləşdirilməsi və nəzarət funksiyalarının həyata keçirilməsində aparıcı rol oynayır.",
      education: [
        "Bakı Dövlət Universiteti, Hüquq fakültəsi (1985)",
        "Moskvada Dövlət İdarəetmə Akademiyası, PhD (1992)",
        "Harvard Universiteti, İdarəetmə proqramı (2001)",
      ],
      experience: [
        "Bakı Dövlət Universiteti professoru (2005-indiyədək)",
        "Ədliyyə Nazirliyində müşavir (1995-2005)",
        "Beynəlxalq hüquq məsələləri üzrə ekspert (2000-indiyədək)",
        "Müxtəlif dövlət komissiyalarında üzv",
      ],
      achievements: [
        '"Əmək Veteranı" medalı (2015)',
        "50-dən çox elmi məqalənin müəllifi",
        "Beynəlxalq hüquq konfranslarında mütəmadi iştirakçı",
        "QHT sektorunun inkişafı sahəsində ekspert",
      ],
    },
  },
  {
    id: "2",
    name: "Seymur Nasirov",
    position: "Müşahidə Şurasının üzvü",
    image: "/global/ChatGPT Image Jun 17, 2025, 01_06_41 AM.png",
    biography: {
      currentRole:
        "Müşahidə Şurasının üzvü və İqtisadi İnkişaf Nazirliyinin sabiq müşaviri olaraq maliyyə siyasətinin formalaşdırılması və büdcə planlamasının nəzarəti sahələrində fəaliyyət göstərir.",
      education: [
        "Azərbaycan Dövlət İqtisad Universiteti, İqtisadiyyat (1988)",
        "London School of Economics, Magistratura (1995)",
        "Maliyyə idarəetməsi üzrə beynəlxalq sertifikatlar",
      ],
      experience: [
        "İqtisadi İnkişaf Nazirliyində müşavir (2010-2020)",
        "Dünya Bankı layihələrində koordinator (2005-2010)",
        "Özəl sektor şirkətlərində maliyyə direktoru (1995-2005)",
        "Beynəlxalq audit şirkətində senior auditor (1990-1995)",
      ],
      achievements: [
        '"Əmək Fəxri" ordeni (2018)',
        "Maliyyə sahəsində 25 illik təcrübə",
        "Beynəlxalq maliyyə standartları üzrə ekspert",
        "QHT maliyyələşdirməsi sahəsində ixtisaslaşma",
      ],
    },
  },
  {
    id: "3",
    name: "Leyla Məmmədova",
    position: "Müşahidə Şurasının üzvü",
    image: "/global/ChatGPT Image Jun 17, 2025, 01_12_41 AM.png",
    biography: {
      currentRole:
        "Müşahidə Şurasının üzvü və İqtisadi İnkişaf Nazirliyinin sabiq müşaviri olaraq maliyyə siyasətinin formalaşdırılması və büdcə planlamasının nəzarəti sahələrində fəaliyyət göstərir.",
      education: [
        "Azərbaycan Dövlət İqtisad Universiteti, İqtisadiyyat (1988)",
        "London School of Economics, Magistratura (1995)",
        "Maliyyə idarəetməsi üzrə beynəlxalq sertifikatlar",
      ],
      experience: [
        "İqtisadi İnkişaf Nazirliyində müşavir (2010-2020)",
        "Dünya Bankı layihələrində koordinator (2005-2010)",
        "Özəl sektor şirkətlərində maliyyə direktoru (1995-2005)",
        "Beynəlxalq audit şirkətində senior auditor (1990-1995)",
      ],
      achievements: [
        '"Əmək Fəxri" ordeni (2018)',
        "Maliyyə sahəsində 25 illik təcrübə",
        "Beynəlxalq maliyyə standartları üzrə ekspert",
        "QHT maliyyələşdirməsi sahəsində ixtisaslaşma",
      ],
    },
  },
  {
    id: "4",
    name: "Rəşad Quliyev",
    position: "Müşahidə Şurasının üzvü",
    image: "/global/ChatGPT Image Jun 17, 2025, 01_08_33 AM.png",
    biography: {
      currentRole:
        "Müşahidə Şurasının üzvü və vətəndaş cəmiyyəti eksperti olaraq QHT sektorunun inkişaf strategiyalarının hazırlanması və beynəlxalq təcrübənin tətbiqi sahələrində çalışır.",
      education: [
        "Azərbaycan Universiteti, Beynəlxalq münasibətlər (1992)",
        "Georgetown University, Magistratura (1998)",
        "Vətəndaş cəmiyyəti idarəetməsi üzrə ixtisaslaşma kursları",
      ],
      experience: [
        "Müxtəlif QHT-lərdə rəhbər vəzifələr (2000-indiyədək)",
        "USAID layihələrində koordinator (2005-2015)",
        "Avropa İttifaqı proqramlarında ekspert (2010-indiyədək)",
        "Vətəndaş cəmiyyəti təlimçisi və konsultant",
      ],
      achievements: [
        "Vətəndaş cəmiyyəti sahəsində 20+ illik təcrübə",
        "Beynəlxalq QHT şəbəkələrinin üzvü",
        "Vətəndaş cəmiyyəti inkişafı üzrə məqalələrin müəllifi",
        "QHT potensialının gücləndirilməsi proqramlarının təşkilatçısı",
      ],
    },
  },
  {
    id: "5",
    name: "Səbinə Əliyeva",
    position: "Müşahidə Şurasının üzvü",
    image: "/global/ChatGPT Image Jun 17, 2025, 01_12_41 AM.png",
    biography: {
      currentRole:
        "Müşahidə Şurasının üzvü və sosial inkişaf eksperti olaraq sosial layihələrin qiymətləndirilməsi və gender bərabərliyi məsələlərinin nəzarəti sahələrində fəaliyyət göstərir.",
      education: [
        "Azərbaycan Dövlət Universiteti, Sosiologiya (1990)",
        "Oslo Universiteti, PhD Sosial siyasət (1997)",
        "Gender tədqiqatları üzrə beynəlxalq ixtisaslaşma",
      ],
      experience: [
        "BMT Qadınlar Təşkilatında koordinator (2000-2015)",
        "Sosial inkişaf layihələrində ekspert (1998-indiyədək)",
        "Universitetlərdə sosial siyasət müəllimi (2005-indiyədək)",
        "Qeyri-hökumət təşkilatlarında konsultant",
      ],
      achievements: [
        "Sosial inkişaf sahəsində beynəlxalq təqdirlər",
        "Gender bərabərliyi üzrə milli strategiyanın hazırlanmasında iştirak",
        "Sosial siyasət üzrə 40+ elmi əsərin müəllifi",
        "Beynəlxalq sosial inkişaf konfranslarının təşkilatçısı",
      ],
    },
  },
];

export const DirectorInfo = {
  name: "Aygün Əliyeva",
  position: "İcraçı direktor",
  image: "/global/E6p4wsnlrHoTbiKLOIcC1BxQLtChtjS1GmVkm0fS.jpg",
  biography:
    "Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyinin İcraçı direktoru olaraq, vətəndaş cəmiyyətinin inkişafı və QHT-lərin fəaliyyətinin təkmilləşdirilməsi istiqamətində dövlət siyasətinin həyata keçirilməsində aparıcı rol oynayır. 15 ildən artıq dövlət idarəetməsi və ictimai sektor təcrübəsi ilə agentliyin strateji hədəflərinin reallaşdırılmasını təmin edir.",
  education:
    "Bakı Dövlət Universiteti, Beynəlxalq münasibətlər fakültəsi (2005), London School of Economics, Magistratura - İctimai siyasət (2008), Harvard Kennedy School, İdarəetmə proqramı (2015)",
  experience:
    "QHT-lərə Dövlət Dəstəyi Agentliyi İcraçı direktoru (2021-indiyədək), Sosial İnkişaf Nazirliyində departament müdiri (2015-2021), BMT Qadınlar Təşkilatında milli koordinator (2010-2015)",
  contact: {
    email: "director@ngoagency.gov.az",
    phone: "+994 (12) 493-37-17",
    address: "Bakı şəhəri, Nərimanov rayonu, Əhməd Rəcəbli küçəsi 1, AZ1052",
  },
};

export const Deputies = [
  {
    name: "Əli Məmmədov",
    title: "Baş direktor müavini",
    responsibilities: [
      "Strateji planlaşdırma",
      "Beynəlxalq əməkdaşlıq",
      "İnnovasiya layihələri"
    ],
    photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    department: "Strateji İnkişaf Departamenti",
    initiatives: [
      "QHT-lərin potensialının gücləndirilməsi",
      "Beynəlxalq tərəfdaşlıq proqramları",
      "İnnovasiya mərkəzlərinin yaradılması"
    ]
  },
  {
    name: "Aynur Hüseynova",
    title: "Baş direktor müavini",
    responsibilities: [
      "Maliyyə və büdcə",
      "İnsan resursları",
      "İnzibati idarəetmə"
    ],
    photo: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    department: "Maliyyə və İnzibati Departament",
    initiatives: [
      "Maliyyə idarəetmə sisteminin təkmilləşdirilməsi",
      "Kadr potensialının inkişafı",
      "İdarəetmə proseslərinin optimallaşdırılması"
    ]
  },
  {
    name: "Rəşad Əliyev",
    title: "Baş direktor müavini",
    responsibilities: [
      "Layihələrin idarə edilməsi",
      "Monitorinq və qiymətləndirmə",
      "Hesabatlılıq"
    ],
    photo: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
    department: "Layihələr Departamenti",
    initiatives: [
      "Layihə idarəetmə sisteminin modernləşdirilməsi",
      "Nəticəyə əsaslanan monitorinq",
      "Şəffaflıq və hesabatlılıq mexanizmlərinin gücləndirilməsi"
    ]
  }
];
