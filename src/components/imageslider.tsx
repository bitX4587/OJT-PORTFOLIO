import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/swiper-bundle.css";

type ImageSliderProps = {
  images: string[];
  variant?: "credentials" | "projects" | "certificates";
  mode?: "preview" | "focus";
  autoPlay?: boolean;
  showNavigation?: boolean;
  interactive?: boolean;
  onSlideChange?: (index: number) => void;
};

const sliderVariants = {
  credentials: {
    preview: {
      container: "rounded-b-4xl",
      image: "object-cover aspect-[12/9] ",
    },
    focus: {
      container: "rounded-t-4xl",
      image: "object-contain",
    },
  },
  projects: {
    preview: {
      container: "",
      image: "aspect-[16/9] object-cover",
    },
    focus: {
      container: "",
      image: "rounded-t-4xl object-contain",
    },
  },
  certificates: {
    preview: {
      container: "",
      image: "aspect-[3/2] object-cover ",
    },
    focus: {
      container: "",
      image: "rounded-t-4xl object-contain ",
    },
  },
};

function ImageSlider({
  images,
  variant = "projects",
  mode = "preview",
  autoPlay = false,
  showNavigation = false,
  interactive = true,
  onSlideChange,
}: ImageSliderProps) {
  const styles = sliderVariants[variant][mode];
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (!swiper) return;
    if (!prevRef.current || !nextRef.current) return;

    const navigation = swiper.params.navigation;

    if (navigation && typeof navigation !== "boolean") {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className={`relative w-full overflow-hidden ${styles.container}`}>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        loop={images.length > 1}
        autoplay={
          autoPlay ? { delay: 3000, disableOnInteraction: false } : false
        }
        onSwiper={setSwiper}
        onSlideChange={(s) => onSlideChange?.(s.realIndex)}
        allowTouchMove={interactive}
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} className={`w-full block ${styles.image}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && images.length > 1 && (
        <>
          <button
            ref={prevRef}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white z-10 cursor-pointer"
          >
            ◀
          </button>

          <button
            ref={nextRef}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white z-10 cursor-pointer"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
}

export default ImageSlider;
