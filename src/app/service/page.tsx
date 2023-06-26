import React from 'react'
import background from "../../../public/circle.svg";
import Image from 'next/image';
import { Service, services } from '@/utils/data/service';
import ConsultationCTA from '../modules/contacts/ConsultationCTA';


interface IPropServiceItem {
    index: number
    data: Service
}
const ServiceItem: React.FC<IPropServiceItem> = ({ data, index }) => {
    return (
        <article className="flex-col-reverse lg:flex-row p-10 lg:px-40 lg:py-20 flex odd:flex-row-reverse justify-between">
            <section className='w-full lg:w-2/3 leading-2 flex flex-col space-y-3'>
                <p className='text-xl font-bold'>0{index} <span className='text-blue-400 text-2xl'>.</span></p>
                <h1 className='text-3xl font-bold'>{data.title}</h1>
                <p>Software house services are needed to help your business connected with your target audience. Worry not, we will make the process as easy and quick as possible. So, what are you waiting for?</p>
            </section>
            <section>
                <Image src={data.illustration} alt='service ilustration' width={580} height={580} className='hidden md:block' />
            </section>
        </article>
    )
}

const ServicePage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Package Header */}
            <div className="flex h-auto md:h-[550px] justify-between gradient-background bg-blue-600" style={{ backgroundImage: background }}>
                <div className="w-full md:w-2/3 p-10 pt-40 md:px-40 py-20 md:pt-40 leading-1">
                    <h1 className='text-4xl font-[600] text-black'>Layanan</h1>
                    <h4 className='text-md text-gray-800 mt-3'>xxx menawarkan berbagai layanan terbaik yang diformulasikan untuk menjawab kebutuhan Anda akan teknologi dan digitalisasi produk. Meski begitu, kami paham bahwa setiap produk memiliki DNAnya sendiri. Maka, jangan ragu untuk menghubungi kami dan konsultasikan produk Anda.</h4>
                </div>
                <img src='/circle.svg' alt="circle" className='w-1/3 absolute top-0 right-0' />
            </div>
            {services.map((service, index) =>
                <ServiceItem key={index} index={index + 1} data={service} />
            )}
            <article className="flex-col-reverse lg:flex-row p-10 lg:px-40 lg:py-20 block justify-between">
                <section className='w-full flex'>
                    <section className='w-full lg:w-2/3 leading-2 flex flex-col space-y-3'>
                        <section className='mb-5'>
                            <p className='text-xl font-bold'>Tech We Use <span className='text-blue-400 text-2xl'>.</span></p>
                            <h1 className='text-3xl font-bold'>Teknologi yang Kami Gunakan</h1>
                            <p>Perkembangan teknologi berjalan secara exponensial. Kami memastikan teknologi yang kami gunakan mampu memenuhi kebutuhan digitalisasi bisnis Anda.</p>
                        </section>
                        <section className='grid grid-cols-5 gap-5'>
                            {Array.from(Array(8).keys()).map((item, index) =>
                                <img
                                    key={index}
                                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"}
                                    alt={`Project Stack ${ item + 1 }`}
                                    width={50}
                                    height={50}
                                />
                            )}
                        </section>
                    </section>
                    <Image src={"/superhero.svg"} alt="tech" width={300} height={400} className='hidden lg:block' />
                </section>
            </article>
            <div className='p-5 lg:px-20 lg:py-20 gradient-3'>
                <ConsultationCTA />
            </div>
        </div>
    )
}

export default ServicePage