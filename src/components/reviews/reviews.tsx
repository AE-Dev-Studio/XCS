"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  name: string;
  avatar: string;
  initials: string;
  bgColor: string;
  timeAgo: string;
  rating: number;
  text: string;
  fullText?: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    name: "idris zaxoy",
    avatar: "",
    initials: "i",
    bgColor: "bg-gray-500",
    timeAgo: "8 months ago",
    rating: 5,
    text: "Best chauffeur company I ever used very friendly drivers",
    verified: true,
  },
  {
    name: "rebecca hough",
    avatar: "",
    initials: "r",
    bgColor: "bg-teal-700",
    timeAgo: "10 months ago",
    rating: 5,
    text: "Excellent service very prompt with time keeping. Very well kept cars",
    verified: true,
  },
  {
    name: "Samir Rehman",
    avatar: "",
    initials: "S",
    bgColor: "bg-purple-500",
    timeAgo: "1 year ago",
    rating: 5,
    text: "I have used this company for over a year now and they have never disappointed. They offer a vip...",
    fullText:
      "I have used this company for over a year now and they have never disappointed. They offer a vip service and are very professional.",
    verified: true,
  },
  {
    name: "Mohammed Ali",
    avatar: "",
    initials: "M",
    bgColor: "bg-gray-600",
    timeAgo: "1 year ago",
    rating: 5,
    text: "Great service",
    verified: true,
  },
  {
    name: "John Smith",
    avatar: "",
    initials: "J",
    bgColor: "bg-blue-600",
    timeAgo: "2 months ago",
    rating: 5,
    text: "Professional and reliable service every time",
    verified: true,
  },
  {
    name: "Sarah Johnson",
    avatar: "",
    initials: "S",
    bgColor: "bg-pink-500",
    timeAgo: "3 months ago",
    rating: 5,
    text: "Exceptional experience with luxury vehicles",
    verified: true,
  },
];

const GoogleLogo = () => (
  <div className="flex items-center gap-1 text-3xl font-bold">
    <span className="text-blue-500">G</span>
    <span className="text-red-500">o</span>
    <span className="text-yellow-500">o</span>
    <span className="text-blue-500">g</span>
    <span className="text-green-500">l</span>
    <span className="text-red-500">e</span>
  </div>
);

const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(
    new Set()
  );
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const toggleReadMore = (index: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedReviews(newExpanded);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-4xl font-extrabold text-center mb-12 text-black">
          Customer Reviews
        </h1>

        {/* Google Reviews Header */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GoogleLogo />
            <span className="text-2xl font-semibold text-gray-800">
              Reviews
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-800">4.8</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
                style={{ clipPath: "inset(0 20% 0 0)" }}
              />
            </div>
          </div>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2.5 rounded-md font-semibold hover:bg-gray-800 transition-colors text-sm"
          >
            Review us on Google
          </a>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-5"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {reviews.map((review, index) => {
                const isExpanded = expandedReviews.has(index);
                const hasFullText =
                  review.fullText && review.fullText !== review.text;

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white border border-gray-200 rounded-lg p-6"
                    style={{
                      width: `calc(${100 / slidesToShow}% - ${
                        ((slidesToShow - 1) * 20) / slidesToShow
                      }px)`,
                      minHeight: "200px",
                    }}
                  >
                    {/* User Info */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="relative">
                        <div
                          className={`${review.bgColor} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-semibold flex-shrink-0`}
                        >
                          {review.initials}
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-800 truncate text-sm">
                            {review.name}
                          </h3>
                          {review.verified && (
                            <svg
                              className="w-4 h-4 text-blue-500 flex-shrink-0"
                              viewBox="0 0 14 14"
                              fill="currentColor"
                            >
                              <path d="M6.757.236a.35.35 0 0 1 .486 0l1.106 1.07a.35.35 0 0 0 .329.089l1.493-.375a.35.35 0 0 1 .422.244l.422 1.48a.35.35 0 0 0 .24.24l1.481.423a.35.35 0 0 1 .244.422l-.375 1.493a.35.35 0 0 0 .088.329l1.071 1.106a.35.35 0 0 1 0 .486l-1.07 1.106a.35.35 0 0 0-.089.329l.375 1.493a.35.35 0 0 1-.244.422l-1.48.422a.35.35 0 0 0-.24.24l-.423 1.481a.35.35 0 0 1-.422.244l-1.493-.375a.35.35 0 0 0-.329.088l-1.106 1.071a.35.35 0 0 1-.486 0l-1.106-1.07a.35.35 0 0 0-.329-.089l-1.493.375a.35.35 0 0 1-.422-.244l-.422-1.48a.35.35 0 0 0-.24-.24l-1.481-.423a.35.35 0 0 1-.244-.422l.375-1.493a.35.35 0 0 0-.088-.329L.236 7.243a.35.35 0 0 1 0-.486l1.07-1.106a.35.35 0 0 0 .089-.329L1.02 3.829a.35.35 0 0 1 .244-.422l1.48-.422a.35.35 0 0 0 .24-.24l.423-1.481a.35.35 0 0 1 .422-.244l1.493.375a.35.35 0 0 0 .329-.088L6.757.236Z" />
                              <path
                                fill="#fff"
                                fillRule="evenodd"
                                d="M9.065 4.85a.644.644 0 0 1 .899 0 .615.615 0 0 1 .053.823l-.053.059L6.48 9.15a.645.645 0 0 1-.84.052l-.06-.052-1.66-1.527a.616.616 0 0 1 0-.882.645.645 0 0 1 .84-.052l.06.052 1.21 1.086 3.034-2.978Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {review.timeAgo}
                        </span>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-300 text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {isExpanded && hasFullText
                        ? review.fullText
                        : review.text}
                    </p>

                    {/* Read More Button */}
                    {hasFullText && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="text-blue-600 hover:text-blue-700 font-medium mt-2 text-sm"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 rounded-full p-2 shadow-md transition-colors z-10"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 rounded-full p-2 shadow-md transition-colors z-10"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-black w-6"
                  : "bg-gray-400 w-2 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
