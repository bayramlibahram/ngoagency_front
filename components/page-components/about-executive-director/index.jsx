"use client";

import CustomContainer from "@/components/custom-components/custom-container";
import CustomPageSection from "@/components/custom-components/custom-page-section";
import PageHeader from "@/components/layout-components/page-header";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { DirectorInfo } from "@/constants";

const TextSection = ({title, description}) => (
  <div className="bg-white rounded-xl p-8 ">
    <h2 className="text-xl font-semibold text-navy-900 mb-4">{title}</h2>
    <p className="text-gray-700 leading-relaxed text-base">{description}</p>
  </div>
);

export default function AboutExecutiveDirector() {
  const breadcrumbs = [
    { label: "Haqqımızda", href: "/about" },
    { label: "Rəhbərlik", href: "/about/management" },
    { label: "İcraçı direktor" },
  ];
  return (
    <>
      <PageHeader
        title="İcraçı direktor"
        subtitle="Agentliyin gündəlik fəaliyyətinin idarə edilməsi və strateji hədəflərin həyata keçirilməsi"
        breadcrumbs={breadcrumbs}
      />
      <CustomContainer>
        <CustomPageSection>
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="w-full">
              {/* Image with float-left styling */}
              <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-2/5 pr-0 lg:pr-8 mb-8 float-left"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-xl shadow">
                  <img
                    src={DirectorInfo.image}
                    alt={`${DirectorInfo.name} - ${DirectorInfo.position}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </MotionDiv>

              {/* Content section that wraps around floated image */}
              <MotionDiv
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Name and Position */}
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4 leading-tight">
                    {DirectorInfo.name}
                  </h1>
                  <p className="text-2xl text-gold-600 font-semibold mb-6">
                    {DirectorInfo.position}
                  </p>
                </div>

                {/* Biography */}   
                <TextSection 
                  title={`Bioqrafiya`}
                  description={DirectorInfo.biography}
                />

                {/* Education */}
                <TextSection 
                  title={`Təhsil`}
                  description={DirectorInfo.education}
                />

                {/* Experience */}
                <TextSection 
                  title={`İş təcrübəsi`}
                  description={DirectorInfo.experience}
                />
              </MotionDiv>

              {/* Clearfix to contain the float */}
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        </CustomPageSection>
      </CustomContainer>
    </>
  );
}
