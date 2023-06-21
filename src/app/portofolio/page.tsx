import React from 'react'
import Image from 'next/image'
import ImagePorto from '../../../public/device.svg'
import PortofolioCard from '../modules/portofolio/card/PortofolioCard'
import { Portofolio, portofolios } from '@/utils/data/portofolio'

const Portofolio = () => {
    return (
        <div className='w-full h-auto'>
            <div className="bg-white px-10 md:px-20">
                    <div className="flex justify-between py-36">
                        <div className="lg:max-w-[50vw]">
                            <h1 className='font-bold text-3xl lg:text-7xl mb-5 text-black'>Portofolio</h1>
                            <p className='text-base text-black'>Sebagai Software House yang merancang dan mengembangkan web app, mobile app, dan PWA sejak 2013, kami telah dipercaya oleh klien kami dari Amerika, Eropa, Australia, dan Asia.</p>
                        </div>
                        <div className="hidden lg:block">
                            <Image
                                src={'/../public/portofolio/circle.png'}
                                alt="circle"
                                width={336}
                                height={336}
                            />
                        </div>
                    </div>
            </div>
            <div className="mt-10 px-10">
                <div className="p-10 bg-white flex items-center justify-around">
                    <div className="md:max-w-[40%]">
                        <h1 className='font-bold text-lg md:text-3xl mb-5 text-black'>Telkombar - Masang Masang Tiang</h1>
                        <p className="text-base text-black">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, at saepe accusamus ipsam reiciendis deserunt!
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Image
                            src={'/../public/portofolio/devices.png'}
                            alt=''
                            width={437}
                            height={437}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mt-10">
                    {portofolios.map((portofolio: Portofolio, index: number) =>
                        <PortofolioCard key={index} data={portofolio} />)
                    }
                </div>

                <div className="px-10 flex flex-col items-center justify-center md:max-w-[40%] text-center mb-10">
                    <p className='text-base text-black'>
                    “ Software house services are needed to help your business connected with your target audience ”
                    </p>
                    <p className='text-base text-black'>Albar Moerhamsa</p>
                </div>
            </div>
        </div>
        
    )
}

export default Portofolio