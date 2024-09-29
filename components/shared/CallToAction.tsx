import Image from 'next/image'
import React from 'react'
import callToAction from '../../public/phone-footer-sided.png'
import { Button } from '../ui/button'
export default function CallToAction() {
  return (
    <section className='md:w-[95%] flex-col md:flex-col flex justify-center h-full overflow-hidden md:overflow-visible md:h-80 relative w-full  mx-auto bg-black rounded-[40px]'>
      <div className='flex-1 p-12 space-y-2 text-white'>
        <h3 className='text-2xl  lg:text-3xl xl:text-4xl font-bold'>Algo Trading Will Help You <br className=' lg:hidden' /> , If You Are:</h3>
        <ul className='list-disc pl-4 space-y-2 py-2'>
          <li className='text-sm md:text-base text-neutral-300 font-semibold'>Want To Grow Your Portfolio</li>
          <li className='text-sm md:text-base text-neutral-300 font-semibold'>Want To Maximize Your Returns</li>
          <li className='text-sm md:text-base text-neutral-300 font-semibold'>Want To Minimize Your Risk</li>
        </ul>

<button
  className="overflow-hidden  w-36 py-2 px-4 h-11 mt-4 bg-black text-white border rounded-xl text-xl font-bold cursor-pointer relative z-10 group"
>
  Start now
  <span
    className="absolute w-40 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    className="absolute w-40 h-32 -top-8 -left-2 bg-yellow-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    className="absolute w-40 h-32 -top-8 -left-2 bg-yellow-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-8 z-10"
    >Connect</span>
</button>

      </div>
      <div className='flex-1 flex items-end justify-end relative px-4  md:px-8'>
      <Image src={callToAction} alt='call'  className='call-to-action-image bottom-0  md:absolute object-fill overflow-visible '/>
      </div>
    </section>
  )
}
