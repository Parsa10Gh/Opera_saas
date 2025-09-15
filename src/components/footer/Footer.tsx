import Link from "next/link";
const Footer = () => {
  return (
    <div
      id="container"
      className="flex flex-col md:flex items-center bg-[#333] text-white  xl:rounded-[100px] md:rounded-[60px] rounded-3xl md:mx-20 mx-10 mb-8 "
      data-aos="fade-up"
    >
      <div
        id="main-footer"
        className=" flex lg:flex-row flex-col-reverse lg:text-right text-center space-x-1 sm:space-x-5 md:space-x-20 xl:px-12 xl:pt-14 md:px-6 md:pt-5 pt-3 px-3 items-center lg:items-start"
      >
        <div
          id="communication-ways "
          className="lg:flex-2 flex-col xl:space-y-6 lg:space-y-3 space-y-4 "
        >
          <h1 className="font-bold xl:text-lg text-[16px] lg:mt-0 mt-5">
            راه های ارتباطی
          </h1>
          <div className="flex flex-1 text-[#979595]  lg:justify-end">
            <p className="">
              تلفن تماس: 02173227884  |  09224947358  |  09909928171 {" "}
            </p>
            <img
              className="xl:size-6 size-5 sm:ml-2 "
              src="phone icon.svg"
              alt=""
            />
          </div>
          <div className="flex flex-1 text-right text-sm text-[#979595] lg:justify-end justify-center">
            <p>ایمیل: info@opera24.net</p>
            <img
              src="email icon.svg"
              alt=""
              className="xl:size-6 md:size-4 size-5 ml-2"
            />
          </div>
          <div
            id="pictures"
            className=" flex-1 xl:pb-20 md:pb-10 sm:pb-5"
          >
          {/* 2pictures */}
          </div>
        </div>
        <div
          id=" site-sections"
          className="sm:flex-1 flex-col md:px-12 sm:px-4 "
        >
          <div className="font-bold text-[16px]  lg:pb-6 mt-5 lg:mt-0 w-auto">
            بخش های سایت
          </div>
          <div className="text-[#979595] space-y-1 text-sm flex flex-col-reverse lg:items-end items-center">
            <div className=" cursor-pointer text-center">
              <Link href="/contactus">ارتباط با ما</Link>
            </div>
            <div className=" cursor-pointer  text-center">
              <Link href="/#aboutus-container">درباره ما</Link>
            </div>
            <div className=" cursor-pointer  text-center">
              <Link href="/#customers-section">مشتریان</Link>
            </div>
            <div className="cursor-pointer  text-center">
              <Link href="/#blog-container">وبلاگ</Link>
            </div>
            <div className="cursor-pointer  text-center">
              <Link href="/#servicesCardsContainer">طرح ها</Link>
            </div>
            <div className="cursor-pointer  text-center">
              <Link href="/">خانه</Link>
            </div>
          </div>
        </div>

        <div
          id="about-opera"
          className="lg:flex-2 flex flex-col lg:items-end items-center "
        >
          <div className="flex flex-row lg:justify-end lg:items-start items-center justify-center">
            <h1 className="font-bold xl:text-lg text-[16px] flex-1 ">
              درباره اپرا
            </h1>
            <img
              src="negative-space-headphones-on-blue-background 2.svg"
              alt=""
              className=" xl:mt-[-40px] xl:size-28 md:size-14 md:mt-[-20px] size-8 mt-[-7px]"
            />
          </div>
          <p className="text-sm xl:text-sm text-[#979595] leading-relaxed lg:text-right text-center'">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان ف.
          </p>
        </div>
      </div>
      <div id="bottom" className="flex-1 flex text-xs items-center ">
        <p>
          . تمامی حقوق مادی و معنوی این وبسایت برای مجموعه
          <span className="text-[#552E87]"> اپرا</span> محفوظ است
        </p>
        <img
          src="/Group 2483.svg"
          alt=""
          className="xl:ml-2 xl:mt-2 xl:size-10 md:size-5 size-3 mt-1"
        />
      </div>
    </div>
  );
};

export default Footer;
