'use client'
import React from 'react'
import Image from 'next/image'
import { footerNavigation } from '@/utils/data/navigation'
import { useRouter } from 'next/navigation'

const Footer = () => {
    const router = useRouter()
    return (
        <footer className="bg-white shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <Image
                            src="/logo.svg"
                            alt="Vercel Logo"
                            width={180}
                            height={24}
                            priority
                        />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        {footerNavigation.map((item, index) =>
                            <li key={index}>
                                <button className="mr-4 hover:underline md:mr-6" onClick={() => router.push(item.path)}>{item.title}</button>
                            </li>
                        )}

                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <p className="block text-sm text-gray-500 sm:text-center">Jalan H Mandor 12 A CIlandak Barat Jakarta Selatan
                    12430 Indoneisa +62 9128083127312</p>
                <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://softdulur.com/" className="hover:underline">Softdulur</a>. All Rights Reserved.</span>
            </div>
        </footer>

    )
}

export default Footer