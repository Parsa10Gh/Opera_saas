"use client";

import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  RsetForgetEmail,
  selectForgetEmail,
  RsetFormErrors,
  selectFormErrors,
  RsetForgetTimer,
  selectForgetTimer,
  RsetForgetVerficationCode,
  selectForgetVerficationCode,
  RsetEmailExist,
  selectEmailExist,
  RsetCodeVerified,
  selectCodeVerfied,
} from "@/slices/MainSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import ConfirmPassword from "@/components/forgetPass/ConfirmPassword ";
const ForgetPass = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const email = useSelector(selectEmail); // Extract the email from the store
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false); // State to manage visibility

  const forgetEmail = useSelector(selectForgetEmail);
  const formErrors = useSelector(selectFormErrors);
  const time = useSelector(selectForgetTimer);
  const forgetVerficationCode = useSelector(selectForgetVerficationCode)
  const codeVerified = useSelector(selectCodeVerfied)
  const emailExist = useSelector(selectEmailExist)

  const emailIsValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    forgetEmail
  );
  const emailIsEmpty = forgetEmail === "";

  const validation = () => {
    var errors = {
      forgetEmail: "",
    };
    if (!emailIsValid) {
      errors.forgetEmail = "فرمت ایمیل وارد شده صحیح نمی‌باشد !";
    }
    if (emailIsEmpty) {
      errors.forgetEmail = "ایمیل نباید خالی باشد!";
    }
    return errors;
  };

  const handleForgetPass = () => {
    if (emailIsValid) {
      dispatch(RsetFormErrors({}));
      // post email to backend for check
      if (true) {
        dispatch(RsetEmailExist(true));
        dispatch(RsetForgetTimer(119));
      }
    } else {
      dispatch(RsetFormErrors(validation()));
    }
  };
  const handleVerifyCode = () => {
    // post code to backend for check => if true
    dispatch(RsetCodeVerified(true));
  };

  useEffect(() => {
    dispatch(RsetFormErrors({}));
    dispatch(RsetForgetEmail(""));

  },[]);


  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        dispatch(RsetForgetTimer(time-1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
        {!codeVerified? (
          <>
      <div className="w-11/12 sm:w-8/12 lg:w-6/12 xl:w-4/12 bg-gray-100 rounded-2xl shadow-lg pt-8 mx-auto mt-20 md:mt-40">
        <h3 className="text-center text-xl text-purple-800">فراموشی رمزعبور</h3>
        <div className="p-8 sm:p-16" dir="rtl">
          <Input
            className="h-12 text-white mb-2 placeholder:text-purple-300 focus-visible:ring-0 focus-visible:ring-offset-0 px-8 border-none rounded-xl bg-purple-800"
            placeholder="ایمیل خود را وارد کنید"
            value={forgetEmail}
            onChange={(e) => dispatch(RsetForgetEmail(e.target.value))}
            type="email"
          />
          <p className="text-red-600 text-xs mb-8 px-4">{formErrors.forgetEmail}</p>
          {emailExist && (
            <div className="mb-6 mx-auto" dir="rtl">
              <Label className="px-2">کد تأیید را وارد کنید</Label>
              <InputOTP
                maxLength={6}
                value={forgetVerficationCode}
                onChange={(value) => dispatch(RsetForgetVerficationCode(value))}
                className="mb-6 flex-col items-center"
              >
                <InputOTPGroup
                  className="h-12 w-fit flex justify-center text-purple-800 mt-1 mb-2"
                  dir="ltr"
                >
                  <InputOTPSlot index={0} />
                  <InputOTPSeparator/>
                  <InputOTPSlot index={1} />
                  <InputOTPSeparator/>
                  <InputOTPSlot index={2} />
                  <InputOTPSeparator/>
                  <InputOTPSlot index={3} />
                  <InputOTPSeparator/>
                  <InputOTPSlot index={4} />
                  <InputOTPSeparator/>
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <a
                onClick={() => {
                  {
                    time === 0 ? handleForgetPass() : null;
                  }
                }}
                className={time === 0 ? "text-xs mb-8 px-2 hover:text-purple-600 cursor-pointer" : "text-xs mb-8 px-2" }
              >
                {time === 0?  `دریافت مجدد ایمیل` : ` ایمیلی دریافت نکردید؟ دریافت مجدد پس از ${formatTime(time)}`}
               
              </a>
            </div>
          )}
          <Button
            onClick={() => {
              {
                emailExist ? handleVerifyCode() : handleForgetPass();
              }
            }}
            className="px-8 py-5 mr-1 text-white rounded text-lg bg-violet-600 hover:text-violet-600 hover:bg-white"
          >
            {emailExist ? "تأیید" : "ارسال"}
          </Button>
        </div>
      </div>
    </>
    ) :(<ConfirmPassword/>)}
    </>

    // <>
    //   <div className="w-11/12 sm:w-8/12 lg:w-6/12 xl:w-4/12 bg-gray-100 rounded-2xl shadow-lg pt-8 mx-auto mt-20 md:mt-40">
    //     <h3 className="text-center text-xl text-purple-800">فراموشی رمزعبور</h3>
    //     <div className="p-8 sm:p-16" dir="rtl">
    //       <Input
    //         className="h-12 text-white mb-2 placeholder:text-purple-300 focus-visible:ring-0 focus-visible:ring-offset-0 px-8 border-none rounded-xl bg-purple-800"
    //         placeholder="ایمیل خود را وارد کنید"
    //         value={forgetEmail}
    //         onChange={(e) => dispatch(RsetForgetEmail(e.target.value))}
    //         type="email"
    //       />
    //       <p className="text-red-600 text-xs mb-8 px-4">{formErrors.forgetEmail}</p>
    //       {emailExist && (
    //         <div className="mb-6 mx-auto" dir="rtl">
    //           <Label className="px-2">کد تأیید را وارد کنید</Label>
    //           <InputOTP
    //             maxLength={6}
    //             value={forgetVerficationCode}
    //             onChange={(value) => dispatch(RsetForgetVerficationCode(value))}
    //             className="mb-6 flex-col items-center"
    //           >
    //             <InputOTPGroup
    //               className="h-12 w-fit flex justify-center text-purple-800 mt-1 mb-2"
    //               dir="ltr"
    //             >
    //               <InputOTPSlot index={0} />
    //               <InputOTPSlot index={1} />
    //               <InputOTPSlot index={2} />
    //               <InputOTPSlot index={3} />
    //               <InputOTPSlot index={4} />
    //               <InputOTPSlot index={5} />
    //             </InputOTPGroup>
    //           </InputOTP>
    //           <a
    //             onClick={() => {
    //               {
    //                 time === 0 ? handleForgetPass() : null;
    //               }
    //             }}
    //             className={time === 0 ? "text-xs mb-8 px-2 hover:text-purple-600 cursor-pointer" : "text-xs mb-8 px-2" }
    //           >
    //             {time === 0?  `دریافت مجدد ایمیل` : ` ایمیلی دریافت نکردید؟ دریافت مجدد پس از ${formatTime(time)}`}
               
    //           </a>
    //         </div>
    //       )}
    //       <Button
    //         onClick={() => {
    //           {
    //             emailExist ? handleVerifyCode() : handleForgetPass();
    //           }
    //         }}
    //         className="px-8 py-5 mr-1 text-white rounded text-lg bg-violet-600 hover:text-violet-600 hover:bg-white"
    //       >
    //         {emailExist ? "تأیید" : "ارسال"}
    //       </Button>
    //     </div>
    //   </div>
    // </>
  );
};

export default ForgetPass;
