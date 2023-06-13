"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const PortofolioCarousel = () => {
    const router = useRouter()
    return (
        <div className='px-40 py-10 gradient-2 h-auto'>
            <h3 className='text-3xl font-bold text-black leading-1'>Featured Works <span className='text-blue-400 text-5xl'>.</span></h3>
            <div className="flex justify-between items-center">
                <section aria-label='left' className="relative w-4/6 z-10flex flex-col items-left justify-center h-full leading-1">
                    <h1 className='text-3xl font-extrabold text-black leading-1'>We Develop Tech Solutions for Everyone</h1>
                    <p className='mt-4 text-md'>Software house services are needed to help your business connected with your target audience. Worry not, we will make the process as easy and quick as possible. So, what are you waiting for?</p>
                    <button className='mt-10 w-40 border border-black px-5 py-2 rounded-full text-sm font-bold'
                        onClick={() => router.push('/portofolio/1')}>Discover Works</button>
                </section>
                <section aria-label='right' className="bg-transparent">
                    <img
                        src="/device-group.svg"
                        alt="background image"
                        className='h-full'
                    />
                </section>
            </div>
        </div>
    )
}

export default PortofolioCarousel