"use client"
import React from 'react'
import Image from 'next/image'
import { Package } from '@/utils/data/package'
import { useRouter } from 'next/navigation';

const PackageCard = (props: { data: Package }) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/package/1')} className='p-6 group rounded-sm bg-[#f5fbfb] cursor-pointer flex flex-col  items-center hover:items-start justify-center hover:justify-between hover:bg-blue-400'>
            <section>
                <Image
                    className='hidden group-hover:block'
                    src={'./logo-white.svg'}
                    alt="Vercel Logo"
                    width={110}
                    height={24}
                    priority
                />
            </section>
            <section>
                <Image
                    className='group-hover:hidden'
                    src={props.data.illustration}
                    alt="Vercel Logo"
                    width={240}
                    height={24}
                    priority
                />
                <h3 className='text-xl text-center group-hover:text-left font-bold group-hover:text-white'>{props.data.title}</h3>
                <h3 className='hidden group-hover:block text-lg font-bold group-hover:text-white'>Rp {props.data.price}</h3>
                <h3 className='hidden group-hover:block text-sm font-light group-hover:text-white mt-3'>{props.data.desctiption}</h3>
            </section>
        </div>
    )
}

export default PackageCard