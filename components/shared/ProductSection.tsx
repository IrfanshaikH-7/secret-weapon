'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { url } from 'inspector'

const products = [
  {
    title: 'AFL Development',
    imgUrl: '/product/afl-dev.png',
    url: '/our-products/'
  },
  {
    title: 'Pinescript Development',
    imgUrl: '/product/pinescript.png',
    url: '/our-products/'
  },
  {
    title: 'AFL to Pinescript Conversion',
    imgUrl: '/product/a-to-p.png',
    url: '/our-products/'
  },
  {
    title: 'Pinescript to AFL Conversiont',
    imgUrl: '/product/p-to-a.png',
    url: '/our-products/'
  },
  {
    title: 'Automation',
    imgUrl: '/product/automation-front.png',
    url: '/our-products/'
  },
  {
    title: 'Optimization',
    imgUrl: '/product/optimization-front.png',
    url: '/our-products/'
  },
  {
    title: 'Python Development',
    imgUrl: '/product/python-3.png',
    url: '/our-products/'
  },

  {
    title: 'Metatrader Development',
    imgUrl: '/product/metatrader-2.png',
    url: '/our-products/'
  },
  {
    title: 'Licensing',
    imgUrl: '/product/licensing-maini.png',
    url: '/our-products/'
  },
  {
    title: 'DLL Conversion',
    imgUrl: '/product/dll-conversation.png',
    url: '/our-products/'
  },

]

export default function ProductSection() {
  return (
    <main className='h-full w-full flex flex-col mt-2 items-center justify-center '>
       <div className="relative w-fit flex flex-col group">  
          <span className="group-hover:w-12 group-hover:opacity-100 h-1 opacity-0 w-0 transition-all duration-300 bg-black rounded-xl self-end" />  
          <h2 className="text-4xl md:text-2xl my-2 lg:text-[40px] text-neutral-900 font-extrabold">{"Our Products"}</h2>  
          <span className="h-1 w-12 bg-black rounded-xl  group-hover:w-24 transition-all duration-300" />  
        </div>
      <div className='py-16 hidden sm:flex flex-col w-full  items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 1,
            staggerChildren: 0.1,
          }}
          className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 w-full max-w-full md:w-[92%] justify-items-center  p-4 mx-auto'
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              // style={{backgroundImage: `url(${product.imgUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
              className={`w-full aspect-square overflow-hidden border bg-white shadow-md bg-fill bg-opacity-100 p-4 rounded-2xl relative`}>
              <Link href={product.url}>
                {(() => {
                  switch(product.title) {
                    case 'Automation': 
                      return <Image
                        src={product.imgUrl}
                        alt={product.title}
                        fill
                        className='scale-90'
                      />
                    case 'AFL Development':
                      return <Image
                        src={product.imgUrl}
                        alt={product.title}
                        fill
                        className='scale-90'
                      />
                    case 'Optimization':
                      return <Image
                        src={product.imgUrl}
                        alt={product.title}
                        fill
                        className='scale-90'
                      />
                    case 'Metatrader Development':
                      return <Image
                        src={product.imgUrl}
                        alt={product.title}
                        fill
                        className='scale-[0.6] mt-4 object-contain'
                      />
                    case 'Licensing':
                      return <Image
                        src={product.imgUrl}
                        alt={product.title}
                        fill
                        className='scale-50'
                      />
                    case 'DLL Conversion':
                      return <Image
                        src={product.imgUrl}
                        alt={product.title}
                        fill
                        className='scale-[0.45]'
                      />
                    
                    default:
                      return <Image
                        src={product.imgUrl}
                        alt={product.title}
                        fill
                        className=''
                      />
                  }
                })()}
                <div className='bg-white/70  shadow-md border flex items-center justify-center text-[18px] font-semibold text-slate-900 backdrop-blur-sm h-14 w-[calc(100%-2rem)] p-2 absolute bottom-3 right-1/2 translate-x-1/2 rounded-xl'>
                  {product.title}
                </div>
              </Link>
            </motion.div>
          ))}
          <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay:  2}}
              // style={{backgroundImage: `url(${product.imgUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
              className={`w-full aspect-square overflow-hidden border bg-white shadow-md bg-fill bg-opacity-100 p-4 rounded-2xl relative`}>
              <Link href={'/our-products'} className='flex items-center justify-center h-full w-full'>
              <p className='font-bold'>View more</p>
              </Link>
            </motion.div>
        </motion.div>
      </div>
      <div className='py-24 sm:hidden w-full flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            staggerChildren: 0.1,
          }}
          className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 w-full max-w-full md:max-w-[90%] justify-items-center  py-4 mx-auto'
        >
          {products.map((product, index) => (
            <>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              // style={{backgroundImage: `url(${product.imgUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
              className={`w-full aspect-square overflow-hidden border shadow-md bg-fill bg-opacity-100 p-4 rounded-2xl relative`}>
              <Link href={product.url}>
                <Image
                  src={product.imgUrl}
                  alt={product.title}
                  fill
                  className=''
                />
                <div className='bg-white/70 shadow-md border flex items-center justify-center text-slate-900 backdrop-blur-sm h-12 p-2 w-44 absolute bottom-2 right-2 rounded-xl'>
                  {product.title}
                </div>
              </Link>
            </motion.div>
            </>
          ))}
           <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay:  2}}
              // style={{backgroundImage: `url(${product.imgUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
              className={`w-full aspect-square overflow-hidden border bg-white shadow-md bg-fill bg-opacity-100 p-4 rounded-2xl relative`}>
              <Link href={'/our-products'} className='flex items-center justify-center h-full w-full'>
              <p className='font-bold'>View more</p>
              </Link>
            </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
