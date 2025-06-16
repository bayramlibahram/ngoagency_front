'use client';

import { useParams } from "next/navigation";
import AboutGeneralInfo from "@/components/page-components/about-general-info";

const page = () => {
   const {slug} = useParams();
   
   switch (slug) {
      case "general-info":
         return <AboutGeneralInfo />;
   
      default:
         break;
   }
}
 
export default page;