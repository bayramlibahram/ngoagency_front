"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { createPortal } from "react-dom";
import { MotionDiv } from "@/components/motion-components";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function ModalPortal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}

export default function VideoModal({ data, lang, children }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const containerRef = useRef(null);
  const closeModal = useCallback(() => setSelectedVideo(null), []);

  useEffect(() => {
    return () => setSelectedVideo(null); // ✅ Cleanup on unmount
  }, []);

  const handleCardClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="z-[37]" ref={containerRef}>
      <button
        onClick={() => handleCardClick(data.video_url)}
        className="relative w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {children}
      </button>

      <ModalPortal>
        <AnimatePresence mode={"wait"}>
          {selectedVideo && (
            <MotionDiv
              key={selectedVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-[38]  flex items-center justify-center"
              onClick={closeModal}
            >
              <MotionDiv
                layoutId={`video-card-${data.id}`}
                className="bg-white overflow-hidden w-full max-w-5xl m-4 rounded-2xl shadow-2xl"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 300,
                    duration: 0.2,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 300,
                    duration: 0.3,
                  },
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex justify-between items-center p-4 bg-gray-100"
                >
                  <h2 className="text-[#000000] drop-shadow">{data[`title_${lang}`]}</h2>
                  <button
                    onClick={closeModal}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-1 text-gray-800"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className="aspect-video"
                >
                  <ReactPlayer url={data.video_url} width="100%" height="100%" controls={true} />
                </MotionDiv>
              </MotionDiv>
            </MotionDiv>
          )}
        </AnimatePresence>
      </ModalPortal>
    </div>
  );
}
