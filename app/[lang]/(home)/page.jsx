import React from "react";

import Hero from "@/components/page-components/hero";
import CustomWrapper from "@/components/custom-components/custom-wrapper";
import { blogData, containerVariants, data } from "@/constants";
import BlogsSection from "@/components/page-components/blogs-section";

export default function Page() {
  return (
    <div className="mb-8">
      <Hero data={data} lang={""} />
      
      <CustomWrapper>
        <BlogsSection 
          title={"Son Xəbərlər"}
          variants={containerVariants}
          data={blogData}
          lang={"az"}
        />
      </CustomWrapper>

    </div>
  )
}
