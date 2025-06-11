import style from "./style.module.css";

import BlogsSection from "@/components/page-components/blogs-section";
import Hero from "@/components/page-components/hero";
import FragmentDiv from "../components/ui/fragment-div";
import PortalSection from "../components/portal-section";
import StatsSection from "../components/stats-section";

const data = [
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

const blogData = [
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const HomeView = () => {
  return (
    <div className="mb-8">
      <Hero data={data} lang={""} />
      
      <FragmentDiv style={style}>
        <BlogsSection 
          title={"Son Xəbərlər"}
          variants={containerVariants}
          data={blogData}
          lang={"az"}
        />
      </FragmentDiv>

      <FragmentDiv style={style}>
        <PortalSection />
      </FragmentDiv>

    </div>
  );
};

export default HomeView;
