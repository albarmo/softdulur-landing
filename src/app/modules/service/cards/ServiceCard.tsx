import React from 'react'
import Image from 'next/image'
import { Service } from '@/utils/data/service'

const ServiceCard = (props: { data: Service }) => {
    console.log(props)
    return (
        <div className='p-10 rounded-sm bg-[#f5fbfb] cursor-pointer flex flex-col items-center justify-center'>
            <Image
                src={props.data.illustration}
                alt="Vercel Logo"
                width={240}
                height={24}
                priority
            />
            <h3>{props.data.title}</h3>
        </div>
    )
}

export default ServiceCard