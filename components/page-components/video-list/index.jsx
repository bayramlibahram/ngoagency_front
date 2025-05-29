import React from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import VideoModal from "../video-modal";
import AnimationComponent from "@/components/custom-components/animation-component";

const VideoCard = ({ data, lang }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative group w-full aspect-[3/2] rounded-2xl">
        <div className="absolute z-30 h-full w-full p-0 overflow-hidden rounded-2xl">
          <Image
            src={`/media-sources/${data.post_image}`}
            alt={data[`title_${lang}`]}
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent rounded-2xl" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-[35] rounded-2xl group">
          <VideoModal data={data} lang={lang}>
            <Image src={"/play-icon.svg"} alt={"plus icon"} width={74} height={74} />
          </VideoModal>
        </div>
      </div>
      <div className="flex items-center justify-center text-[#000000] drop-shadow">
        {data[`title_${lang}`]}
      </div>
    </div>
  );
};

export default function VideoList({ data, lang }) {
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
      {data?.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <ScrollAnimationWrapper key={item.id}>
              <AnimationComponent delay={index * 0.1}>
                <VideoCard data={item} lang={lang} />
              </AnimationComponent>
            </ScrollAnimationWrapper>
          </React.Fragment>
        );
      })}
    </div>
  );
}
