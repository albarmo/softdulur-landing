"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./carousel-styles.css";
import Image from 'next/image';

const CarouselItem = () => {
    return (
        <div className='p-6 w-80 h-80 rounded-sm cursor-pointer flex flex-col items-start justify-between'>
            <section>
                <Image
                    src={'../logo-white.svg'}
                    alt="project Logo"
                    width={120}
                    height={24}
                    priority
                />
            </section>
            <section>
                <h3 className='text-2xl text-left font-bold text-white'>Travelobar - Jalan Jalan Tapi Digaji</h3>
                <p className='block text-sm font-light text-white mt-3'>Software house services are needed to help your business connected with your target audience.</p>
            </section>
        </div>
    )
}

const PortofolioCarousel = () => {
    const router = useRouter()
    return (
        <>
            <div className='p-10 lg:px-40 py-10 gradient-2 h-auto'>
                <h3 className='text-3xl font-bold text-black leading-1'>Featured Works <span className='text-blue-400 text-5xl'>.</span></h3>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-10">
                    <section aria-label='left' className="relative w-full md:w-3/6 z-10flex flex-col items-left justify-center h-full leading-1">
                        <h1 className='text-3xl font-extrabold text-black leading-1'>We Develop Tech Solutions for Everyone</h1>
                        <p className='mt-4 text-md'>Software house services are needed to help your business connected with your target audience. Worry not, we will make the process as easy and quick as possible. So, what are you waiting for?</p>
                        <button className='mt-10 w-40 border border-black px-5 py-2 rounded-full text-sm font-bold'
                            onClick={() => router.push('/portofolio/1')}>Discover Works</button>
                    </section>
                    <section aria-label='right' className="bg-transparent py-10 md:py-0">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <CarouselItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CarouselItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CarouselItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CarouselItem />
                            </SwiperSlide>

                        </Swiper>

                    </section>
                </div>
            </div>
        </>
    )
}

export default PortofolioCarousel