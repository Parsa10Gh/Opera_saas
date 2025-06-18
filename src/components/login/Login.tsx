"use client";

import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { CircleUserRound, Eye, EyeOff, Lock, X } from "lucide-react";
import {
  RsetUserName,
  selectUserName,
  RsetPassword,
  selectPassword,
  RsetShowPassword,
  RsetShowPasswordType,
  selectShowPasswordType,
  selectShowPassword,
  RsetRememberMe,
  selectRememberMe,
  RsetLoginErrors,
  selectLoginErrors,
} from "@/slices/MainSlice";
import { RsetLoggedIn, selectLoggedIn } from "@/slices/NavbarSlices";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const currentPage = usePathname();
  const { toast } = useToast();
  const userName = useSelector(selectUserName);
  const password = useSelector(selectPassword);
  const showPassword = useSelector(selectShowPassword);
  const showPasswordType = useSelector(selectShowPasswordType);
  const rememberMe = useSelector(selectRememberMe);
  const loginErrors = useSelector(selectLoginErrors);

  const userNameIsValid = userName !== "";
  const passwordIsValid = password.length > 7;
  const formIsValid = userNameIsValid && passwordIsValid;

  showPassword
    ? dispatch(RsetShowPasswordType("text"))
    : dispatch(RsetShowPasswordType("password"));

  const validation = () => {
    var errors = {
      userErrorStyle: {},
      passwordErrorStyle: {},
    };

    !userNameIsValid
      ? (errors.userErrorStyle = { border: "3px solid red" })
      : {};
    !passwordIsValid
      ? (errors.passwordErrorStyle = { border: "3px solid red" })
      : {};

    return errors;
  };

  const handleLogin = (event: any) => {
    if (formIsValid) {
      dispatch(RsetLoginErrors(validation()));
      //post username & pass to backend and they check if it exist

      if (userName === "qwerty" && password === "Parsa123") {
        RsetLoggedIn(true);
        if (rememberMe) {
          localStorage.setItem("username", userName);
          localStorage.setItem("password", password);
        } else {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }
        router.push("/");
      } else {
        toast({
          description: "نام کاربری یا رمز عبور اشتباه است !",
          variant: "destructive",
        });
        console.log("wrong username or password!");
      }
    } else {
      if (currentPage != "/") {
        console.log(currentPage);
        event.preventDefault();
      }

      dispatch(RsetLoginErrors(validation()));
    }
  };

  useEffect(() => {
    dispatch(RsetUserName(""));
    dispatch(RsetPassword(""));
    dispatch(RsetShowPassword(false));
    const userStore = localStorage.getItem("username");
    const passStore = localStorage.getItem("password");

    if (userStore !== null && passStore !== null) {
      dispatch(RsetUserName(userStore));
      dispatch(RsetPassword(passStore));
      dispatch(RsetRememberMe(true));
    }
  }, []);

  return (
    <>
      <div
        id="container"
        dir="ltr"
        className="before:absolute before:w-full before:h-full before:bg-cover before:bg-center before:filter before:blur-[10px] before:-z-10 before:bg-[url('/design.png')] before:md:bg-[url('')] h-screen md:flex
      "
      >
        <div
          id="leftPartContainer"
          className="h-screen md:w-7/12 flex-col items-center px-2 sm:px-4 py-8 md:px-16"
          dir="rtl"
        >
          <div className="flex items-center  ">
            <img
              id="logo"
              className="w-44 h-16 sm:mx-2 md:m-0"
              src="/logo.png"
              alt=""
            />
            <a className="flex-1 absolute left-20" href="/">
              <img
                id="home"
                className="w-28 h-10  sm:mx-2 md:m-0 "
                src="/home-icon.svg"
                alt=""
              />
            </a>
          </div>
          <div
            id="formContiner"
            className="bg-white rounded-2xl shadow-[0_-1px_30px_-10px] mx-auto my-12 min-[321px]:my-24 md:my-20"
          >
            <div
              id="closeIconContainer"
              onClick={() => router.push("/")}
              className="p-4 w-fit transition ease-in-out delay-150 hover:scale-125 hover:cursor-pointer"
            >
              <X />
            </div>
            <div
              id="inputsConatainer"
              className="px-2 sm:px-8 md:px-3 lg:px-12 xl:px-20 2xl:px-32 py-16 sm:py-28 md:py-20 lg:py-28 xl:py-36"
            >
              <div
                id="userInput"
                className="h-16 flex px-2 mb-4 mx-auto bg-zinc-800 rounded-3xl"
                style={loginErrors.userErrorStyle}
              >
                <div id="userIconContainer" className="w-1/12 h-4/6 my-auto">
                  <CircleUserRound className="h-full w-full text-violet-700" />
                </div>
                <Input
                  className="w-11/12 h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent focus:border-transparent focus:ring-0 mx-2 text-gray-400"
                  value={userName}
                  onChange={(e) => dispatch(RsetUserName(e.target.value))}
                  type="text"
                  placeholder="نام کاربری"
                />
              </div>
              <div
                id="passInput"
                className="h-16 flex mx-auto mb-4 px-2 pl-4 rounded-3xl bg-zinc-800"
                style={loginErrors.passwordErrorStyle}
              >
                <div
                  id="passIconContainer"
                  className="w-1/12 my-auto h-5/6 md:h-4/6"
                >
                  <Lock className="h-full w-full text-violet-700" />
                </div>
                <Input
                  className="w-11/12 h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent focus:border-transparent focus:ring-0 mx-2 text-gray-400"
                  value={password}
                  onChange={(e) => dispatch(RsetPassword(e.target.value))}
                  type={showPasswordType}
                  placeholder="رمز عبور"
                />
                <div
                  id="iconContainer"
                  className="w-1/12 h-4/6 my-auto"
                  onClick={() => dispatch(RsetShowPassword(showPassword))}
                >
                  {showPassword ? (
                    <EyeOff className="h-full w-full text-violet-700" />
                  ) : (
                    <Eye className="h-full w-full text-violet-700" />
                  )}
                </div>
              </div>
              <div
                id="submitContainer"
                className="flex justify-between px-2 sm:px-4 py-1 mx-auto mt-4 rounded-3xl"
              >
                <div id="submitLinksContainer" className="text-center">
                  <a
                    className="block text-sm py-1 text-amber-400 hover:text-amber-300"
                    href="/forgetpass"
                  >
                    فراموشی رمز عبور
                  </a>
                  <a
                    className="block text-sm py-1 text-purple-600 hover:text-purple-400"
                    href="/signup"
                  >
                    ایجاد حساب کاربری
                  </a>
                </div>
                <div>
                  <Label
                    htmlFor="rememberMe"
                    className="flex justify-center w-fit pr-1 items-center text-purple-600"
                  >
                    من را به خاطر بسپار
                    <Checkbox
                      id="rememberMe"
                      checked={rememberMe}
                      onClick={() => {
                        dispatch(RsetRememberMe(!rememberMe));
                      }}
                      className="bg-yellow-300 mx-2 rounded-xl border-none data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                    />
                  </Label>
                  <br />
                  <Button
                    className="mr-2 focus-visible:ring-0 focus-visible:ring-offset-0 bg-gradient-to-b from-[#7836cf] via-[#9a79e5] to-[#a8a7c1] text-xl text-white rounded-xl py-6 px-12 hover:bg-gradient-to-t hover:from-gray-400 hover:to-purple-700"
                    onClick={(e) => {
                      handleLogin(e);
                    }}
                  >
                    ورود
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/design.png"
          className="hidden md:block h-auto md:h-full w-full md:w-5/12"
          alt=""
        />
      </div>
    </>
  );
};

export default Login;
