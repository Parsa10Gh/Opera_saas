"use client";
import { Import } from "lucide-react"; // Ensure to import this if you use it later
import f from "../../../public/logo (1).svg"; // Ensure the path is correct
import { Button } from "@/components/ui/button";
import { NavbarResponsive } from "./NavbarResponsive";
import {
  RsetLoggedIn,
  RsetSignedUp,
  selectLoggedIn,
  selectSignedUp,
} from "../../slices/NavbarSlices";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import DropDownMenu from "./DropDownNavbar";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);
  const signedUp = useSelector(selectSignedUp);

  const handleSignup = () => {
    // dispatch(RsetSignedUp(true));
    // dispatch(RsetLoggedIn(false));
    window.location.href = "/signup";
  };
  const handleLogin = () => {
    // dispatch(RsetLoggedIn(true));
    // dispatch(RsetSignedUp(false));
    window.location.href = "/login";
  };
  // const [islogged, setIslogged] = useState(false);
  return (
    <div
      id="container"
      className="max-w-[1920px] absolute right-0 left-0 flex w-[95%] lg:h-24 md:h-20 sm:h-18 h-14 text-white justify-center bg-gradient-to-l from-[#552E87]/10 to-black/30 shadow-xl items-center rounded-xl z-50  mx-auto"
      style={{
        background:
          "linear-gradient(90.02deg, #000000 -8.68%, #552E87 105.83%)",
        boxShadow: "0px 5px 42.6px 9px rgba(0, 0, 0, 1.36)",
      }}
      //box-shadow: 0px 5px 42.6px 9px rgba(0, 0, 0, 0.36);
    >
      <div
        id="left-section-container"
        className="md:relative md:flex-none flex-1"
        //  "md:flex items-center lg:pl-12 md:pl-6"
      >
        {!loggedIn && (
          <div
            id="left-section"
            // className="flex-2 flex items-center lg:pl-12 md:pl-6"
          >
            <Button
              className="text-black  lg:h-[50px] lg:text-sm text-xs rounded-2xl absolute transition duration-200 hover:bg-[#a07f3b] bg-[#b09945] lg:w-[100px] w-[80px] ml-2"
              onClick={handleSignup}
            >
              <img src="/person_add.svg" alt="" className="lg:" /> عضویت
            </Button>
            <Button
              className="bg-white text-black lg:w-[190px] lg:h-[50px] rounded-2xl text-right justify-end hover:bg-gray-300 transition duration-200 lg:text-sm text-xs w-[150px] ml-2"
              onClick={handleLogin}
            >
              <img src="/login.svg" alt="" className="lg:mr-4 md:mr- mr-1 " />
              ورود
            </Button>
          </div>
        )}
        <div className=" ">{loggedIn && <DropDownMenu />}</div>
      </div>
      <div
        id="middle-section"
        className=" md:flex md:flex-1 xl:text-xl md:text-lg sm:text-sm text-xs justify-center hidden items-center xl:space-x-12 lg:space-x-8 md:space-x-3"
      >
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
          <Link href="/weblog">وبلاگ</Link>
        </div>
        <div className="cursor-pointer  text-center">
          <Link href="/#serviceTitle">طرح ها</Link>
        </div>
        <div className="cursor-pointer  text-center">
          <Link href="/">خانه</Link>
        </div>
      </div>
      <div id="right-section" className=" md:flex hidden md:items-start mr-5">
        <img src="logo (1).svg" alt="" className="md:flex md:items-end" />
      </div>
      <div id="small-screen-right-section" className="md:hidden flex right-5">
        <NavbarResponsive />
      </div>
    </div>
  );
};

export default Navbar;
