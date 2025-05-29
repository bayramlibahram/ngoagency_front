"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ReactModal from "react-modal";
import ReactPlayer from "react-player/youtube";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./index.module.scss";

export default function VideoCarousel(props) {
  const { videos, lang } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className={`${styles.carouselWrapper} p-2 md:p-0`}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={23}
        loop={true}
        speed={2500}
        autoplay={{ delay: 10000 }}
        pagination={{ clickable: true }}
        className="h-full"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <div className={styles.swiperContainer}>
          {React.Children.toArray(
            videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className={styles.videoThumbnail} onClick={() => openModal(video)}>
                  <div
                    className={`overflow-hidden border-round shadow-1 ${styles.thumbnailImageContainer} relative`}
                  >
                    <Image
                      // Assuming API provides thumbnail URLs
                      src={`/public/${video.post_image}`}
                      alt={lang === "az" ? video.title_az : video.title_en}
                      className={styles.thumbnailImage}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    {/* Lighter Overlay */}
                    <div className={styles.thumbnailOverlay}></div>

                    {/* Play icon with animation */}
                    <div className={styles.playIconOverlay}>
                      <div className="flex flex-column">
                        <div className="flex-grow-1 flex align-items-center justify-content-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="50"
                            height="50"
                            viewBox="0 0 48 48"
                            className={styles.playIcon}
                          >
                            <path
                              fill="#ffffff"
                              d="M 11.396484 4.1113281 C 9.1042001 4.2020187 7 6.0721788 7 8.5917969 L 7 39.408203 C 7 42.767694 10.742758 44.971891 13.681641 43.34375 L 41.490234 27.935547 C 44.513674 26.260259 44.513674 21.739741 41.490234 20.064453 L 13.681641 4.65625 C 12.94692 4.2492148 12.160579 4.0810979 11.396484 4.1113281 z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" font-bold md:py-3 text-xl z-5 absolute bottom-0 left-0 w-full p-2 text-white text-center">
                    {lang === "az" ? video.title_az : video.title_en}
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </div>
      </Swiper>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className="flex align-items-center justify-content-end">
          <button onClick={closeModal} className={styles.closeButton}>
            <i className="fad fa-times text-xl"></i>
          </button>
        </div>
        {selectedVideo && (
          <div className={styles.modalContent}>
            <ReactPlayer
              url={`${selectedVideo?.video_url}`}
              width="100%"
              height="90%"
              controls={true}
            />
          </div>
        )}
      </ReactModal>
    </div>
  );
}
