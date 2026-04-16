// ImageSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/swiper-bundle.css";

type ImageSliderProps = {
  images: string[];
  autoPlay?: boolean;
  showNavigation?: boolean;
  compact?: boolean;
  interactive?: boolean;
  onSlideChange?: (index: number) => void; // 👈 add this
};

function ImageSlider({
  images,
  autoPlay = false,
  showNavigation = false,
  compact = false,
  interactive = true, // 👈 default TRUE
  onSlideChange,
}: ImageSliderProps) {
  return (
    <div className={`w-full overflow-hidden ${compact ? "rounded-t-lg" : ""}`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
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
        // 🔥 REMOVE CLICKABLE PAGINATION IN PREVIEW
        pagination={interactive ? { clickable: true } : false}
        // 🔥 REMOVE ARROWS IN PREVIEW
        navigation={interactive && showNavigation}
        // 🔥 DISABLE SWIPE IN PREVIEW
        allowTouchMove={interactive}
        className="w-full "
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="">
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full object-cover block aspect-video"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
