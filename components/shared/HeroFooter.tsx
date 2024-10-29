'use client'
import Link from 'next/link'
import React from 'react'
import {  ArrowRight, ChevronDown, Facebook, Instagram, LinkedinIcon, MessageCircleIcon, PhoneOutgoing } from "lucide-react";
import Lenis from 'lenis';


export default function HeroFooter() {

  return (
    <div className=" w-full h-28 z-10 px-4 pb-4  absolute bottom-0 left-0 right-0 " >
    <div className="bg-white flex items-center h-full min-h-full w-full rounded-[36px]">
    <div className="w-full flex justify-center md:justify-between items-center md:items-start max-w-xl mx-auto">
    <Link href={'https://www.instagram.com/secretweapontradingsolution'}target='_balnk' className="p-4 hidden md:block"><Instagram /></Link>
    <a href={'https://www.facebook.com/secretweaponts'}target='_balnk' className="p-4 hidden md:block "><Facebook /></a>
    <div  className="p-4 hidden md:block "><ChevronDown className="custom-botbounce "/></div>
    <Link href={'https://www.linkedin.com/company/secret-weapon-trading-solution/'}target="/" className="p-4 hidden md:block"><LinkedinIcon /></Link>
    <Link href={'https://api.whatsapp.com/send?phone=9023797391&text=Hi%20There!'} className="p-4 hidden md:block"><MessageCircleIcon /></Link>
    </div>
    </div>
  
    
  </div>
  )
}
