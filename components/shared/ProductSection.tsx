'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { url } from 'inspector'

const products = [
  {
    title: 'AFL Development',
    imgUrl: '/product/afl-dev.jpg',
    url: '/our-products/'
  },
  {
    title: 'Pinescript Development',
    imgUrl: '/product/pinescript.jpg',
    url: '/our-products/'
  },
  {
    title: 'AFL to Pinescript Conversion',
    imgUrl: '/product/a-to-p.jpg',
    url: '/our-products/'
  },
  {
    title: 'Pinescript to AFL Conversiont',
    imgUrl: '/product/p-to-a.jpg',
    url: '/our-products/'
  },
  {
    title: 'Automation',
    imgUrl: '/product/automation-front.jpg',
    url: '/our-products/'
  },
  {
    title: 'Optimization',
    imgUrl: '/product/optimization-front.jpg',
    url: '/our-products/'
  },
  {
    title: 'Python Development',
    imgUrl: '/product/py-front.jpg',
    url: '/our-products/'
  },

  {
    title: 'Metatrader Development',
    imgUrl: '/product/metatrader-front.png',
    url: '/our-products/'
  },
  {
    title: 'Licensing',
    imgUrl: '/product/licensing-front.png',
    url: '/our-products/'
  },
  {
    title: 'DLL Conversion',
    imgUrl: '/product/dll-conversation.jpg',
    url: '/our-products/'
  },

]

export default function ProductSection() {
  return (
    <main className='h-full w-full flex items-center justify-center '>
      <div className='py-24 hidden sm:flex flex-col w-full  items-center justify-center'>
        <div className="text-xl  relative md:text-4xl font-[1000] bg-[url('/secret-3.png')] text-center bg-clip-text mb-4 text-transparent">
          <div className='h-px w-24 absolute -bottom-1 -right-12 rounded-full bg-slate-600' />
          <span>Our products</span>
          <div className='h-0.5 w-24 absolute -top-1 -left-12 rounded-full bg-slate-600' />

        </div>


        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 1,
            staggerChildren: 0.1,
          }}
          className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 w-full max-w-full md:w-[90%] justify-items-center  p-4 mx-auto'
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
                <Image
                  src={product.imgUrl}
                  alt={product.title}
                  fill
                  className=''
                />
                <div className='bg-white/70 shadow-md border flex items-center justify-center text-sm font-semibold text-slate-900 backdrop-blur-sm h-12 w-48 p-2 absolute bottom-2 right-2 rounded-xl'>
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
                <div className='bg-white/70 shadow-md border flex items-center justify-center text-slate-900 backdrop-blur-sm h-12 w-40 absolute bottom-2 right-2 rounded-xl'>
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
        <div>helo</div>
        

      </div>
    </main>
  )
}
