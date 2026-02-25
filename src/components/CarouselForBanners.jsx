import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BaseCarouselBannerItem } from '@/components/base/BaseCarouselBannerItem';

export const CarouselForBanners = memo(({ images = [] }) => {

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation={true}
      autoplay={{
        delay: 5000,
      }}
      centeredSlides={true}
      loop={true}
      // spaceBetween={50}
      slidesPerView={1}
    >
      {images.map((image) => {
        if (image.isPublished) {
          return (
            <SwiperSlide key={image.id}>
              <BaseCarouselBannerItem {...image} />
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
});
