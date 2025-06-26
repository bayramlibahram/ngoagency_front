'use client';

import CustomContainer from "@/components/custom-components/custom-container";
import CustomPageSection from "@/components/custom-components/custom-page-section";
import PageHeader from "@/components/layout-components/page-header";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { Card } from "@/components/ui";
import { Deputies } from "@/constants";

export default function AboutDeputyDirectors(){
   const breadcrumbs = [
    { label: "Haqqımızda", href: "/about" },
    { label: "Rəhbərlik", href: "/about/management" },
    { label: "Müavinlər" }
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Deputies.map((deputy, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={deputy.photo}
                    alt={deputy.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{deputy.name}</h3>
                  <p className="text-gold-600 font-medium mb-4">{deputy.title}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Məsuliyyət sahələri:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {deputy.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm">{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Departament:</h4>
                    <p className="text-sm text-gray-600">{deputy.department}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Strateji təşəbbüslər:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {deputy.initiatives.map((initiative, idx) => (
                        <li key={idx} className="text-sm">{initiative}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
        </CustomPageSection>
      </CustomContainer>
    </>
   )
}