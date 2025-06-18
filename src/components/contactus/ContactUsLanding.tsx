"use client";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

import {
  RsetContactName,
  RsetContactPhoneNumber,
  RsetContactText,
  RsetContactForm,
  RsetContactEmail,
  RsetEmailError,
  RsetNameError,
  RsetNumberError,
  RsetTextError,
} from "../../slices/contactSlice"; // Adjust the import paths

const ContactUsLanding = () => {
  const dispatch = useDispatch();

  // Access state from the Redux store
  const contactName = useSelector((state: any) => state.contact.contactName);
  const contactPhoneNumber = useSelector(
    (state: any) => state.contact.contactPhoneNumber
  );
  const contactText = useSelector((state: any) => state.contact.contactText);
  const contactEmail = useSelector((state: any) => state.contact.contactEmail);
  const emailError = useSelector((state: any) => state.contact.emailError);
  const nameError = useSelector((state: any) => state.contact.nameError);
  const numberError = useSelector((state: any) => state.contact.numberError);
  const textError = useSelector((state: any) => state.contact.textError);
  const { toast } = useToast();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; // Email validation regex
  console.log(contactText);
  const handleSubmit = () => {
    let hasError = false;

    // Reset all error states before validation
    dispatch(RsetEmailError(""));
    dispatch(RsetNameError(""));
    dispatch(RsetTextError(""));
    dispatch(RsetNumberError(""));

    if (contactName === "") {
      dispatch(RsetNameError("نام و نام خانوادگی نمی تواند خالی باشد"));
      hasError = true;
    }

    if (!emailRegex.test(contactEmail)) {
      dispatch(RsetEmailError("لطفاً یک ایمیل معتبر وارد کنید."));
      hasError = true;
    }

    if (contactText === "") {
      dispatch(RsetTextError(".متن درخواست نمی تواند خالی باشد"));
      hasError = true;
    }

    if (!contactPhoneNumber || contactPhoneNumber.toString().length < 11) {
      if (!contactPhoneNumber) {
        dispatch(RsetNumberError(".شماره تلفن همراه نمی تواند خالی باشد."));
      } else {
        dispatch(RsetNumberError("لطفا شماره تلفن همراه معتبر وارد کنید."));
      }
      hasError = true;
    }

    // If there are no errors, proceed with submission
    if (!hasError) {
      console.log({
        contactName,
        contactPhoneNumber,
        contactEmail,
        contactText,
      });
      dispatch(RsetContactForm());
      {
        toast({
          title: ".پیام شما ارسال شد",
          description: "",
          className:
            "bg-purple-700 text-white opacity-80 mb-5 rounded-3xl text-center items-center flex outline-none border-none",
        });
      }
    }
  };
  const lettersOnlyRegex = /^[a-zA-Zآ-ی\s]*$/;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (lettersOnlyRegex.test(inputValue)) {
      dispatch(RsetContactName(inputValue));
    }
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    if (/^\d*$/.test(newPhoneNumber) && newPhoneNumber.length <= 11) {
      dispatch(RsetContactPhoneNumber(newPhoneNumber));
    }
  };

  return (
    <div className="flex mb-24   md:mb-48 flex-col lg:mt-28 lg:ml-[20vw] mt-8 md:mx-16 lg:w-[48%] mx-auto sm:w-[75%] w-[85%]">
      <div className=" flex" data-aos="fade-up">
        <h1 className="text-black text-xl sm:text-3xl font-bold flex-1 lg:mr-2 md:mr-36 sm:mr-28  border-b-2 border-black w-fit absolute right-0 pb-2 lg:right-[-320px] md:right-[-220px] sm:right-[-120px]">
          ارتباط با ما
        </h1>
      </div>
      <img
        src="/subtract.svg"
        alt=""
        className="bottom mt-8 lg:size-28 md:size-24 sm:size-20 size-14"
      />
      <div
        className="flex items-center md:justify-start justify-center "
        data-aos="fade-left"
      >
        <div
          id="container"
          className="w-[95%] md:w-[65%] lg:w-[80%] rounded-[40px] bg-white p-1 sm:p-2 md:p-3 lg:mt-8 md:mt-4 sm:mt-4 mt-4 shadow-customShadow1"
        >
          <div
            id="main"
            className="bg-white rounded-[44px] shadow-customShadow1 px-2 pt-10 pb-8 md:pb-20 relative"
          >
            <p className="text-purple-700 md:text-base text-sm font-bold text-right pb-5">
              .درصورت داشتن درخواست، نظر یا انتقاد برای ما بنویسید
            </p>
            <div className="relative">
              <Input
                placeholder="نام و نام خانوادگی"
                className="text-right border-gray-500 border-2 md:my-3 pr-14 pl-5 md:py-5 py-1 placeholder-purple-300 md:text-sm text-xs focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg"
                value={contactName}
                onChange={handleNameChange}
              />
              <img
                src="/account_circle.svg"
                alt=""
                className="absolute right-3 top-1/2 transform -translate-y-1/2 md:size-7 size-5"
              />
            </div>
            {nameError && (
              <p className="text-red-600 md:text-sm sm:text-xs text-[8px] text-right pr-3 my-1">
                {nameError}
              </p>
            )}
            <div className="relative">
              <Input
                placeholder="شماره تلفن همراه"
                value={contactPhoneNumber ? contactPhoneNumber.toString() : ""}
                className="text-right border-gray-500 border-2 my-1 lg:my-2 lg:py-5 placeholder-purple-300 text-xs md:text-sm pr-14 lg:pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg"
                onChange={handlePhoneNumberChange}
              />
              <img
                src="/call.svg"
                alt=""
                className="absolute right-3 top-1/2 transform -translate-y-1/2 md:size-7 size-5"
              />
            </div>
            {numberError && (
              <p className="text-red-600 md:text-sm text-xs text-right pr-3 my-1">
                {numberError}
              </p>
            )}
            <div className="relative">
              <Input
                placeholder="ایمیل"
                type="email"
                value={contactEmail ? contactEmail : ""}
                className="text-right border-gray-500 border-2 my-1 lg:my-2 lg:py-5 placeholder-purple-300 text-xs md:text-sm pr-14 lg:pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg"
                onChange={(e) => {
                  dispatch(RsetContactEmail(e.target.value));
                }}
              />
              <img
                src="/mail.svg"
                alt=""
                className="absolute right-3 top-1/2 transform -translate-y-1/2 md:size-7 size-5"
              />
            </div>
            {emailError && (
              <p className="text-red-600 md:text-sm text-xs py-1 text-right pr-3">
                {emailError}
              </p>
            )}{" "}
            {/* Show email error message */}
            <div className="relative ">
              <Textarea
                placeholder="متن درخواست / نظر / انتقاد"
                className="text-right min-h-60   border-gray-500 border-2 md:my-3 pt-3 placeholder-purple-300 md:text-sm text-xs pr-14 pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg"
                value={contactText}
                onChange={(e) => {
                  dispatch(RsetContactText(e.target.value));
                }}
              />
              <img
                src="/chat.svg"
                alt=""
                className="absolute right-3 top-6 transform -translate-y-1/2 md:size-7 size-5"
              />
            </div>
            {textError && (
              <p className="text-red-600 md:text-sm text-xs py-1 text-right pr-3">
                {textError}
              </p>
            )}
            <Button
              variant="outline"
              className="text-right border-gray-600 border-[2px] md:px-10 px-6 text-purple-700 md:text-sm text-xs font-bold md:rounded-3xl rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 md:bottom-9 md:left-10 md:absolute ml-5 md:ml-0 md:mt-0 mt-4"
              onClick={handleSubmit} // Use handleSubmit function here
            >
              ارسال
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUsLanding;
