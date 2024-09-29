'use client'  
import Image from 'next/image'  
import React from 'react'  
import { motion } from 'framer-motion'  
import { fadeIn } from '@/lib/variants'  
import { ChartScatter, Home, HomeIcon } from 'lucide-react'

export default function PointSection() {  
  return (  
    <div className="h-fit mt-8 md:mt-4 py-12 w-full flex  flex-col items-center justify-center gap-8 lg:gap-20 md:flex-row mx-auto overflow-hidden ">  
  
      <motion.div  
        className="relative  flex-1  h-auto md:min-w-[400px] lg:min-w-[400px] md:max-w-[500px]  p-8  aspect-square w-full bg-contain"  
        variants={fadeIn("right", 0.3)}  
        initial="inactive"  
        whileInView="active"  
        viewport={{ once: true }}  
      >  
        <Image  
          src={'/phone-image.png'}  
          alt="stock-pc-image"  
          className="object-contain"  
          fill  
        />  
      </motion.div>  
   
          <motion.div  
        variants={fadeIn("left", 0.3)}  
        initial="inactive"  
        whileInView="active"  
        viewport={{ once: true }}  
        className=" flex-1 flex flex-col mt-12 md:mt-0 max-w-2xl w-full py-4  gap-4"  
      >  
        <div className="relative w-fit flex flex-col">  
          <span className="group-hover:w-12 group-hover:opacity-100 h-1 opacity-0 w-0 transition-all duration-300 bg-black rounded-xl self-end" />  
          <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">{"Our expertise"}</h2>  
          <span className="h-1 w-12 bg-black rounded-xl" />  
        </div>  
        <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              With over three years in the industry and a decade of trading expertise, our team specializes in crafting and implementing effective strategies using platforms such as Amibroker, Trading View and Python, MetaTrader. We create strategies for clients and set them to fully or semi-automatic mode, based on what they want. This means they don&apos;t have to spend hours staring at the screen. By using automation, we take out human feelings from trading, making it more logical and less emotional.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-4 mt-4">
  <div className="flex items-center gap-1 ">
        <ChartScatter size={32}  className="font-semibold p-1 fill-green-400"/>
      <p>Developer rendered in it</p>
    </div>
  <div className="flex items-center gap-1 ">
  <HomeIcon size={32}  className="font-semibold p-1 fill-green-400"/>
      <p>Developer rendered in it</p>
  </div>
  <div className="flex items-center gap-1 ">
  <HomeIcon size={32}  className="font-semibold p-1 fill-green-400"/>
      <p>Developer rendered in it</p>
  </div>
  <div className="flex items-center gap-1 ">
  <HomeIcon size={32}  className="font-semibold p-1 fill-green-400"/>
      <p>Developer rendered in it</p>
  </div>
  <div className="flex items-center gap-1 ">
  <HomeIcon size={32}  className="font-semibold p-1 fill-green-400"/>
      <p>Developer rendered in it</p>
    </div>
    <div className="flex items-center gap-1 ">
    <HomeIcon size={32}  className="font-semibold p-1 fill-green-400"/>
      <p>Developer rendered in it</p>
    </div>
  </div>
  
      </motion.div> 
    </div>  
  )  
}