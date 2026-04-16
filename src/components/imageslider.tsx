import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/swiper-bundle.css";

type ImageSliderProps = {
  images: string[];
  autoPlay?: boolean;
  showNavigation?: boolean;
  compact?: boolean;
  interactive?: boolean;
  onSlideChange?: (index: number) => void;
};

function ImageSlider({
  images,
  autoPlay = false,
  showNavigation = false,
  compact = false,
  interactive = true,
  onSlideChange,
}: ImageSliderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${
        compact ? "rounded-t-lg" : ""
      }`}
    >
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => onSlideChange?.(swiper.realIndex)}
        loop={images.length > 1}
        autoplay={
          autoPlay
            ? {
                delay: 3000,
                disableOnInteraction: false,
              }
            : false
        }
        navigation={
          interactive && showNavigation && images.length > 1
            ? {
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }
            : false
        }
        allowTouchMove={interactive}
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="w-full">
            <img
              src={img}
              alt={`slide-${i}`}
              className={`w-full object-cover block ${
                compact ? "" : "aspect-[16/12]"
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ================= CUSTOM NAVIGATION BUTTONS ================= */}
      {showNavigation && images.length > 1 && (
        <>
          {/* LEFT */}
          <button
            className="custom-prev absolute left-2 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full
            bg-black/50 text-white
            flex items-center justify-center
            backdrop-blur-sm
            hover:bg-blue-600
            transition shadow-md z-10 cursor-pointer"
          >
            ◀
          </button>

          {/* RIGHT */}
          <button
            className="custom-next absolute right-2 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full
            bg-black/50 text-white
            flex items-center justify-center
            backdrop-blur-sm
            hover:bg-blue-600
            transition shadow-md z-10 cursor-pointer"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
}

export default ImageSlider;
