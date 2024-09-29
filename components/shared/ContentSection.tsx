'use client'  
import Image from 'next/image'  
import React from 'react'  
import { motion } from 'framer-motion'  
import { fadeIn } from '@/lib/variants'  
type contentSectionType = {
  SuperTitle?: string,
  title: string,
  subTitle?: string,
  descriptions: string | string[],
  image: string,
  button?: string,
  content?: 'left' | 'right'
  listItems?: []
}
export default function ContentSection({
  SuperTitle,
  title,
  subTitle,
  descriptions,
  image,
  button,
  content,
}: contentSectionType) {  
  const isArray = Array.isArray(descriptions);
  const descriptionList = isArray ? descriptions : [descriptions];
  return (  
    <div className="h-fit mt-4  w-full flex flex-col items-center justify-center gap-8 lg:gap-20 md:flex-row mx-auto overflow-hidden ">  
      {
        content !== 'right'  && (
          <motion.article  
        variants={fadeIn("left", 0.3)}  
        initial="inactive"  
        whileInView="active"  
        viewport={{ once: true }}  
        className=" flex-1 flex flex-col mt-12 md:mt-0 max-w-2xl w-full px-4 xl:pl-14 gap-4"  
      >  
       {SuperTitle && ( <div className="relative w-fit flex flex-col">  
          <span className="group-hover:w-12 group-hover:opacity-100 h-1 opacity-0 w-0 transition-all duration-300 bg-black rounded-xl self-end" />  
          <h4 className="text-xl relative uppercase font-semibold text-neutral-600">{SuperTitle}</h4>  
          <span className="h-1 w-12 bg-black rounded-xl" />  
        </div>  )}
    {
      title && (
        <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">  
        {title} 
        </h2> 
      )
    }
         
        {
          subTitle && (
            <p className="text-neutral-900 text-base md:text-sm xl:text-lg">
              {subTitle}
            </p>
          )
        }
    
        {
          descriptions && descriptions.length <= 0 ? (
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              {descriptions}
            </p>
          ): (
            descriptionList?.map((desc:any, idx: number) => (
              <p key={idx} className="text-neutral-600 text-base md:text-sm xl:text-lg">
              {desc}
            </p>
            ))
          )
        }
      

        
      </motion.article> 
        )
      } 

      <motion.div  
        className="relative  flex-1  h-auto md:min-w-[400px] lg:min-w-[400px] md:max-w-[580px] p-8  aspect-square  w-full bg-contain"  
        variants={fadeIn("right", 0.3)}  
        initial="inactive"  
        whileInView="active"  
        viewport={{ once: true }}  
      >  
        <Image  
          src={image}  
          alt="stock-pc-image"  
          className="object-contain"  
          fill  
        />  
      </motion.div>  
      {
        content === 'right'  && (
          <motion.article  
        variants={fadeIn("left", 0.3)}  
        initial="inactive"  
        whileInView="active"  
        viewport={{ once: true }}  
        className=" flex-1 flex flex-col mt-12 md:mt-0 max-w-2xl w-full px-4 xl:pr-14 gap-4"  
      >  
        <div className="relative w-fit flex flex-col">  
          <span className="group-hover:w-12 group-hover:opacity-100 h-1 opacity-0 w-0 transition-all duration-300 bg-black rounded-xl self-end" />  
          <h4 className="text-xl relative uppercase font-semibold text-neutral-600">{SuperTitle}</h4>  
          <span className="h-1 w-12 bg-black rounded-xl" />  
        </div>  
    {
      title && (
        <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">  
        {title} 
        </h2> 
      )
    }
         
        {
          subTitle && (
            <p className="text-neutral-900 text-base md:text-sm xl:text-lg">
              {subTitle}
            </p>
          )
        }
    
        {
          descriptions && descriptions.length <= 0 ? (
            <p className="text-neutral-600 text-base md:text-sm xl:text-lg">
              {descriptions}
            </p>
          ): (
            descriptionList?.map((desc: any,idx:number) => (
              <p key={idx} className="text-neutral-600 text-base md:text-sm xl:text-lg">
              {desc}
            </p>
            ))
          )
        }
      

        
      </motion.article> 
        )
      } 
    </div>  
  )  
}