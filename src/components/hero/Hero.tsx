import React from "react";
import { MoveLeft } from "lucide-react";
const Hero = () => {

  return (
    <>
      <div
        id="heroContainer"
        className="bg-[url('/hero-pattern.png')] bg-cover bg-right pb-56 sm:pb-96 md:pb-44 lg:pb-72 xl:pb-96 pt-32 sm:pt-60"
        dir="rtl"
      >
        
        <div
          id="textsContainer"
          className="bg-re-200 md:w-7/12 lg:w-4/12 xl:2/12 md:mr-20 lg:mr-40 p-8 "
          data-aos="fade-up"

        >
          <h1
            id="heroTitle"
            className="bg-gradient-to-r from-[#8f76ae] via-[#75559c] to-[#552e87] inline-block text-transparent bg-clip-text font-semibold text-7xl pb-3 sm:text-8xl"
          >
            اپرا
          </h1>
          <h3 id="discribtion" className="text-2xl sm:textxl text-white mt-6">
            سرویس ها و محصولات مبتنی بر هوش مصنوعی در مراکز تماس و ارتباط با
            مشتریان
          </h3>
          <div id="buttonContainer" className="flex justify-end ml-8 py-12">
            <a
              id="linkToSeeProducts"
              href="#"
              className="flex items-end p-4 font-semibold rounded-xl bg-gradient-to-l duration-1000 from-[#ddc157] to-[#78682f] text-black text-lg hover:bg-gradient-to-l hover:from-[#a07f3b] hover:to-[#a07f3b] "
            >
تجربه نسخه آزمایشی              <MoveLeft className="mr-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
