import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";

// import required modules
import { Lazy, Pagination, Navigation } from "swiper";

export default function GallerySlider({ gallery }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        lazy={true}
        modules={[Lazy, Pagination, Navigation]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="GallerySwiper"
      >
        {gallery.map((photo, index) => (
          <SwiperSlide key={photo.id}>
            <Image
              layout="responsive"
              src={photo.link}
              width={270}
              height={350}
              alt={photo.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
