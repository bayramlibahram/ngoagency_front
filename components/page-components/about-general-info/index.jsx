import { cn } from "@/lib/utils";

import { Award, FileDown, Target, Users } from "lucide-react";

import {
  interFontSectionLargeTitleOptions,
  interFontSectionMediumTitleOptions,
  interFontSectionSmallTitleOptions,
} from "@/constants";

import { Button } from "@/components/ui/button";

import CardLightSection from "@/components/custom-components/card-light-section";
import CustomContainer from "@/components/custom-components/custom-container";
import CustomPageSection from "@/components/custom-components/custom-page-section";
import SectionTitle from "@/components/custom-components/section-title";

// cox tekrarlanirdi, props ile oturmek qerarina geldim, funksionalliq helelik yoxdur, amma olacaq
const FileButtons = ({title}) => (
  <Button variant="outline" className="w-full flex items-center gap-2 justify-center">
    <FileDown className="h-4 w-4" />
    {title}
  </Button>
);

export default function AboutGeneralInfo() {
  return (
    <CustomContainer>
      <CustomPageSection>
        <SectionTitle title={`Agentlik haqqında`} twVariants={interFontSectionLargeTitleOptions} />

        <section className="mb-16">
          <CardLightSection>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <SectionTitle
                  title={`Ümumi Məlumat`}
                  twVariants={interFontSectionMediumTitleOptions}
                />
                <div className="prose max-w-none text-gray-700 space-y-4">
                  <p>
                    Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi 19 aprel 2021-ci il
                    tarixində Azərbaycan Respublikası Prezidentinin 2021-ci il 19 aprel tarixli 1317
                    nömrəli Fərmanı ilə yaradılmışdır.
                  </p>
                  <p>
                    Agentlik vətəndaş cəmiyyəti təşəbbüslərinə və QHT-lərə dəstək göstərən, onların
                    fəaliyyətinin təkmilləşdirilməsi və potensialının gücləndirilməsi istiqamətində
                    çalışan dövlət qurumudur.
                  </p>
                </div>

                <div className="mt-8">
                  <SectionTitle
                    title={"Əsas funksiyalar:"}
                    twVariants={interFontSectionSmallTitleOptions}
                  />
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                      <span>QHT layihələrinin maliyyələşdirilməsi və monitorinqi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                      <span>QHT-lərin potensialının gücləndirilməsi üzrə təlimlərin təşkili</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                      <span>Dövlət orqanları ilə QHT-lər arasında əməkdaşlığın təşviqi</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-lg p-6">
                  <SectionTitle
                    title={"Əsas göstəricilər:"}
                    twVariants={interFontSectionSmallTitleOptions}
                  />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Yaranma tarixi:</span>
                      <span className="font-medium">19 aprel 2021</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Dəstəklənən QHT-lər:</span>
                      <span className="font-medium">1000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Maliyyələşən layihələr:</span>
                      <span className="font-medium">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Aktiv proqramlar:</span>
                      <span className="font-medium">100+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardLightSection>
        </section>

        <section className="mb-16">
          <CardLightSection>
            <SectionTitle
              title={`Fəaliyyət İstiqamətləri`}
              twVariants={interFontSectionMediumTitleOptions}
            />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <SectionTitle
                  title={"Strateji hədəflər"}
                  twVariants={interFontSectionSmallTitleOptions}
                />
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span>Vətəndaş cəmiyyəti institutlarının inkişafının dəstəklənməsi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span>QHT-lərin potensialının gücləndirilməsi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span>Dövlət-QHT əməkdaşlığının inkişafı</span>
                  </li>
                </ul>
              </div>

              <div>
                <SectionTitle
                  title={"Cari layihələr"}
                  twVariants={interFontSectionSmallTitleOptions}
                />
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span>QHT-lər üçün qrant müsabiqələri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span>Təlim və məsləhət xidmətləri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span>Beynəlxalq əməkdaşlıq proqramları</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardLightSection>
        </section>

        <section>
          <CardLightSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <SectionTitle
                title={`Rəsmi Sənədlər`}
                twVariants={interFontSectionMediumTitleOptions}
                clsName={"mb-4 md:mb-0"}
              />
              <p className="text-sm text-gray-500">Son yenilənmə: 15 March 2024</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <FileButtons title={"Nizamnamə (PDF)"} />
              <FileButtons title={"İllik hesabat 2023 (PDF)"} />
              <FileButtons title={"Strateji plan 2024-2026"} />
              <FileButtons title={"Təşkilati struktur"} />
            </div>
          </CardLightSection>
        </section>
      </CustomPageSection>
    </CustomContainer>
  );
}
