import { StaticNav } from '@/components/core/static-nav'
import NeedAssistant from '@/components/shared/need-assistant'
import Portfolio from '@/pages/Portfolio'
import React from 'react'

export default function page() {

  return (
    <div className='p-4 w-full h-full z-20 max-w-[2546px] mx-auto overflow-x-hidden'>
       
      <section className="h-full w-full min-h-80 relative flex  flex-col items-center justify-center  bg-black rounded-[40px]">
        {/* <span className="h-40 w-40 lg:h-[300px] lg:w-[300px] bg-transparent pointer-events-none border-[6px] md:border-[12px]  rounded-[40px] top-[324px] md:top-80 lg:top-40 z-20 -right-10 md:right-5 lg:right-20 border-yellow-300 absolute rotate-45" /> */}
       <div className='absolute top-4 right-12 hidden md:block'>
        <StaticNav color={'white'} />

       </div>
       <div className="max-w-3xl flex flex-col items-center z-10">
          <h2 className="text-white text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Explore Portfolio
          </h2>
          <p className="text-neutral-300 text-center mt-4 text-xs md:text-lg leading-snug  px-4 max-w-lg">
            Begin your journey with us – reach out and let’s create something
            extraordinary together!.
          </p>
        </div>
      </section>

        <Portfolio />
        <NeedAssistant />
    </div>
  )
}
