import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

export function NavbarResponsive() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="shadow-none" aria-label="Menu">
          <img src="hamburger-menu.svg" alt="Menu" />
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-purple-100 border-none w-[50%]">
        <SheetHeader className="flex items-end text-white">
          <SheetTitle>
            <img src="logo (1).svg" alt="Logo" />
          </SheetTitle>
        </SheetHeader>

        <nav className="grid gap-4 py-4 justify-items-end text-black">
          {[
            { href: "/contactus", label: "ارتباط با ما" },
            { href: "/#main-footer", label: "درباره ما" },
            { href: "/#customers-section", label: "مشتریان" },
            { href: "/#blog-container", label: "وبلاگ" },
            { href: "/#servicesCardsContainer", label: "طرح ها" },
            { href: "/", label: "خانه" },
          ].map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <Link href={href} className="block items-center cursor-pointer">
                {label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <SheetFooter>{/* Additional footer content can go here */}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
