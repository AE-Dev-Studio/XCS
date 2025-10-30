"use client";
import Image from "next/image";
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
  const [realIndex, setRealIndex] = useState(startIndex);
  const [zoomed, setZoomed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const toggleZoom = () => setZoomed((z) => !z);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setFullscreen(false);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const logoUrl = `${window.location.origin}/assets/logo.jpeg`;

  const fbShare = `https://web.facebook.com/share_channel/?type=reshare&link=${encodeURIComponent(
    shareUrl
  )}&app_id=966242223397117&source_surface=external_reshare&display&hashtag=%23CCS`;

  const pinShare = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    shareUrl
  )}&media=${encodeURIComponent(
    logoUrl
  )}&description=Check%20out%20our%20gallery!`;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col text-white">
      <header className="flex items-center justify-between p-4">
        <div className="text-sm">
          {realIndex + 1}/{images.length}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleZoom}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            aria-label="toggle zoom"
          >
            {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            aria-label="toggle fullscreen"
          >
            {fullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowShare((s) => !s)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            >
              <Share2 size={18} />
            </button>

            {showShare && (
              <div className="absolute z-20 right-0 top-12 bg-white text-black rounded-lg shadow-lg p-3 flex flex-col gap-2 text-sm">
                {/* Facebook 
                <a
                  href={fbShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowShare(false)}
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Share it
                </a>

                 Twitter 
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}&text=`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowShare(false)}
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.523 3.379 4.75 3.42a9.878 9.878 0 01-6.128 2.105c-.398 0-.79-.023-1.175-.068a13.963 13.963 0 007.548 2.212c9.058 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.015-.637a9.954 9.954 0 002.45-2.549z" />
                  </svg>
                  Tweet it
                </a>

                Pinterest 
                <a
                  href={pinShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowShare(false)}
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                  Pin it
                </a> */}

                {/* Download current image */}
                <a
                  href={images[realIndex]} // ← current slide
                  download={`image-${realIndex + 1}.jpg`} // forces download
                  onClick={() => setShowShare(false)}
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <Download size={16} />
                  Download
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
          modules={[Navigation, Zoom]} // ← pagination removed
          initialSlide={startIndex}
          navigation
          zoom
          onActiveIndexChange={(swiper) => setRealIndex(swiper.realIndex)} // live update
          className="w-full h-full"
        >
          {images.map((src) => (
            <SwiperSlide key={src} zoom>
              <div className="swiper-zoom-container h-screen fixed top-0">
                <Image
                  src={src}
                  alt=""
                  fill
                  className={`transition-transform duration-500 ${
                    zoomed ? "scale-100 md:scale-110 " : "scale-75 md:scale-75 "
                  }`}
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
