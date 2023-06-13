import React from 'react'
import Image from 'next/image'
import { services, Service } from '@/utils/data/service'
import ServiceCard from './cards/ServiceCard'

const ServicesList = () => {
    return (
        <div className="h-screen bg-white">
            <div className="px-40 py-20 flex flex-col items-left justify-start h-full leading-1">
                <h3 className='text-3xl font-bold text-black leading-1'>Layanan Kami</h3>
                <section className='grid grid-cols-3 gap-x-10 gap-y-5 mt-10'>
                    {services.map((service: Service) =>
                        <ServiceCard data={service} />)
                    }
                    <div className='bg-[#f4fcfc]  col-span-2 flex items-start justify-between rounded-sm'>
                        <section className='p-8' style={{ backgroundImage: './device.svg' }}>
                            <p className='text-2xl font-bold'>Let's Talk's!</p>
                            <p className='text-sm font-base'>Punya Project atau Ingin Bekerja Sama?Hubungi kami dan kembangkan Software impianmu, sekarang!</p>
                            <button className='mt-10 border border-black px-5 py-2 rounded-full text-sm font-bold'>Start Here</button>
                        </section>
                        <Image
                            src="/device.svg"
                            alt="Vercel Logo"
                            width={280}
                            height={280}
                        />

                    </div>
                </section>
            </div>
        </div>
    )
}

export default ServicesList