"use client"
import React from 'react'
import Image from 'next/image'
import { Package } from '@/utils/data/package'
import { motion } from 'framer-motion'

const PackageCard = (props: { data: Package }) => {
    return (
        <>
            <motion.circle
                cx={500}
                animate={{ cx: [null, 100] }}
            >
                <div className='p-6 group w-96 h-96 rounded-sm bg-[#f5fbfb] cursor-pointer flex flex-col  items-center hover:items-start justify-center hover:justify-between hover:bg-blue-400'>
                    <section>
                        <Image
                            className='hidden group-hover:block'
                            src={'./logo-white.svg'}
                            alt="Vercel Logo"
                            width={140}
                            height={24}
                            priority
                        /></section>
                    <section>
                        <Image
                            className='group-hover:hidden'
                            src={props.data.illustration}
                            alt="Vercel Logo"
                            width={240}
                            height={24}
                            priority
                        />
                        <h3 className='text-2xl text-center group-hover:text-left font-bold group-hover:text-white'>{props.data.title}</h3>
                        <h3 className='hidden group-hover:block text-2xl font-extrabold group-hover:text-white'>Rp {props.data.price}</h3>
                        <h3 className='hidden group-hover:block text-sm font-light group-hover:text-white mt-3'>{props.data.desctiption}</h3>
                    </section>
                </div>
            </motion.circle>
        </>
    )
}

export default PackageCard