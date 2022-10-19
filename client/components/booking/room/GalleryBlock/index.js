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

export default function GalleryBlock({ gallery }) {
  console.log(gallery)
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        lazy={true}
        modules={[Lazy, Pagination, Navigation]}
        className="GallerySwiper"
      >
        {gallery.map((photo, index) => (
          <SwiperSlide key={photo._id} style={{background: "#fafafa"}}>
            <Image
              layout="responsive"
              src={photo.link}
              width={706}
              height={407.1}
              alt={photo.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
