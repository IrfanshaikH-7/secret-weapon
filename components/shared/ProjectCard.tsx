'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
type contentSectionType = {
    id: string
    imageDesc?:string
    SuperTitle?: string,
    title: string,
    descriptions: string | string[],
    image: string,
    button?: string,
    content?: 'left' | 'right'
    listItems?: string[]
}
export default function ProjectCard({
    id,
    imageDesc,
    title,
    descriptions,
    image,
    content,
    listItems
}: contentSectionType) {
    const router = useRouter()
    const isArray = Array.isArray(descriptions);
    const descriptionList = isArray ? descriptions : [descriptions];
    return (
        <div id={id} className="h-fit  pb-6  min-[400px]:pb-0 pt-8  w-full max-w-7xl  flex flex-col items-center justify-center gap-8 lg:gap-20 md:flex-row mx-auto overflow-hidden ">
            {
                content !== 'right' && (
                    <motion.article
                        variants={fadeIn("left", 0.3)}
                        initial="inactive"
                        whileInView="active"
                        viewport={{ once: true }}
                        className=" flex-1 flex flex-col mt-12 md:mt-0 max-w-2xl w-full px-4 xl:pl-14 gap-4"
                    >

                        {
                            title && (
                                <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">
                                    {title}
                                </h2>
                            )
                        }


                        <p className="text-neutral-600 ">
                            {descriptions}
                        </p>
                        {

                            listItems?.map((desc: any, idx: number) => (
                                <div key={idx} className='flex justify-start gap-2'>
                                    <span className="text-neutral-900">•</span>
                                    <p className="text-neutral-600 ">

                                        {desc}
                                    </p>
                                </div>

                            ))
                        }


                        <Link className='bg-black text-center  text-white py-1.5 px-6 rounded-md' href={"https://api.whatsapp.com/send?phone=9023797391&text=Hi%20There!"} target="_blank" >
                            Get Quotes
                        </Link>

                    </motion.article>
                )
            }

            <motion.div
                className="relative  flex-1  h-auto md:min-w-[300px] lg:min-w-[400px] md:max-w-[580px]  md:p-8  aspect-square  w-full bg-contain"
                variants={fadeIn("right", 0.3)}
                initial="inactive"
                whileInView="active"
                viewport={{ once: true }}
            >
                <div className='h-full w-full p-12 relative '>
                    <div className='h-44 w-1 absolute right-8 rounded-full bg-neutral-200 hidden min-[400px]:block' />
                    <div className='absolute top-0 left-1/2  -translate-x-1/2 w-full  min-[400px]:w-[80%] rounded-3xl  border-4 h-[80%] bg-transparent'/>
                <Image
                    src={image}
                    alt="stock-pc-image"
                    className="object-contain scale-75 -mt-8 absolute"
                    fill
                />
                    <div className='absolute -bottom-6 min-[400px]:bottom-12 text-neutral-600 p-1 md:p-4 font-medium bg-white right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 w-full min-[400px]:w-[80%] rounded-3xl   border-4 h-[40%] min-[400px]:h-[20%] bg-transparent'>
                       <div className='h-full w-full flex items-center justify-center  text-base md:text-[13px] lg:text-base'>

                        {imageDesc}
                       </div>
                    </div>

                </div>
               
            </motion.div>
            {
                content === 'right' && (
                    <motion.article
                        variants={fadeIn("left", 0.3)}
                        initial="inactive"
                        whileInView="active"
                        viewport={{ once: true }}
                        className=" flex-1 flex flex-col mt-12 md:mt-0 max-w-2xl w-full px-4 xl:pr-14 gap-4"
                    >

                        {
                            title && (
                                <h2 className="text-4xl md:text-2xl lg:text-4xl text-neutral-900 font-bold">
                                    {title}
                                </h2>
                            )
                        }



                        <p className="text-neutral-600">
                            {descriptions}
                        </p>
                        {

                            listItems?.map((desc: any, idx: number) => (
                                <div key={idx} className='flex justify-start gap-2'>
                                    <span className="text-neutral-900">•</span>
                                    <p className="text-neutral-600 ">

                                        {desc}
                                    </p>
                                </div>

                            ))
                        }

<Link className='bg-black text-white py-1.5 text-center px-6 rounded-md' href={"https://api.whatsapp.com/send?phone=9023797391&text=Hi%20There!"} target="_blank" >
                            Get Quotes
                        </Link>

                    </motion.article>
                )
            }
        </div>
    )
}