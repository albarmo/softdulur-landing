"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';
import { DesktopNavigation } from '@/utils/data/navigation';


const show = {
  opacity: 1,
  display: "block"
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none"
  }
};

const NavigationBar = () => {
  const ref = useRef();
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

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDrawer(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  return (
    <div ref={wrapperRef}>
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
          {DesktopNavigation.map((nav, index) =>
            <li key={index} className='cursor-pointer' onClick={() => router.push(nav.path)}>
              {nav.title}
            </li>
          )}
        </ul>
        <section className='flex space-x-5'>
          <select className='bg-transparent hidden md:flex'>
            <option>Indonesia</option>
            <option>English</option>
          </select>
          <button onClick={() => router.push('/')} className='border border-black px-5 py-2 rounded-full text-sm font-bold hidden md:flex'>Hire Us</button>
          <section aria-label='Burger Bar Mobile' className='lg:hidden'>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setDrawer(!drawer)}
            >
              <Bars2Icon className='w-8 cursor-pointer p-1 hover:bg-blue-400 hover:text-white rounded' onClick={() => setDrawer(!drawer)} />
            </motion.button>
          </section>
        </section>
      </nav >

      <motion.div className={`${drawer ? "flex" : "hidden"}`} animate={drawer ? show : hide} >
        <div aria-label='Drawer Mobile' className={`fixed w-full z-40 lg:hidden bg-gray-50 h-auto py-20 px-5 drop-shadow-lg shadow-white`}>
          <ul className='text-2xl font-base flex flex-col space-y-4 mt-10'>
            {
              DesktopNavigation.map((nav, index) =>
                <li key={index} className='cursor-pointer' onClick={() => router.push(nav.path)}>{nav.title}</li>
              )}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default NavigationBar

