"use client";

import CustomContainer from "@/components/custom-components/custom-container";
import CustomPageSection from "@/components/custom-components/custom-page-section";
import SectionTitle from "@/components/custom-components/section-title";
import PageHeader from "@/components/layout-components/page-header";
import { Calendar, Mail, Phone } from "lucide-react";

// quick links text
const LinkTexts = ({ link, title, description }) => (
  <a
    href={`/about/management/${link}`}
    className="bg-white dark:bg-navy-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
  >
    <SectionTitle
      title={title}
      twVariants={{
        size: "normal",
        weight: "medium",
      }}
    />
    <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
    <span className="text-gold-500">Ətraflı →</span>
  </a>
);

// icon with text
const IconWithText = ({ title, description, Icon }) => (
  <div className="flex gap-4 items-start">
    <Icon className="w-5 h-5 text-gold-500 mt-1" />
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

export default function AboutManagement() {
  const breadcrumbs = [{ label: "Haqqımızda", href: "/about" }, { label: "Rəhbərlik" }];
  return (
    <>
      <PageHeader
        title="Rəhbərlik"
        subtitle="Agentliyin rəhbər heyəti və idarəetmə strukturu"
        breadcrumbs={breadcrumbs}
      />
      <CustomContainer>
        <CustomPageSection>
          {/* Leadership Structure */}
          <div className="bg-white dark:bg-navy-900 rounded-lg p-8 mb-12 shadow-lg">
            <SectionTitle
              title={"Rəhbərlik Strukturu"}
              twVariants={{
                size: "medium",
                weight: "medium",
              }}
            />
            <div className="relative">
              {/* Organization chart would go here */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gold-50 dark:bg-gold-900/20 rounded-lg p-4">
                    <h3 className="font-semibold">Müşahidə Şurası</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gold-50 dark:bg-gold-900/20 rounded-lg p-4">
                    <h3 className="font-semibold">İcraçı direktor</h3>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gold-50 dark:bg-gold-900/20 rounded-lg p-4">
                    <h3 className="font-semibold">Müavinlər</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <LinkTexts
              title={"Müşahidə Şurası"}
              link={"supervisory-board"}
              description={
                "Şura üzvləri və onların agentliyin istiqamətinin müəyyənləşdirilməsindəki rolları haqqında məlumat."
              }
            />

            <LinkTexts
              title={"İcraçı direktor"}
              link={"executive-director"}
              description={"İcraçı direktorun baxışı və rəhbərlik yanaşması haqqında məlumat."}
            />

            <LinkTexts
              title={"Müavinlər"}
              link={"deputy-directors"}
              description={"Müavinlər və onların məsuliyyət sahələri haqqında məlumat."}
            />
          </div>

          {/* Latest News */}
          <div className="bg-white dark:bg-navy-900 rounded-lg p-8 mb-12 shadow-lg">
            <SectionTitle
              title={"Son Rəhbərlik Xəbərləri"}
              twVariants={{
                size: "medium",
                weight: "medium",
              }}
            />
            <div className="space-y-6">
              <IconWithText
                title={"İllik Strategiya Görüşü"}
                description={"Rəhbərlik heyəti gələn il üçün strateji prioritetləri müzakirə edir."}
                Icon={Calendar}
              />

              <IconWithText
                title={"Beynəlxalq Konfrans İştirakı"}
                description={"İcraçı direktor QHT İnkişaf Forumunda çıxış edəcək."}
                Icon={Calendar}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-navy-900 rounded-lg p-8 shadow-lg">
            <SectionTitle
              title={"Rəhbərlik Heyəti ilə Əlaqə"}
              twVariants={{
                size: "medium",
                weight: "medium",
              }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <IconWithText
                title={"E-poçt"}
                description={"leadership@ngoagency.gov.az"}
                Icon={Mail}
              />
              <IconWithText title={"Telefon"} description={"+994 (12) 493-37-17"} Icon={Phone} />
            </div>
          </div>
        </CustomPageSection>
      </CustomContainer>
    </>
  );
}
