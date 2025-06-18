import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import BlogCard from "../Blog/BlogCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface BlogPost {
  id:string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

interface BlogListProps {
  blogPosts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogPosts }) => {
  return (

    <div id="blog-container" className="relative p-6 flex flex-col items-center w-full">
      <h1 id="title" className="text-3xl w-fit text-gray-800 font-semibold border-b-2 pb-2 mx-auto my-16 md:mr-20">
بلاگ ها        </h1>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, Pagination, EffectCoverflow]}
        className="w-full"
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <BlogCard
            id={post.id}
              imageSrc={post.imageSrc}
              title={post.title}
              subtitle={post.subtitle}
              description={post.description}
              link={post.link}
              isActive={false}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default BlogList;