'use client';

import { cn } from "@/lib/utils";

import { Award, Building, FileDown, Mail, MapPin, Phone, Target, Users } from "lucide-react";

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
import PageHeader from "@/components/layout-components/page-header";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { Card } from "@/components/ui";
// cox tekrarlanirdi, props ile oturmek qerarina geldim, funksionalliq helelik yoxdur, amma olacaq
const FileButtons = ({ title }) => (
  <Button variant="outline" className="w-full flex items-center gap-2 justify-center h-12">
    <FileDown className="h-4 w-4" />
    {title}
  </Button>
);

export default function AboutGeneralInfo() {
  const breadcrumbs = [{ label: "Haqqımızda", href: "/about" }, { label: "Ümumi məlumat" }];
  return (
    <>
      <PageHeader
        title="Ümumi Məlumat"
        subtitle="Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi haqqında ətraflı məlumat"
        breadcrumbs={breadcrumbs}
      />

      <CustomContainer>
        <CustomPageSection>
          {/* Hero Image Section */}
          <section className="mb-16">
            <div className="relative">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
                onClick={() =>
                  window.open("/global/hChsWWqZ2QxzRyUSfzwgG2BZuJfqkmJOAUmbfalT.jpg", "_blank")
                }
              >
                <img
                  src="/global/hChsWWqZ2QxzRyUSfzwgG2BZuJfqkmJOAUmbfalT.jpg"
                  alt="Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyinin Bakı qərargahı və işçi heyəti"
                  className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-navy-900">
                  Yüksək keyfiyyətdə baxmaq üçün klikləyin
                </div>
              </MotionDiv>

              {/* Image Caption */}
              <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-center"
              >
                <p className="text-gray-600 italic text-sm leading-relaxed max-w-4xl mx-auto">
                  <em>
                    "Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyinin Bakı qərargahı (2024).
                    İllik 15,000+ QHT müraciətinə xidmət göstərən və 500+ layihəni maliyyələşdirən
                    mərkəzi inzibati bina. Agentlik 2021-ci ildən etibarən vətəndaş cəmiyyətinin
                    inkişafında aparıcı rol oynayır."
                  </em>
                </p>
              </MotionDiv>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Main Information */}
              <div className="lg:col-span-2">
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <SectionTitle
                    title={`Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi`}
                    twVariants={interFontSectionLargeTitleOptions}
                  />

                  {/* Mission Statement */}
                  <Card className="p-8 mb-8 bg-gradient-to-br from-gold-50 to-gold-100 border-gold-200">
                    <SectionTitle
                      title={"Missiyamız"}
                      twVariants={interFontSectionMediumTitleOptions}
                    />
                    <p className="text-lg leading-relaxed text-navy-800">
                      Vətəndaş cəmiyyəti təşəbbüslərinə və QHT-lərə dəstək göstərən, onların
                      fəaliyyətinin təkmilləşdirilməsi və potensialının gücləndirilməsi
                      istiqamətində çalışan dövlət qurumudur. Agentliyin əsas məqsədi QHT-lərin
                      inkişafını dəstəkləmək və bu sahədə şəffaflığı artırmaqdır.
                    </p>
                  </Card>

                  {/* Core Functions */}
                  <Card className="p-8 mb-8">
                    <SectionTitle
                      title={"Əsas Funksiyalar"}
                      twVariants={{
                        size: "normal",
                      }}
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gold-100 rounded-lg">
                          <Award className="h-6 w-6 text-gold-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Layihə Maliyyələşdirməsi</h4>
                          <p className="text-gray-600 text-sm">
                            QHT layihələrinin maliyyələşdirilməsi və monitorinqi
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gold-100 rounded-lg">
                          <Users className="h-6 w-6 text-gold-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Potensial Gücləndirilməsi</h4>
                          <p className="text-gray-600 text-sm">
                            QHT-lərin potensialının gücləndirilməsi üzrə təlimlərin təşkili
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gold-100 rounded-lg">
                          <Target className="h-6 w-6 text-gold-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Əməkdaşlıq Təşviqi</h4>
                          <p className="text-gray-600 text-sm">
                            Dövlət orqanları ilə QHT-lər arasında əməkdaşlığın təşviqi
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gold-100 rounded-lg">
                          <Building className="h-6 w-6 text-gold-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Siyasət Formalaşdırması</h4>
                          <p className="text-gray-600 text-sm">
                            Vətəndaş cəmiyyəti sahəsində dövlət siyasətinin formalaşdırılması
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Detailed Information */}
                  <Card className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-navy-900">Ətraflı Məlumat</h3>
                    <div className="prose max-w-none text-gray-700 space-y-4">
                      <p>
                        Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi 19 aprel 2021-ci il
                        tarixində Azərbaycan Respublikası Prezidentinin 2021-ci il 19 aprel tarixli
                        1317 nömrəli Fərmanı ilə yaradılmışdır.
                      </p>
                      <p>
                        Agentlik vətəndaş cəmiyyəti təşəbbüslərinə və QHT-lərə dəstək göstərən,
                        onların fəaliyyətinin təkmilləşdirilməsi və potensialının gücləndirilməsi
                        istiqamətində çalışan dövlət qurumudur. Agentliyin fəaliyyəti QHT-lərin
                        inkişafını dəstəkləmək, onların layihələrini maliyyələşdirmək və texniki
                        dəstək göstərmək məqsədini daşıyır.
                      </p>
                      <p>
                        Agentlik həmçinin QHT-lərin potensialının gücləndirilməsi, onların
                        fəaliyyətinin təkmilləşdirilməsi və beynəlxalq təcrübənin öyrənilməsi
                        istiqamətində müxtəlif təlim proqramları və seminarlar təşkil edir.
                      </p>
                    </div>
                  </Card>
                </MotionDiv>
              </div>

              {/* Right Column - Statistics and Info */}
              <div className="lg:col-span-1">
                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-8"
                >
                  {/* Key Statistics */}
                  <Card className="p-6 bg-navy-50">
                    <h3 className="text-lg font-semibold mb-6 text-navy-900">Əsas Göstəricilər</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Yaranma tarixi:</span>
                        <span className="font-semibold text-navy-900">19 aprel 2021</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Dəstəklənən QHT-lər:</span>
                        <span className="font-semibold text-gold-600">1,200+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Maliyyələşən layihələr:</span>
                        <span className="font-semibold text-gold-600">500+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Aktiv proqramlar:</span>
                        <span className="font-semibold text-gold-600">150+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">İllik büdcə:</span>
                        <span className="font-semibold text-gold-600">25M AZN</span>
                      </div>
                    </div>
                  </Card>

                  {/* Contact Information */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-6 text-navy-900">Əlaqə Məlumatları</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-navy-900">Ünvan</p>
                          <p className="text-sm text-gray-600">
                            Bakı şəhəri, Nərimanov rayonu,
                            <br />
                            Əhməd Rəcəbli küçəsi 1, AZ1052
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-navy-900">Telefon</p>
                          <a
                            href="tel:+994124933717"
                            className="text-sm text-gray-600 hover:text-gold-500"
                          >
                            +994 (12) 493-37-17
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-navy-900">E-poçt</p>
                          <a
                            href="mailto:info@ngoagency.gov.az"
                            className="text-sm text-gray-600 hover:text-gold-500"
                          >
                            info@ngoagency.gov.az
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Service Hours */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-navy-900">İş Saatları</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bazar ertəsi - Cümə:</span>
                        <span className="font-medium">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nahar fasiləsi:</span>
                        <span className="font-medium">13:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Şənbə - Bazar:</span>
                        <span className="font-medium text-red-600">Bağlı</span>
                      </div>
                    </div>
                  </Card>
                </MotionDiv>
              </div>
            </div>
          </section>

          {/* Documents Section */}
          <section>
            <Card className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <SectionTitle
                    title={"Rəsmi Sənədlər"}
                    twVariants={interFontSectionMediumTitleOptions}
                    clsName={"mb-2"}
                  />
                  <p className="text-gray-600">Agentliyin fəaliyyətini tənzimləyən əsas sənədlər</p>
                </div>
                <p className="text-sm text-gray-500 mt-4 md:mt-0">Son yenilənmə: 15 Mart 2024</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <FileButtons title={"Nizamnamə (PDF)"} />
                <FileButtons title={"İllik hesabat 2023"} />
                <FileButtons title={"Strateji plan 2024-2026"} />
                <FileButtons title={"Təşkilati struktur"} />
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <Button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg">
                  Daha ətraflı məlumat
                </Button>
              </div>
            </Card>
          </section>
        </CustomPageSection>
      </CustomContainer>
    </>
  );
}
