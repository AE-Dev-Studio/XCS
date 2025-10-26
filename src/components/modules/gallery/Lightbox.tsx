"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import {
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Share2,
  X,
  Download,
} from "lucide-react";
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
  const [zoomed, setZoomed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showShare, setShowShare] = useState(false);

  /* ---------- keyboard ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* ---------- zoom toggle ---------- */
  const toggleZoom = () => setZoomed((z) => !z);

  /* ---------- fullscreen toggle ---------- */
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setFullscreen(false);
    }
  };

  /* ---------- share urls ---------- */
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
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col text-white">
      {/* ====== HEADER ====== */}
      <header className="flex items-center justify-between p-4">
        {/* counter */}
        <div className="swiper-pagination-lightbox text-sm" />

        {/* controls */}
        <div className="flex items-center gap-3">
          {/* zoom toggle */}
          <button
            onClick={toggleZoom}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            aria-label="toggle zoom"
          >
            {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </button>

          {/* fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            aria-label="toggle fullscreen"
          >
            {fullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>

          {/* share */}
          <div className="relative">
            <button
              onClick={() => setShowShare((s) => !s)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            >
              <Share2 size={18} />
            </button>

            {showShare && (
              <div className="absolute right-0 top-12 bg-white text-black rounded-lg shadow-lg p-3 flex gap-3 text-sm">
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
            <X size={18} />
          </button>
        </div>
      </header>

      {/* ====== SWIPER ====== */}
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
              <div className="swiper-zoom-container h-screen fixed top-0">
                <img
                  src={src}
                  alt=""
                  className=""
                  style={{
                    transform: zoomed ? "scale(1.1)" : "scale(0.7)",
                    transition: "transform .3s",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ====== FOOTER / DOWNLOAD ====== */}
      <footer className="p-4 flex items-center justify-center">
        <a
          href={images[startIndex]}
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30"
        >
          <Download size={18} />
          Download
        </a>
      </footer>
    </div>,
    document.body
  );
}
