import React from 'react'
import Image from 'next/image'

const AdminLogin = () => {
    return (
        <div className='p-4 h-screen gradient-3 py-10 flex justify-center items-center space-x-10 rounded-xl overflow-hidden'>
            <article className='w-full h-[461px] md:w-[381px] bg-white rounded drop-shadow-sm flex overflow-hidden'>
                <section className='p-10 flex flex-col justify-between space-y-5'>
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <Image
                            src="/logo.svg"
                            alt="Vercel Logo"
                            width={180}
                            height={24}
                            priority
                        />
                    </a>
                    <section>
                        <h5 className='text-2xl font-bold'>Admin</h5>
                        <p className='text-gray-600 mt-2'>xxx menawarkan berbagai layanan terbaik yang diformulasikan untuk menjawab kebutuhan </p>
                    </section>
                    <form className='grid grid-col-1 gap-5'>
                        <input type='email' placeholder='Email' className='border border-gray-600 p-2 rounded' />
                        <input type='password' placeholder='Password' className='border border-gray-600 p-2 rounded' />
                    </form>
                    <button className='mt-10 w-40 border border-black px-5 py-2 rounded text-sm font-bold'>Login</button>
                </section>
                <section className='bg-red-100 w-3 gradient-4 ' >
                </section>
            </article>
        </div >
    )
}

export default AdminLogin