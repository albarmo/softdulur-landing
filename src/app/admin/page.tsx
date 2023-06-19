import React from 'react'
import Image from 'next/image'

const AdminDashboard = () => {
    return (
        <div className='min-h-screen gradient-5 p-10 pt-28 lg:px-40 lg:py-32 flex flex-col space-y-5'>
            <section className=''>
                <section className='w-full lg:w-2/5'>
                    <h1 className='text-4xl font-bold'>Dashboard</h1>
                    <p className='text-gray-800 mt-2'>xxx menawarkan berbagai layanan terbaik yang diformulasikan untuk menjawab kebutuhan</p>
                </section>
            </section>
            <section>
                <h2 className='text-xl font-semibold'>Contacts Table</h2>
                <Image
                    className='mt-5'
                    src={'../table.svg'}
                    alt="project Logo"
                    width={1248}
                    height={791}
                    priority
                />
            </section>

        </div >
    )
}

export default AdminDashboard