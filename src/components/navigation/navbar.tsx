"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Bars2Icon } from '@heroicons/react/24/solid'

const NavigationBar = () => {
  const router = useRouter()
  const [drawer, setDrawer] = useState<boolean>(false)
  const [background, setBackground] = useState<"bg-transparent" | "bg-white">("bg-transparent")
  const changeBackground = () => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      if (window.scrollY >= 10) {
        setBackground("bg-white")
      } else {
        setBackground("bg-transparent")
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }
  })

  return (
    <React.Fragment>
      <nav className={`fixed w-full ${background} h-20 p-5 lg:px-20 flex justify-between items-center z-50 overflow-hidden`}>
        <Image
          src="/logo.svg"
          alt="Vercel Logo"
          width={180}
          height={24}
          priority
          onClick={() => router.replace('/')}
          className='cursor-pointer'
        />
        <ul className='space-x-10 hidden lg:flex '>
          <li className='cursor-pointer'>Portofolio</li>
          <li className='cursor-pointer'>Layanan</li>
          <li className='cursor-pointer'>Hubungi Kami</li>
          <li className='cursor-pointer'>Blog</li>
          <li className='cursor-pointer'>Karir</li>
        </ul>
        <section className='flex space-x-5'>
          <select className='bg-transparent hidden md:flex'>
            <option>Indonesia</option>
            <option>English</option>
          </select>
          <button onClick={() => router.push('/')} className='border border-black px-5 py-2 rounded-full text-sm font-bold hidden md:flex'>Hire Us</button>
          <section aria-label='Burger Bar Mobile' className='lg:hidden'>
            <Bars2Icon className='w-8 cursor-pointer p-1 hover:bg-blue-400 hover:text-white rounded' onClick={() => setDrawer(!drawer)} />
          </section>
        </section>
      </nav >
      {drawer && <div aria-label='Drawer Mobile' className='fixed w-full z-40 lg:hidden bg-gray-50 h-auto py-20 px-5 drop-shadow-lg shadow-white'>
        <ul className='text-2xl font-base flex flex-col space-y-4 mt-10'>
          <li className='cursor-pointer hover:font-semibold'>Portofolio</li>
          <li className='cursor-pointer hover:font-semibold'>Layanan</li>
          <li className='cursor-pointer hover:font-semibold'>Hubungi Kami</li>
          <li className='cursor-pointer hover:font-semibold'>Blog</li>
          <li className='cursor-pointer hover:font-semibold'>Karir</li>
        </ul>
      </div>}
    </React.Fragment>
  )
}

export default NavigationBar

