import Image from 'next/image'
import React from 'react'

const PortofolioDetail = () => {
    return (
        <div className='overflow-hidden'>
            {/* Header */}
            <div className="flex h-auto justify-between gradient-background bg-blue-600">
                <div className="w-full md:w-2/4 z-10 p-10 md:px-40 py-20 pt-40">
                    <h1 className='text-2xl md:text-4xl font-[600] text-black leading-1'>Travelobar - Jalan Jalan Tapi Digaji .</h1>
                </div>
            </div>
            {/* Project Summary */}
            <div className='bg-white px-10 md:px-20 lg:px-40 py-10 flex flex-col md:flex-row justify-between space-x-10 space-y-10'>
                <article aria-label='Left' className=''>
                    <div className='grid grid-cols-3 gap-10'>
                        <section className='col-span-3'>
                            <h5 className='text-xl font-bold'>Summary</h5>
                            <p className='mt-3'>Traveloka Appreciation Programs is designed to accommodate employees who wants to give appreciation for positive behavior or exemplary work outside of performance review.</p>
                        </section>
                        <section>
                            <h5 className='text-xl font-bold'>Client</h5>
                            <p className='mt-3'>Travelobar</p>
                        </section>
                        <section>
                            <h5 className='text-xl font-bold'>Tahun</h5>
                            <p className='mt-3'>2023</p>
                        </section>
                        <section>
                            <h5 className='text-xl font-bold'>Tipe</h5>
                            <p className='mt-3'>Web Application</p>
                        </section>
                        <section className='col-span-2'>
                            <h5 className='text-xl font-bold'>Link</h5>
                            <p className='mt-3'>https://www.barworks.tech/</p>
                        </section>
                        <section className='col-span-1'>
                            <h5 className='text-xl font-bold'>Lokasi</h5>
                            <p className='mt-3'>DKI Jakarta - Indonesia</p>
                        </section>
                    </div>
                </article>
                <article aria-label='Right' className='w-4/5 flex justify-end'>
                    <div className='p-6 w-80 h-80 rounded-sm cursor-pointer flex flex-col items-start justify-between bg-blue-400'>
                        <section>
                            <Image
                                src={'../logo-white.svg'}
                                alt="project Logo"
                                width={120}
                                height={24}
                                priority
                            />
                        </section>
                        <section>
                            <h3 className='text-2xl text-left font-bold text-white'>Travelobar - Jalan Jalan Tapi Digaji</h3>
                            <p className='block text-sm font-light text-white mt-3'>Software house services are needed to help your business connected with your target audience.</p>
                        </section>
                    </div>
                </article>
            </div >

            {/* Project Detail */}
            <div className='min-h-screen gradient-2 p-10 md:px-40 py-10 flex justify-between space-x-10'>
                <article aria-label='Left' className=''>
                    <div className='grid grid-cols-1 gap-10'>
                        <section className='col-span-3'>
                            <h5 className='text-xl font-bold'>Our Responsibility</h5>
                            <p className='mt-3'>Delivered a full-cycle product development for the Traveloka Appreciation Program - a mobile app aimed to amplify employee engagement with the company and also enable positive peer review. Our engineers have built the project from the very start. Inception and scoping through production to deployment. We handle the front-end and back-end development for Traveloka, as well as graphical and UI design.</p>
                        </section>
                        <section className='col-span-3'>
                            <h5 className='text-xl font-bold'>Tehnical  Responsibility </h5>
                            <div className='grid grid-cols-3 md:grid-cols-5 gap-4 mt-10'>
                                {Array.from(Array(7).keys()).map((item, index) =>
                                    <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-3.5 py-1.5 rounded">Responsibility {item}</span>

                                )}
                            </div>
                        </section>
                        <section className='col-span-3'>
                            <h5 className='text-xl font-bold'>Technology Stack</h5>
                            <div className='grid grid-cols-8 gap-2 mt-10'>
                                {Array.from(Array(7).keys()).map((item, index) =>
                                    <img
                                        key={index}
                                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"}
                                        alt={`Project Stack ${item + 1}`}
                                        width={40}
                                        height={40}
                                    />

                                )}
                            </div>
                        </section>
                        <section className='col-span-3'>
                            <h5 className='text-xl font-bold'>Project Gallery</h5>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10'>
                                {Array.from(Array(7).keys()).map((item, index) =>
                                    <img
                                        key={index}
                                        src={`https://ik.imagekit.io/tvlk/image/imageResource/2022/03/09/1646816611047-3d6b20b5ef0c1e2ef5df119a7d492938.png?tr=q-75`}
                                        alt={`Project Screenshoot ${item + 1}`}
                                    />
                                )}
                            </div>
                        </section>
                    </div>
                </article>
            </div >
        </div >
    )
}

export default PortofolioDetail