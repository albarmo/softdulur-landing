import { Package, packages } from '@/utils/data/package'
import React from 'react'
import PackageCard from './cards/ServiceCard'

const PackageList = () => {
    return (
        <div className="rounded mt-20">
            <h3 className='text-3xl font-bold text-black leading-1'>Sedulur Package <span className='text-blue-400 text-5xl'>.</span></h3>
            <section className='grid grid-cols-3 gap-x-10 gap-y-5 mt-10'>
                {packages.map((service: Package) =>
                    <PackageCard data={service} />)
                }
            </section>
        </div>
    )
}

export default PackageList