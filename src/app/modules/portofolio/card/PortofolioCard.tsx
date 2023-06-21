import React from 'react'
import Image from 'next/image'
import { Portofolio } from '@/utils/data/portofolio'

const ServiceCard = (props: { data: Portofolio }) => {
    return (
        <div className="h-[343px] p-5 bg-[#f5fbfb] cursor-pointer flex flex-col items-center justify-between">
            <Image
                src={props.data.illustration}
                alt="Vercel Logo"
                width={280}
                height={254}
            />
            <h3 className='font-bold text-lg'>{props.data.title}</h3>
        </div>
    )
}

export default ServiceCard