import dynamic from "next/dynamic";
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Map from "../Map";

const ContactUsMain = dynamic(() => import("./ContactUsMain"), { ssr: false });

const ContactUsPage = () => {
  return (
    <div
      id="container"
      className="bg-[url('/background-contactus-2.svg')]
    bg-cover bg-center h-full flex flex-col "
    >
      <div>
        {/* <HumburgerNavbar/> */}
        {/* <NewNavbar/> */}
        {/* <SheetDemo/> */}
        <Navbar />
      </div>
      <div
        id="top-section"
        className="lg:flex-row bg-red500 flex items-start flex-col-reverse mt-20"
        data-aos="fade-up"
      >
        <div
          id="left-section"
          className=" flex flex-col flex-1 lg:pt-60 lg:pb-48 md:pb-20 pb-12 items-center justify-center"
        >
          <div
            id="address"
            className="flex-1 sm:flex-3 bg-white  w-[70%] related flex flex-col items-end text-gray-700 font-medium leading-relaxed rounded-2xl border-8 "
          >
            <div id="map" className="flex-1  w-[100%] z-0">
              <Map />
            </div>
            {/* when we use map rounded doesnt apply because of the map     */}
            <div className="py-8">
              <div className="flex-2 flex items-center px-2 md:text-base text-sm rounded-b-full ">
                <p className="flex-12 text-right lg:pt-0 pt-4">
                  دفتر مرکزی: تهران، پاسداران، محله دروس، خیابان میربلوکی، پلاک
                  9، واحد 101 دپارتمان فنی: تهران، دانشگاه علم و صنعت، ساختمان
                  دانشکده برق، طبقه 2، دفتر شتاب دهنده هوش مصنوعی گشتاسپ
                </p>
                <img
                  src="location icon (1).svg"
                  className="flex-2 mx-2 lg:size-7 md:size-6 sm:size-5 size-4 sm:mb-5 md:mb-7 lg:mb-10"
                  alt=""
                />
              </div>
              <div className="flex justify-end px-2 py-4 text-sm">
                <p className="flex-12 text-right lg:pt-0 pt-8">
                  تلفن تماس: 02173227884 | 09224947358 | 09909928171
                </p>
                <img
                  src="phone icon.svg "
                  className="flex lg:size-7 md:size-6 sm:size-5 size-4 mx-2 lg:mt-[-2px] sm:mt-2 mt-[11px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div id="right-section" className="flex-1 bg-slte-700">
          <ContactUsMain />
        </div>
      </div>

      <div id="bottom-section" className="" data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
