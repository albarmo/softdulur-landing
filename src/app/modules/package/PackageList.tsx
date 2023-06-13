import { Package, packages } from '@/utils/data/package'
import React from 'react'
import PackageCard from './cards/PackageCard'

const PackageList = () => {
    return (
        <div className="rounded my-10 lg:my-20">
            <h3 className='text-2xl md:text-3xl font-bold text-black leading-1'>Sedulur Package <span className='text-blue-400 text-5xl'>.</span></h3>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-10'>
                {packages.map((packageItem: Package, index: number) =>
                    <PackageCard key={index} data={packageItem} />)
                }
            </section>
        </div>
    )
}

export default PackageList