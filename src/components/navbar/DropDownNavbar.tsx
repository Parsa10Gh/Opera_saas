import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RsetLoggedIn } from "@/slices/NavbarSlices";
import { useDispatch } from "react-redux";

import Link from "next/link";

const DropDownMenu = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="ml-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex items-center rounded-3xl border-white border-2 ml-1 mt-1 outline-none">
            <img
              src="man-avatar.svg"
              alt=""
              className="md:size-10 size-8 w-fit bg-[#b09945] rounded-3xl md:m-1 m-[2px]"
            />
            <p className="text-white md:m-1 md:px-2 px-1 md:text-base text-sm">
              نام کاربر
            </p>
            
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-400 text-center">
          <DropdownMenuLabel>حساب من</DropdownMenuLabel>
          <DropdownMenuLabel>opera@gmail.com</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer text-right flex justify-end hover:bg-slate-500">
            پروفایل
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer flex justify-end hover:bg-slate-500"
            onClick={() => setDialogOpen(true)}
          >
            خروج از حساب
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <div > */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px] text-white bg-[#b09945] w-[90vw] !rounded-3xl border-none">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription className="text-center">
              آیا از خروج از حساب خود اطمینان دارید؟
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center">
            <DialogFooter className="flex flex-row gap-5">
              <Button
                className="border p-1 px-3 rounded-xl hover:bg-[rgb(139,47,21)]"
                onClick={() => setDialogOpen(false)}
              >
                انصراف
              </Button>
              <Link href="/">
                <Button
                  className=" border p-1 px-4 rounded-xl hover:bg-[rgb(76,85,15)]"
                  onClick={() => {
                    setDialogOpen(false);
                    dispatch(RsetLoggedIn(false));
                  }}
                >
                  تایید
                </Button>
              </Link>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
      {/* </div> */}
    </div>
  );
};

export default DropDownMenu;
