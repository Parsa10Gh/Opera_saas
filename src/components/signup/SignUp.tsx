"use client";

import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CircleUserRound, Eye, EyeOff, Lock, Mail, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import {
  RsetUserName,
  selectUserName,
  RsetPassword,
  selectPassword,
  RsetShowPassword,
  selectShowPassword,
  RsetShowPasswordType,
  selectShowPasswordType,
  RsetFirstName,
  selectFirstName,
  RsetLastName,
  selectLastName,
  RsetEmail,
  selectEmail,
  RsetPasswordConfirmation,
  selectPasswordConfirmation,
  RsetShowPasswordConfirmation,
  selectShowPasswordConfirmation,
  RsetShowPasswordConfirmationType,
  selectShowPasswordConfirmationType,
  RsetFormErrors,
  selectFormErrors,
  RsetGender,
  selectGender,
  RsetIsGenderChecked,
  selectIsGenderChecked,
} from "@/slices/MainSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "../ui/label";
import Footer from "../footer/Footer";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();

  const { toast } = useToast();

  const gender = useSelector(selectGender);
  const isGenderChecked = useSelector(selectIsGenderChecked);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const userName = useSelector(selectUserName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const passwordConfirmation = useSelector(selectPasswordConfirmation);
  const showPassword = useSelector(selectShowPassword);
  const showPasswordType = useSelector(selectShowPasswordType);
  const showPasswordConfirmation = useSelector(selectShowPasswordConfirmation);
  const showPasswordConfirmationType = useSelector(
    selectShowPasswordConfirmationType
  );
  const formErrors = useSelector(selectFormErrors);

  // validations
  const passwordValidation = (pass: string) => {
    const hasNumber = /[0-9]/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;
    const isEnough = pass.length > 7;
    const passChars = pass.split("");
    const hasSpace = () => {
      let cnt = 0;
      passChars.forEach((char) => char===" "? cnt++ : cnt = 0)
      if(cnt){
        return true;
      }else{
        return false;
      }
    }
    return (
      hasNumber.test(pass) &&
      hasUpperCase.test(pass) &&
      hasSymbol.test(pass) &&
      hasLowerCase.test(pass) &&
      !hasSpace() &&
      isEnough
    );
  };
  
  const farsi = /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤآإأءًٌٍَُِّ\s]+$/;
  const namevalidation = (name : string) => {
    let y : number = 0;
    const firstnameChars = name.split("");
    firstnameChars.forEach((char) => {
      if(!Boolean(farsi.test(char))){
        y++;
      }
    })
    if(y===0){
      return true;
    }else{
      return false;
    }
  }

  const genderIsEmpty = isGenderChecked === "no";
  const firstNameIsValid = namevalidation(firstName);
  const firstNameIsEmpty = firstName.trim() === "";
  const lastNameIsValid = namevalidation(lastName);
  const lastNameIsEmpty = lastName.trim() === "";
  const userNameIsValid = /^(?!\.)(?![a-zA-Z0-9._]*(?:\._|_\.|\.\.))[a-zA-Z0-9._]*[a-zA-Z0-9_]$/.test(userName);
  console.log(userNameIsValid);
  console.log(userName);
  const userNameIsEmpty = userName === "";
  const emailIsValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const emailIsEmpty = email === "";
  const passwordIsValid = passwordValidation(password);
  const passwordIsEmpty = password === "";
  const passwordConfirmIsValid = password === passwordConfirmation;
  const passwordConfirmIsEmpty = passwordConfirmation === "";
  const formIsValid =
    !firstNameIsEmpty &&
    !lastNameIsEmpty &&
    !userNameIsEmpty &&
    userNameIsValid &&
    emailIsValid &&
    !emailIsEmpty &&
    passwordIsValid &&
    !passwordIsEmpty &&
    passwordConfirmIsValid &&
    !passwordConfirmIsEmpty;

  showPassword
    ? dispatch(RsetShowPasswordType("text"))
    : dispatch(RsetShowPasswordType("password"));

  showPasswordConfirmation
    ? dispatch(RsetShowPasswordConfirmationType("text"))
    : dispatch(RsetShowPasswordConfirmationType("password"));

  // validation error generator
  const validation = () => {
    var errors = {
      gender: "",
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      passwordConfirmation: "",
    };
    
    if (genderIsEmpty) {
      errors.gender = "جنسیت نمی‌تواند خالی باشد !";
    }
    if(!firstNameIsValid){
      errors.firstName = "نام باید تنها شامل حروف فارسی باشد"
    }
    if (firstNameIsEmpty) {
      errors.firstName = "نام نمی‌تواند خالی باشد !";
    }
    if(!lastNameIsValid){
      errors.lastName = "نام خانوادگی باید تنها شامل حروف فارسی باشد"
    }
    if (lastNameIsEmpty) {
      errors.lastName = "نام خانوادگی نمی‌تواند خالی باشد !";
    }
    if (!emailIsValid) {
      errors.email = "فرمت ایمیل وارد شده صحیح نمی‌باشد !";
    }
    if (emailIsEmpty) {
      errors.email = "ایمیل نمی‌تواند خالی باشد !";
    }
    if (!userNameIsValid) {
      errors.userName = 'نام کابری تنها می تواند شامل حروف انگلیسی، عدد، "_" و "." باشد ! ';
    }
    if (userNameIsEmpty) {
      errors.userName = "نام کاربری نمی‌تواند خالی باشد !";
    }
    if (!passwordIsValid) {
      errors.password =
        "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ ، یک سمبل، یک عدد و حداقل شامل 8 کاراکتر باشد و نباید شامل فاصله باشد  !";
    }
    if (passwordIsEmpty) {
      errors.password = "رمز عبور نمی‌تواند خالی باشد !";
    }
    if (!passwordConfirmIsValid) {
      errors.passwordConfirmation = "با رمز عبور مطابقت ندارد !";
    }
    if (passwordConfirmIsEmpty) {
      errors.passwordConfirmation = "تأیید رمز عبور نمی‌تواند خالی باشد !";
    }

    return errors;
  };

  const handleSignUp = () => {
    
    if (formIsValid) {
      console.log(firstNameIsValid);
      dispatch(RsetFormErrors({}));
      // post info to backend and they save info and check wether username & email is unique or not 
      axios
      .post("", {
        gender,
        firstName,
        lastName,
        userName,
        email,
        password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
      
      if (userName !== "qwerty" && email !== "opera@gmail.com") {
        console.log("Registerd!");
        router.push("/");
      }else if(userName == "qwerty"){
        console.log("username or email is taken !");
        toast({
          description: "این نام کاربری قبلا ثبت شده است !",
          variant: "destructive",
        });
      } else{
        console.log("username or email is taken !");
        toast({
          description: "این ایمیل قبلا ثبت شده است !",
          variant: "destructive",
        });
      }
    } else {
      dispatch(RsetFormErrors(validation()));
    }
  };

  const genders = ["مرد", "زن"];
  const fullName = ["نام", "نام خانوادگی"];
  const users = ["نام کاربری","ایمیل"];
  const passes = ["رمز عبور","تأیید رمز عبور"];


  useEffect(() => {
    dispatch(RsetUserName(""));
    dispatch(RsetPassword(""));
    dispatch(RsetFormErrors({}));
  }, []);

  return (
    <>
    <div>
      <div
        id="container"
        dir="ltr"
        className="md:flex"
      >
        <div
          id="leftPartContainer"
          className="min-h-screen bg-[url('/design.png')] bg-cover md:bg-[url('')] md:w-7/12 px-2 py-8 md:px-16"
          dir="rtl"
        >
          <div className="flex items-center">
          <img
            id="logo"
            className="w-44 h-16 mx-auto sm:mx-2 md:m-0"
            src="/logo.png"
            alt=""
          />
          <a className=" absolute left-20" href="/">
            <img id="home"
              className="w-28 h-10  sm:mx-2 md:m-0 "
              src="/home-icon.svg"
              alt=""
              
              />
            </a>
          </div>
          <div
            id="formContiner"
            className="flex-col bg-white shadow-[0_-5px_60px_-15px] mx-auto rounded-2xl my-24"
          >
            <div
              id="closeIconContainer"
              onClick={() => router.push("/")}
              className="w-fit transition ease-in-out delay-150 hover:scale-125 hover:cursor-pointer p-4"
            >
              <X />
            </div>
            <div id="inputsContainer" className="px-2 sm:px-8 lg:px-12 xl:px-20 2xl:px-32 pt-2 pb-16">
              <div id="genderContainer" className="flex px-2 mx-auto rounded-3xl">
                {genders.map((gen,i) => (
                  <Label className="w-fit flex items-center">
                    {gen}
                    <Input
                      name="gender"
                      value={isGenderChecked}
                      onChange={(e) => {
                        i===0?dispatch(RsetGender("male")):dispatch(RsetGender("female"));
                        dispatch(RsetIsGenderChecked("yes"));
                      }}
                      type="radio"
                      className="mx-2"
                    />
                  </Label>
                ))}
              </div>
              {genderIsEmpty && (
              <p className="text-xs text-red-600 px-2 mx-auto">
                {formErrors.gender}
              </p>
              )}
              
              <div
                id="fullNameInput"
                className="h-16 flex my-1 justify-items-center mx-auto"
              >
                {fullName.map((name, i) => (
                  <div
                    id={i === 0 ? "firstNameInput" : "lastNameInput"}
                    className="w-full h-16 flex px-2 mx-1 bg-zinc-800 rounded-3xl"
                  >
                    <div
                      id={i === 0 ? "firstNameIcon" : "lastNameIcon"}
                      className="w-2/12 my-auto h-3/6"
                    >
                      <CircleUserRound className="h-full w-full text-violet-700" />
                    </div>
                    <Input
                      className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                      value={i === 0 ? firstName : lastName}
                      onChange={(e) =>
                        dispatch(
                          i === 0
                            ? RsetFirstName(e.target.value)
                            : RsetLastName(e.target.value)
                        )
                      }
                      style={{ border: "none transparent", outline: "none" }}
                      type="text"
                      placeholder={name}
                    />
                  </div>
                ))}
              </div>
              <div
                id="nameErrorContainer"
                className="text-xs text-red-600 flex justify-items-center mx-auto"
              >
                {(firstNameIsEmpty || !firstNameIsValid) && (
                  <p className="w-full px-4 ml-2">{formErrors.firstName}</p>
                )}
                {(lastNameIsEmpty || !lastNameIsValid) && (
                  <p className="w-full px-4 mr-2">{formErrors.lastName}</p>
                )}
              </div>
              {users.map((user,i) => (
                <>
                  <div
                    id={i===0? "userNameInput": "emailInput"}
                    className="h-16 flex my-2 px-2 mx-auto bg-zinc-800 rounded-3xl"
                  >
                    <div id={i===0? "userIconContainer": "emailIconContainer"} className="w-1/12 my-auto h-3/6">
                      {i===0?<CircleUserRound className="h-full w-full text-violet-700" />:<Mail className="h-full w-full text-violet-700" />}
                    </div>
                    <Input
                      className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent focus:border-transparent focus:ring-0 mx-2 text-gray-400 w-11/12"
                      value={i===0? userName : email}
                      onChange={i===0? (e) => dispatch(RsetUserName(e.target.value)) : (e) => dispatch(RsetEmail(e.target.value))}
                      type={i===0? "text" : "email"}
                      placeholder={user}
                    />
                  </div>
                  {i===0? ((!userNameIsValid || userNameIsEmpty) && (
                    <p className="text-xs text-red-600 px-2 mx-auto">
                      {formErrors.userName}
                    </p> 
                  )): ((!emailIsValid || emailIsEmpty) && (
                    <p className="text-xs text-red-600 px-2 mx-auto">
                      {formErrors.email}
                    </p>)) }
                </>
              ))}
              {passes.map((pass,i) => (
                <>
                  <div
                    id={i===0?"passInput" : "passConfirmInput"}
                    className="h-16 flex mx-auto my-2 px-2 pl-4 rounded-3xl bg-zinc-800"
                  >
                    <div
                      id={i===0? "passIconContainer" : "passConfirmIconContainer"}
                      className="w-1/12 my-auto h-3/6"
                    >
                      <Lock className="h-full w-full text-violet-700" />
                    </div>
                    <Input
                      className="w-11/12 h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent focus:border-transparent focus:ring-0 mx-2 text-gray-400"
                      value={i===0? password : passwordConfirmation}
                      onChange={(e) =>
                        i===0? dispatch(RsetPassword(e.target.value)) : dispatch(RsetPasswordConfirmation(e.target.value))
                      }
                      type={i===0?showPasswordType : showPasswordConfirmationType}
                      placeholder={pass}
                    />
                    <div
                      id="iconContainer"
                      className="w-1/12 h-3/6 my-auto"
                      onClick={() =>
                        i===0?
                        dispatch(
                          RsetShowPassword(showPassword)
                        ) :
                        dispatch(
                          RsetShowPasswordConfirmation(showPasswordConfirmation)
                        )
                      }
                    >
                      {(i===0? showPassword : showPasswordConfirmation) ? (
                        <EyeOff className="h-full w-full text-violet-700" />
                      ) : (
                        <Eye className="h-full w-full text-violet-700" />
                      )}
                    </div>
                  </div>
                  {(i===0 && (!passwordIsValid || passwordIsEmpty)) && (
                    <p className="text-xs text-red-600 px-2 mx-auto">
                      {i===0? formErrors.password : formErrors.passwordConfirmation}
                    </p> 
                  )}
                </>
              ))}
              <div
                id="submitContainer"
                className="py-1 flex justify-between px-2 sm:px-4 mx-auto mt-4 rounded-3xl"
              >
                <div id="submitLinksContainer">
                  <a
                    className="block text-amber-600 hover:text-amber-500 py-1 ml-2"
                    href="/login"
                  >
                    حساب کاربری دارم
                  </a>
                </div>
                <Button
                  className="h-4/6 focus-visible:ring-0 focus-visible:ring-offset-0 bg-gradient-to-b from-[#7836cf] via-[#9a79e5] to-[#a8a7c1] text-xl text-white rounded-xl py-2 px-10 hover:bg-gradient-to-t hover:from-gray-400 hover:to-purple-700"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSignUp();
                  }}
                >
                  ثبت نام
                </Button>
              </div>
            </div>

            </div>
        </div>
        <div className="hidden bg-[url('/design.png')] bg-cover md:block w-full md:w-5/12"></div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
