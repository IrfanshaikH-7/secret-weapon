import NeedAssistant from '@/components/shared/need-assistant'
import Portfolio from '@/pages/Portfolio'
import React from 'react'

export default function page() {

  return (
    <div className='p-4 w-full h-full z-20'>
       <section className="h-full w-full min-h-[60vh] relative flex  flex-col items-center justify-center  bg-black rounded-[40px]">
        <span className="h-40 w-40 lg:h-[360px] lg:w-[360px] bg-transparent pointer-events-none border-[12px] rounded-[40px] top-80 lg:top-40 z-20 right-5 lg:right-20 border-yellow-300 absolute rotate-45" />
        <div className="max-w-3xl flex flex-col items-center z-10">
          <h2 className="text-white text-center text-3xl sm:text-4xl ld:text-6xl font-extrabold">
            Explore Portfolios
          </h2>
          <p className="text-neutral-300 text-center mt-4 text-xs md:text-base px-4 max-w-lg">
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
