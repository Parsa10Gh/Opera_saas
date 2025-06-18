import { space } from "postcss/lib/list";
import Card from "./Card";
import React, { useEffect } from "react";

const cardData = [
  {
    title: "امکان جستجو در تماس ها",
    description:
      "اپرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    imagesrc: "/call-search-item.svg",
    extratext:
      "با اپرا می‌توانید به‌سرعت در تمامی تماس‌های ورودی و خروجی جستجو کرده و تماس موردنظر خود را پیدا کنید. این قابلیت دسترسی سریع به اطلاعات مهم را فراهم می‌آورد.",
  },
  {
    title: "ارائه راه‌حل جهت بهبود تماس",
    description:
      "اپرا با تحلیل تماس ها، راه حل هایی را جهت بهبود کیفیت پاسخ گویی اپراتور ها ارائه میکند ... ",
    imagesrc: "/Wavy_Bus-19_Single-08 1.svg",
    extratext:
      "اپرا با تحلیل دقیق مکالمات، نقاط قابل بهبود را شناسایی کرده و راهکارهای عملی برای ارتقاء مهارت‌های اپراتورها ارائه می‌دهد. با این راه‌حل‌ها، تجربه مشتریان را بهبود ببخشید.",
  },
  {
    title: "امکان بازرسی تمام تماس ها",
    description:
      "با کمک opera می‌توانید تمامی تماس هاس ورودی و خروجی را بازرسی کنید .این امر موجب میشود که...",
    imagesrc: "/bazrasi-tamas.svg",
    extratext:
      "این امر موجب می‌شود نقاط ضعف و قوت مکالمات را شناسایی کرده و استراتژی‌های بهبود را به‌صورت دقیق‌تری اجرا کنید. با این قابلیت، کیفیت خدمات خود را به‌طور مستمر افزایش دهید.",
  },
  {
    title: "صرفه جویی در هزینه ها",
    description: "با کمک opera می‌توانید در هزینه های خود صرفه جویی کنید.",
    imagesrc: "/OrgUVC-L_Bus-16_Single-08 1.svg",
    extratext:
      "با اپرا می‌توانید هزینه‌های خود را کاهش داده و بهره‌وری کسب‌وکار را افزایش دهید. این صرفه‌جویی به بهبود سودآوری شما کمک می‌کند.",
  },
  {
    title: "همگام با تکنولوژی روز دنیا",
    description:
      "اپرا با به روزترین تکنولوژی روز دنیا محصولات خود را هماهنگ کرده است.",
    imagesrc: "/Portfolio-update 1.svg",
    extratext:
      "اپرا با بهره‌گیری از جدیدترین تکنولوژی‌ها، محصولات خود را همواره به‌روز و هماهنگ با پیشرفت‌های جهانی نگه می‌دارد. این همگامی به شما کمک می‌کند تا از مزایای نوآوری‌های پیشرفته بهره‌مند شوید.",
  },
  {
    title: " پشتیبانی دائمی",
    description: "با تهیه محصول از پشتیبانی دائمی آن نیز برخوردار شوید!",
    imagesrc: "/Sandy_Bus-04_Single-10 1.svg",
    extratext:
      "با خرید محصولات اپرا، از پشتیبانی دائمی و همراهی همیشگی بهره‌مند شوید. این پشتیبانی اطمینان شما را در استفاده از خدمات تضمین می‌کند.",
  },
];

const Cards = () => {
  return (
    <div className="w-[95%] mx-auto " dir="rtl">
      <div className="lg:flex items-center justify-center">
        <img className="" src="/whyOpera.svg" alt="" data-aos="fade-left" />
        <h1
          className="text-[#333333]  lg:text-6xl font-bold w-fit mx-auto lg:mx-0 md:text-5xl text-4xl"
          data-aos="fade-up"
        >
          چرا
          <span className="text-customPurple mr-3">اپرا </span>؟
        </h1>
      </div>

      <div className="flex flex-wrap mt-14 justify-center">
        {cardData.map((cart, index) => (
          <div key={index} data-aos="fade-up">
            <Card
              title={cart.title}
              description={cart.description}
              imagesrc={cart.imagesrc}
              extratext={cart.extratext}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
