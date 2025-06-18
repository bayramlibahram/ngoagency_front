'use client';


import React from "react";

import { MotionDiv } from "@/components/motion-components/motion-div";
import PageHeader from "@/components/layout-components/page-header";
import CustomContainer from "@/components/custom-components/custom-container";
import CustomPageSection from "@/components/custom-components/custom-page-section";
import SectionTitle from "@/components/custom-components/section-title";
import CustomHeroWrapper from "@/components/custom-components/custom-hero-wrapper";

const AboutMission = () => {
  const breadcrumbs = [{ label: "Haqqımızda", href: "/about" }, { label: "Missiyamız" }];

  return (
    <>
      <PageHeader
        title="Haqqımızda"
        subtitle="Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi haqqında ümumi məlumat"
        breadcrumbs={breadcrumbs}
      />
      <CustomContainer>
        <CustomPageSection>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CustomHeroWrapper>
              <div className="flex flex-col lg:flex-row">
                <MotionDiv 
                  className="lg:w-[40%]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/global/RJ8lajsQLVhh8UE0eatqJBuV7PjxzyP1vcPjeY8i.jpg"
                    alt="Agentliyin missiya və dəyərləri"
                    className="w-full h-full object-cover"
                  />
                </MotionDiv>
                <MotionDiv 
                  className="lg:w-[60%] p-8 lg:p-12"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <SectionTitle 
                     title={"Missiyamız və Dəyərlərimiz"}
                     twVariants={{
                        size: "large",
                        color: "primary",
                     }}
                  />
                  <div className="space-y-6 text-gray-700">
                    <p className="text-lg font-medium text-gold-600">
                      "Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi olaraq, vətəndaş cəmiyyəti sahəsində innovativ dəstək mexanizmləri və şəffaf idarəetmə vasitəsilə güclü və dayanıqlı QHT sektorunun formalaşmasına nail olmağa çalışırıq."
                    </p>
                    <p>
                      Biz vətəndaş cəmiyyətinin inkişafında aparıcı rol oynayaraq, QHT-lərin fəaliyyətinin təkmilləşdirilməsi və onların potensialının gücləndirilməsi istiqamətində çalışırıq. Agentliyin fəaliyyəti şəffaflıq, ədalət və peşəkarlıq prinsipləri əsasında qurulub.
                    </p>
                    <p>
                      Hədəfimiz Azərbaycanda güclü, müstəqil və effektiv QHT sektorunun formalaşmasına töhfə verməkdir. Bu məqsədlə QHT-lərə maliyyə dəstəyi, potensial gücləndirilməsi təlimləri və texniki yardım göstəririk.
                    </p>
                  </div>
                </MotionDiv>
              </div>
            </CustomHeroWrapper>
            
          </MotionDiv>
        </CustomPageSection>
      </CustomContainer>
    </>
  );
};

export default AboutMission;
