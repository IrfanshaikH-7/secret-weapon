import { Facebook, Instagram, LinkedinIcon, Mail, MessageCircleDashed, X } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function NeedAssistant() {
  return (
    <div className='h-full flex flex-col gap-8 items-center justify-center w-full max-w-6xl mx-auto py-12 my-12'>
      <h2 className=' text-2xl md:text-5xl font-bold '>Need our assistant?</h2>
      <div className='flex gap-3 items-start'>

        <Link href={'https://www.instagram.com/secretweapontradingsolution'} className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Instagram  className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white'/></Link>

        <Link href={'https://www.linkedin.com/company/secret-weapon-trading-solution/'}target="/"  
        className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><LinkedinIcon className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></Link>

        <Link href={'https://www.facebook.com/secretweaponts'} className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Facebook className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></Link>
        <Link  href="mailto:support@secretweapon.in"  className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><Mail className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></Link>
        <Link href={'https://api.whatsapp.com/send?phone=9023797391&text=Hi%20There!'} className='p-2 rounded-full bg-white border shadow-sm group hover:bg-black transition-colors duration-300'><MessageCircleDashed className='h-4 w-4 lg:h-6 lg:w-6 text-neutral-600 group-hover:text-white' /></Link>
        </div>
        <Link href={"https://api.whatsapp.com/send?phone=9023797391&text=Hi%20There!"} className='w-full bg-black max-w-48 px-6 py-2.5 text-white text-center rounded-[40px] ' >Get in touch</Link>
    </div>
  )
}
