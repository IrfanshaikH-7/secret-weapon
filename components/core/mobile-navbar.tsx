"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, LinkedinIcon, Mail, Menu as MenuIcon, MessageCircleDashed, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const mobileItems = [
  { title: "HOME", href: "/" },
  { title: "OUR PORTFOLIO", href: "/our-portfolio" },
  { title: "OUR PRODUCTS", href: "/our-products" },
  { title: "ABOUT US", href: "/about" },
  { title: "WHY US", href: "/why-us" },
  { title: "CONTACT US", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
const pathname = usePathname()
const router = useRouter()
  return (
    <nav className="flex sticky z-[99]  md:hidden top-0 right-0 left-0 items-center justify-between px-4 py-2 bg-white/5 font-bold backdrop-blur-sm rounded-b-2xl">
      <div className="flex items-center relative h-10 w-32">
        <Image src={'/mobile_logo.png'} fill className="object-contain" alt={'logo'}/>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="overflow-hidden  flex flex-col w-[80%] justify-between z-[100]">
          <div className="flex flex-col items-start gap-1 mt-8 ">
            {mobileItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}

                onClick={() => {
                  setOpen(false);
                }}
                className={cn("hover:bg-slate-100 px-4 w-full rounded-md py-2",
                  pathname === item.href ? "bg-slate-100" : ""
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
             <div className='flex gap-3 items-start w-fit mx-auto'>

        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Instagram  className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white'/></span>

        <a href={'https://www.linkedin.com/company/secret-weapon-trading-solution/'}target="/"  
        className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><LinkedinIcon className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></a>

        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Facebook className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></span>
        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Mail className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></span>
        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><MessageCircleDashed className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></span>
        </div>
            <div className="flex items-center my-4">
              <div className="w-full bg-neutral-200 p-[0.5px]"/>
              <span className="mx-2 text-neutral-700 text-xs">OR</span>
              <div className="w-full bg-neutral-200 p-[0.5px]"/>
            </div>
          <button onClick={() => router.push("/contact")} className="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-full rounded-md bg-yellow-500 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-yellow-600"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-yellow-500"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-yellow-400"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-yellow-300"></div>
            <p className="z-10 text-slate-900 font-extrabold">Get in touch</p>
          </button>
          </div>
         

        </SheetContent>
      </Sheet>
    </nav>
  );
}
