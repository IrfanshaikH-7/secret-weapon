import { Facebook, Instagram, LinkedinIcon, Mail, MessageCircleDashed, X } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

export default function NeedAssistant() {
  return (
    <div className='h-full flex flex-col gap-8 items-center justify-center w-full max-w-6xl mx-auto py-12 my-12'>
      <h2 className=' text-2xl md:text-5xl font-bold '>Need our assistant?</h2>
      <div className='flex gap-3 items-start'>

        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><X className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white'/></span>
        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Instagram  className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white'/></span>

        <a href={'https://www.linkedin.com/company/secret-weapon-trading-solution/'}target="/"  
        className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><LinkedinIcon className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></a>

        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Facebook className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></span>
        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Mail className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></span>
        <span className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><MessageCircleDashed className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></span>
        </div>
        <Button className='w-full max-w-48 p-6 rounded-[40px] '>Get in touch</Button>
    </div>
  )
}
