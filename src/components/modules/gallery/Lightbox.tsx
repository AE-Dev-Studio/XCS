"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

interface Props {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, startIndex, onClose }: Props) {
  const [zoom, setZoom] = useState(0.7);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const logoUrl = `${window.location.origin}/images/logo.png`;

  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}&picture=${encodeURIComponent(logoUrl)}`;
  const pinShare = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    shareUrl
  )}&media=${encodeURIComponent(
    logoUrl
  )}&description=Check%20out%20our%20gallery!`;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
      {/* Header bar */}
      <header className="flex items-center justify-between text-white p-4">
        <span className="text-sm">
          <span className="swiper-pagination-lightbox" />
        </span>

        <div className="flex items-center gap-3">
          {/* zoom controls */}
          <button
            onClick={zoomOut}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            aria-label="zoom out"
          >
            <svg className="w-5 h5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 10h14v2H3z" />
            </svg>
          </button>
          <button
            onClick={zoomIn}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            aria-label="zoom in"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3v14M3 10h14" />
            </svg>
          </button>

          {/* share */}
          <div className="relative">
            <button
              onClick={() => setShowShare((s) => !s)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.32l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.001 3.001 0 000-1.42l4.94-2.47C13.11 2.37 14.18 2 15 2z" />
              </svg>
            </button>

            {showShare && (
              <div className="absolute right-0 top-12 bg-white text-black rounded-lg shadow-lg p-3 flex gap-3">
                <a
                  href={fbShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  Facebook
                </a>
                <a
                  href={pinShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  Pinterest
                </a>
              </div>
            )}
          </div>

          {/* close */}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            aria-label="close"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Swiper viewport */}
      <div className="flex-1">
        <Swiper
          modules={[Navigation, Pagination, Zoom]}
          initialSlide={startIndex}
          navigation
          pagination={{
            type: "fraction",
            el: ".swiper-pagination-lightbox",
            renderFraction: (current, total) => `${current} / ${total}`,
          }}
          zoom
          className="w-full h-full"
        >
          {images.map((src) => (
            <SwiperSlide key={src} zoom>
              <div className="swiper-zoom-container h-full flex items-center justify-center">
                <img
                  src={src}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                  style={{ transform: `scale(${zoom})` }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Download bar */}
      <footer className="p-4 text-white flex items-center justify-center">
        <a
          href={images[startIndex]}
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5z" />
            <path d="M15.25 11.25a.75.75 0 00-1.06-1.06l-3.72 3.72V7.5a.75.75 0 00-1.5 0v6.44l-3.72-3.72a.75.75 0 00-1.06 1.06l5 5a.75.75 0 001.06 0l5-5z" />
          </svg>
          Download
        </a>
      </footer>
    </div>,
    document.body
  );
}
