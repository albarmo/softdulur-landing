import React from 'react'

const ConsultationCTA = () => {
    return (
        <div className="flex justify-between items-center bg-white p-10 rounded">
            <section aria-label='left' className="relative w-4/6 z-10flex flex-col items-left justify-center h-full leading-1">
                <h1 className='text-3xl font-extrabold text-black leading-1'>Free Consultation .</h1>
                <p className='mt-4 text-md'>Software house services are needed to help your business connected with your target audience. Worry not, we will make the process as easy and quick as possible. So, what are you waiting for?</p>
                <p>Konsultasikan setiap kebutuhan digitalisasi perusahaan Anda kepada Softwareseni.Buat platform digital bisnis Anda, sekarang juga.</p>
                <button className='mt-10 w-40 border border-black px-5 py-2 rounded-full text-sm font-bold'>Discover Works</button>
            </section>
            <section aria-label='right' className="bg-transparent">
                <img
                    src="/consultation.svg"
                    alt="background image"
                    className='h-72'
                />
            </section>
        </div>
    )
}

export default ConsultationCTA