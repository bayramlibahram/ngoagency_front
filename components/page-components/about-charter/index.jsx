'use client';

import React from "react";

import CustomContainer from "@/components/custom-components/custom-container";
import CustomPageSection from "@/components/custom-components/custom-page-section";
import { MotionDiv } from "@/components/motion-components/motion-div";
import CustomHeroWrapper from "@/components/custom-components/custom-hero-wrapper";
import PageHeader from "@/components/layout-components/page-header";
import { MotionH1 } from "@/components/motion-components/motion-h1";
import { Button, Card } from "@/components/ui";
import { FileDown, Printer } from "lucide-react";
import SectionTitle from "@/components/custom-components/section-title";

const Text = ({ children, size }) => (
  <p>
    <span
      style={{
        fontSize: size === "" || size === undefined ? "14px" : "18px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#374151",
      }}
    >
      {children}
    </span>
  </p>
);

const AboutCharter = () => {
  const breadcrumbs = [{ label: "Haqqımızda", href: "/about" }, { label: "Nizamnamə" }];

  return (
    <>
      <PageHeader
        title="Nizamnamə"
        subtitle="Agentliyin fəaliyyət qaydalarını, məqsəd və vəzifələrini müəyyən edən əsas sənəd"
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
              <MotionDiv>
                <div className="p-8 lg:p-12">
                  <MotionH1
                    className="text-4xl font-bold mb-4 text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    Nizamnamə
                  </MotionH1>
                  <MotionDiv>
                    <Text>
                      <b>
                        Azərbaycan Respublikasının Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi
                        Agentliyinin NİZAMNAMƏSİ
                      </b>
                    </Text>

                    <Text>19 aprel 2021</Text>

                    <p>&nbsp;</p>

                    <Text size={"large"}>
                      <strong>
                        Mənbə:&nbsp;&nbsp;
                        <a href="http://president.az/articles/50259">President.az</a>
                      </strong>
                    </Text>

                    <p>&nbsp;</p>

                    <Text>
                      <strong>
                        Azərbaycan Respublikası Prezidentinin 2021-ci il 19 aprel tarixli Fərmanı
                        ilə təsdiq edilmişdir
                      </strong>
                    </Text>

                    <p>&nbsp;</p>

                    <Text>1. Ümumi müddəalar</Text>
                    <Text>
                      1.1. Azərbaycan Respublikasının Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi
                      Agentliyi (bundan sonra – Agentlik) qeyri-hökumət təşkilatlarının inkişafı,
                      dövlət-özəl və qeyri-hökumət təşkilatları arasında əməkdaşlıq mexanizmlərinin
                      təkmilləşdirilməsi və təşviqi, dövlət və cəmiyyət üçün əhəmiyyət kəsb edən
                      məsələlərə dair qeyri-hökumət təşkilatlarının irəli sürdükləri təşəbbüslərin,
                      proqram və layihələrin (bundan sonra – layihələr) mövzularının
                      qiymətləndirilməsi və onlara dair rəy verilməsi, habelə qeyri-hökumət
                      təşkilatlarının beynəlxalq əməkdaşlıq əlaqələrinin inkişaf etdirilməsi
                      sahələrində (bundan sonra – müvafiq sahə) fəaliyyət göstərən publik hüquqi
                      şəxsdir.
                    </Text>
                    <Text>
                      1.2. Agentlik öz fəaliyyətində Azərbaycan Respublikasının Konstitusiyasını,
                      Azərbaycan Respublikasının qanunlarını, bu Nizamnaməni, Azərbaycan
                      Respublikası Prezidentinin digər fərmanlarını, həmçinin sərəncamlarını,
                      Azərbaycan Respublikası Nazirlər Kabinetinin qərar və sərəncamlarını, digər
                      normativ hüquqi aktları rəhbər tutur.
                    </Text>
                    <Text>
                      1.3. Agentlik öz vəzifələrini yerinə yetirərkən və hüquqlarını həyata
                      keçirərkən dövlət və yerli özünüidarəetmə orqanları ilə, beynəlxalq və
                      qeyri-hökumət təşkilatları ilə, digər hüquqi və fiziki şəxslərlə qarşılıqlı
                      əlaqədə fəaliyyət göstərir.
                    </Text>
                    <Text>
                      Agentliyin ləğvini və yenidən təşkilini Azərbaycan Respublikasının Prezidenti
                      həyata keçirir.&nbsp;
                    </Text>
                    <Text>
                      1.4. Agentlik ümumdövlət və ictimai əhəmiyyət daşıyan fəaliyyətlə məşğul olur.
                    </Text>
                    <Text>
                      1.5. Agentliyin müstəqil balansı, əmlakı, xəzinə və bank hesabları, öz adı
                      həkk olunmuş möhürü, müvafiq ştampları və blankları, loqotipi (emblemi)
                      vardır.
                    </Text>
                    <Text>
                      1.6. Agentliyin əqdlər bağlamaq, öz adından əmlak və qeyri-əmlak hüquqları
                      əldə etmək və həyata keçirmək hüququ, həmçinin vəzifələri vardır. O, məhkəmədə
                      iddiaçı və ya cavabdeh qismində çıxış edə bilər.
                    </Text>
                    <Text>1.7. Agentlik Bakı şəhərində yerləşir.</Text>
                    <Text>2. Agentliyin fəaliyyət istiqamətləri</Text>
                    <Text>2.1. Agentliyin fəaliyyət istiqamətləri aşağıdakılardır:</Text>
                    <Text>
                      2.1.1. müvafiq sahənin inkişafını təmin etmək;2.1.1. müvafiq sahənin
                      inkişafını təmin etmək;
                    </Text>
                    <Text>
                      2.1.2. müvafiq sahədə dövlət siyasətinin formalaşdırılmasında və həyata
                      keçirilməsində iştirak etmək;
                    </Text>
                    <Text>
                      2.1.3. dövlət-özəl və qeyri-hökumət təşkilatları arasında əməkdaşlıq
                      mexanizmlərini inkişaf etdirmək və təşviq etmək;
                    </Text>
                    <Text>
                      2.1.4. dövlət və cəmiyyət üçün əhəmiyyət kəsb edən məsələlərə dair
                      qeyri-hökumət təşkilatlarının irəli sürdükləri layihələrin mövzularını
                      qiymətləndirmək və onlara dair rəy vermək;
                    </Text>
                    <Text>
                      2.1.5. qeyri-hökumət təşkilatlarının ictimai nəzarət sahəsində fəaliyyətini
                      təşviq etmək;
                    </Text>
                    <Text>
                      2.1.6. qeyri-hökumət təşkilatlarının beynəlxalq əməkdaşlıq əlaqələrini inkişaf
                      etdirmək;
                    </Text>
                    <Text>
                      2.1.7. dövlət büdcəsinin vəsaiti hesabına ayrılan qrantlardan qeyri-hökumət
                      təşkilatları tərəfindən təyinatı üzrə istifadə olunmasına nəzarətin həyata
                      keçirilməsində iştirak etmək;
                    </Text>
                    <Text>
                      2.1.8. qeyri-hökumət təşkilatlarına məlumatlandırma, konsultativ, metodiki,
                      maliyyə yardımı göstərmək;
                    </Text>
                    <Text>
                      2.1.9. bu Nizamnamə ilə müəyyən edilmiş digər istiqamətlərdə fəaliyyət
                      göstərmək.
                    </Text>
                    <Text>3. Agentliyin vəzifələri və hüquqları</Text>
                    <Text>
                      3.1. Bu Nizamnamə ilə müəyyən edilmiş fəaliyyət istiqamətlərinə uyğun olaraq,
                      Agentliyin vəzifələri aşağıdakılardır:
                    </Text>
                  </MotionDiv>
                </div>
              </MotionDiv>
            </CustomHeroWrapper>

            {/* Main Content Section */}
            <section className="mb-16">
              {/* Download Section */}
              <Card className="p-8 bg-gradient-to-br from-gold-50 to-gold-100 border-gold-200">
                <SectionTitle 
                  title={"Rəsmi Sənədi Yüklə"}
                  twVariants={{
                     size: "normal",
                     weight: "medium",
                     color: "gray"
                  }}
                />
                <p className="text-gray-700 mb-6">
                  Agentliyin tam nizamnaməsini PDF formatında yükləyə
                  bilərsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white flex items-center gap-2">
                    <FileDown className="h-4 w-4" />
                    Nizamnaməni Yüklə
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Printer className="h-4 w-4" />
                    Çap et
                  </Button>
                </div>
              </Card>
            </section>
          </MotionDiv>
        </CustomPageSection>
      </CustomContainer>
    </>
  );
};

export default AboutCharter;
