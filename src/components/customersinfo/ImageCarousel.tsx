import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const ImageCarousel: FC = () => {
  return (
    <div id="customers-section"           data-aos="fade-up"
>
      <h1
        id="title"
        className="text-3xl w-fit text-gray-800 font-semibold border-b-2 pt-6 pb-2 mx-auto md:mr-20 mt-20 mb-10"
      >
        مشتریان
      </h1>
      <div  className="relative mx-auto p-4 bg-opacity-30 backdrop-blur-lg border-[rgba(255,255,255,0.2)]   bg-[rgba(255,255,255,0.1)]   rounded-lg shadow-lg w-full mt-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={2000}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="flex justify-center items-center">
            <img src="/image 13.svg" alt="Image 1" className="w-[177px] h-[146px]" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
              src="/image 14.svg"
              alt="Image 2"
              className="w-[177px] h-[146px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
 src="/image 16.svg"              alt="Image 3"
              className="w-[177px] h-[146px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
 src="/image 17.svg"              alt="Image 4"
              className="w-[177px] h-[146px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
 src="/image 19.svg"              alt="Image 5"
              className="w-[177px] h-[146px]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <img
 src="/image 20.svg"              alt="Image 6"
              className="w-[177px] h-[146px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
