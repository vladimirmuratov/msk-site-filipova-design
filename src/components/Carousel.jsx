import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BaseFeedBackCard } from '@/components/base/BaseFeedBackCard';
import { memo } from 'react';

export const Carousel = memo(({ reviews, isMobile }) => {
    const slidesPerView = isMobile ? 1 : 2;
    const centeredSlides = !isMobile;

    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            navigation={true}
            autoplay={{
                delay: 5000,
            }}
            centeredSlides={centeredSlides}
            loop={true}
            spaceBetween={50}
            slidesPerView={slidesPerView}
        >
            {reviews.map((review) => {
                if (review.isPublished) {
                    return (
                        <SwiperSlide key={review.id}>
                            <BaseFeedBackCard {...review} />
                        </SwiperSlide>
                    );
                }
            })}
        </Swiper>
    );
});
