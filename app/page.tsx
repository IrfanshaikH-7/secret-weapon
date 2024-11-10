import ImageOverlay from "@/components/core/ImageOverlay";
import { StaticNav } from "@/components/core/static-nav";
import CallToAction from "@/components/shared/CallToAction";
import ContentSection from "@/components/shared/ContentSection";
import NumberCounters from "@/components/shared/counter";
import HeroFooter from "@/components/shared/HeroFooter";
import NeedAssistant from "@/components/shared/need-assistant";
import PointSection from "@/components/shared/pointSection";
import ProductSection from "@/components/shared/ProductSection";
import {  Testimonials } from "@/components/shared/Testimonials";
import {  ArrowRight, ChevronDown, Facebook, Instagram, LinkedinIcon, MessageCircleIcon, PhoneOutgoing } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Secret Weapon | Algorithmic Trading Solutions  ",
  description:
    "Explore algorithmic trading with Python, AI-powered tools, and cloud-based platforms. Start your profitable trading journey with Secret Weapon solutions.",
  keywords: [
    "Algorithmic trading with Python",
    "AI-powered trading tools",
    "automated trading systems",
    "Secret Weapon",
  ],
};

export default function Home() {

  return (
    <main className="h-full w-full px-4 max-w-[2546px] mx-auto">

<section className="h-[80vh] md:h-screen py-4 w-full  md:mt-0 relative">
    
    <div className="h-full w-full relative flex flex-col justify-between gap-8 md:gap-0 overflow-hidden bg-black rounded-[40px]">
      <ImageOverlay />
      <div className="h-full w-full flex flex-col justify-between gap-32 items-start pl-0 pr-8 md:pl-8 py-4 pt-32 md:pt-2 z-30 bg-black/60">
      <div className="flex flex-col justify-between w-full gap-32 pl-0 px-8  py-4  mx-4 pt-32 md:pt-2">
    <nav className=" hidden md:flex justify-between items-center w-full ">
     <Image
     src="/logo.png"
     height={100}
     width={100}
     alt="Logo Image"
     />
      <StaticNav color={'white'} />

    </nav>
    <div className="flex h-fit items-center -mt-8 md:mt-0">
      <div className="w-full md:max-w-2xl space-y-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold ">The Future of Automated Trading is Here</h1>
          <h4 className="text-white text-sm md:text-base">We Have Developed and Automated More
          Than 1000 Strategies
          </h4>
          <Link href={'/our-portfolio'}  className="px-6 py-3 rounded-2xl group w-full sm:max-w-40 hover:gap-8 transition-all duration-300 gap-3 flex items-center bg-white">
          <span>Portfolio</span> <ArrowRight className="group-hover:-rotate-45 transition-all duration-300" size={16}/>
        </Link>
        </div>
    </div>
      </div>
    <HeroFooter />
     
      </div>
   
    
    
    </div>
    <div className="w-full flex justify-center  items-center gap-4 mt-3 mx-auto">
      <Link href={'https://www.instagram.com/secretweapontradingsolution/'} target="_blank" className="p-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 block md:hidden"><Instagram /></Link>
      <Link href={'https://www.facebook.com/secretweaponts/'} target="_blank" className="p-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 block md:hidden"><Facebook /></Link>
      <Link href={'https://www.linkedin.com/company/secret-weapon-trading-solution/'}target="/" className="p-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 block md:hidden"><LinkedinIcon /></Link>
      <Link href={''} className="p-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 block md:hidden"><MessageCircleIcon /></Link>
      </div>
  </section>
  <div className="mt-18 sm:mt-8">
  <ContentSection 
  content="left"
  SuperTitle="one-stop solution"
  title={"Welcome to Secret Weapon Trading Solutions"}
  subTitle={"Where we automate your strategies"}
  descriptions={["We are dedicated to providing our clients with the most effective and innovative trading solutions."," With over three years of experience in the industry and over a decade of experience in trading our team of experts specializes in developing and implementing trading strategies using platforms such as Amibroker and Trading view."]}
  image={"/quotestream_desktop_and_mobile.png"}
  button={"Read More"}
  />
  </div>
 

  <section id="we_are_here" className="h-full  w-full flex flex-col items-center justify-center relative overflow-hidden">
    <span className="text-5xl md:text-8xl font-[1000] bg-[url('/secret-3.png')] text-center bg-clip-text mb-4 text-transparent">We are here</span>
    <article className="w-full md:w-[90%] h-full bg-black rounded-[40px] overflow-hidden px-8 pt-8  space-y-6 ">
      <h3 className="text-2xl md:text-5xl font-bold text-neutral-50 text-center mx-auto max-w-4xl">Want to develop, back-test or automate your strategy?</h3>
      <div className="flex gap-3 items-center justify-center ">
      <PhoneOutgoing  className="text-white"/>
      <p className="font-semibold text-neutral-50 text-center text-xs md:text-xl">Call Us Today</p>
      </div>
      <div>
      <p className="font-semibold text-neutral-50 text-center text-base md:text-2xl ">+91 9370112985</p>
      <span className="hidden md:block">|</span>
      <p className="font-semibold text-neutral-50 text-center text-base md:text-2xl ">+91 9023797391</p>
      
      </div>
    
      <div className="w-[700px] aspect-[2/1]  mx-auto  relative">

      <Image src={'/gif_platform_cut.gif'} alt="platform-gif" fill  className="object-contain absolute bottom-0"/>
      </div>
    </article>
  </section>

  <PointSection />
  <ProductSection />
  <CallToAction/>
  
  <div className="w-full sm:max-w-7xl mx-auto py-16 px-12 gap-16 md:gap-3 flex flex-col md:flex-row ">
  <NumberCounters timer={{from: 300, to:500, title: 'Clients'} }/>
  <NumberCounters timer={{from: 900, to:1200, title: "Projects"} }/>
  <NumberCounters timer={{from: 2, to:6, title:"Techs"}}/>

  </div>

  <div className="flex items-center justify-center overflow-x-hidden">

  <Testimonials />
  </div>
  <NeedAssistant/>
    </main>
  );
}
