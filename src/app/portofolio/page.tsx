import React from 'react'
import Image from 'next/image'
import HeroPorto from '../../../public/portofolio/Group 6.png'
import ImagePorto from '../../../public/portofolio/Group 3.png'
import PortofolioCard from '../modules/portofolio/card/PortofolioCard'
import { Portofolio, portofolios } from '@/utils/data/portofolio'

const Portofolio = () => {
    return (
        <div className='w-full h-auto'>
            <div className="bg-white px-20">
                    <div className="flex justify-between py-36">
                        <div className="lg:max-w-[50vw]">
                            <h1 className='font-bold text-7xl mb-5'>Portofolio</h1>
                            <p className='text-base'>Sebagai Software House yang merancang dan mengembangkan web app, mobile app, dan PWA sejak 2013, kami telah dipercaya oleh klien kami dari Amerika, Eropa, Australia, dan Asia.</p>
                        </div>
                        <div className="hidden lg:block">
                            <Image
                                src={HeroPorto}
                                alt=""
                                width={336}
                            />
                        </div>
                    </div>
            </div>
            <div className="py-10 px-14">
                <div className="bg-white p-20 flex items-center justify-around">
                    <div className="md:max-w-[40%]">
                        <h1 className='font-bold text-lg md:text-3xl mb-5'>Telkombar - Masang Masang Tiang</h1>
                        <p className="text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, at saepe accusamus ipsam reiciendis deserunt!
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Image
                            src={ImagePorto}
                            alt=''
                            className='max-w-[437px] w-full'
                        />
                    </div>
                </div>
            </div>
            <div className="px-14 flex flex-col items-center justify-center">
                <div className="p-10 grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mt-10">
                {portofolios.map((portofolio: Portofolio, index: number) =>
                        <PortofolioCard key={index} data={portofolio} />)
                    }
                </div>

                <div className="flex flex-col items-center justify-center md:max-w-[40%] text-center py-10">
                    <p className=''>
                    “ Software house services are needed to help your business connected with your target audience”
                    </p>
                    <p>Albar Moerhamsa</p>
                </div>
            </div>
        </div>
        
    )
}

export default Portofolio