"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const NavigationBar = () => {
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
    <nav className={`fixed w-full ${background} h-20 px-20 flex justify-between items-center z-50`}>
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        width={180}
        height={24}
        priority
      />
      <ul className='flex space-x-10'>
        <li className='cursor-pointer'>Portofolio</li>
        <li className='cursor-pointer'>Layanan</li>
        <li className='cursor-pointer'>Hubungi Kami</li>
        <li className='cursor-pointer'>Blog</li>
        <li className='cursor-pointer'>Karir</li>
      </ul>
      <section className='flex space-x-5'>
        <select className='bg-transparent'>
          <option>Indonesia</option>
          <option>English</option>
        </select>
        <button>Hire Us</button>
      </section>
    </nav>
  )
}

export default NavigationBar

