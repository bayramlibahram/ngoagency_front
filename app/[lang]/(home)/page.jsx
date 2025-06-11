import React from "react";

import { blogData, containerVariants, data } from "@/constants";

import CustomWrapper from "@/components/custom-components/custom-wrapper";
import Hero from "@/components/page-components/hero";
import BlogsSection from "@/components/page-components/blogs-section";
import PortalSection from "@/components/page-components/portal-section";
import StatsSection from "@/components/page-components/stats-section";
import ResourceSection from "@/components/page-components/resource-section";

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

        {/* portal section */}
        <PortalSection title={`Elektron Xidmətlər Portalı`}/>

        {/* stats section */}
        <StatsSection title={`Statistika`}/>

        {/* resource section */}
        <ResourceSection title={`Agentliyin dəstəyi ilə hazırlanmış`}/>
      </CustomWrapper>

    </div>
  )
}
