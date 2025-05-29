import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/custom-components/section-title";
import SectionWrapper from "@/components/custom-components/section-wrapper";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";

export default function ProcessSection({ lang, data }) {
  const section_title = lang === "az" ? "Proseslər" : lang === "en" ? "Processes" : "Процессы";

  return (
    <div aria-label="processes" className="hidden md:block">
      <div className="h-[800px] relative flex items-center">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover pointer-events-none"
          style={{
            backgroundImage: `url('/process-background.png')`,
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        />
        <SectionWrapper>
          <ScrollAnimationWrapper>
            <div className="relative">
              <SectionTitle title={section_title} />
            </div>
            <div className="flex align-center justify-center">
              {data?.map((d, index) => (
                <div key={d.id} className="relative flex items-center justify-center">
                  <div className="flex flex-col">
                    {/* Feature Container */}
                    <div className="flex items-center">
                      {/* Circle with Icon */}
                      <div className="relative w-32 h-32">
                        <Image
                          src={`/media-sources/${d.image}` || "/placeholder.svg"}
                          alt={d[`name_${lang}`]}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    {/* Text below circle */}
                    <div className="text-center mt-4">
                      <h3 className="text-gray-900 font-medium">{d[`name_${lang}`]}</h3>
                      <p className="text-gray-600 text-sm">
                        {lang === "az" && "prosesi"}
                        {lang === "en" && "process"}
                        {lang === "ru" && "процесс"}
                      </p>
                    </div>
                  </div>
                  {/* Merged Ellipses */}
                  {index < data.length - 1 && (
                    <div className={`w-24 ${index % 2 === 0 ? "-mt-16" : ""}`}>
                      <Image
                        src={index % 2 === 0 ? "/ellipse-up.png" : "/ellipse-down.png"}
                        alt=""
                        width={100}
                        height={25}
                        quality={100}
                        className={`w-full `}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </SectionWrapper>
      </div>
    </div>
  );
}
