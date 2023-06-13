import React from 'react'

const PackageDetail = () => {
    return (
        <React.Fragment>
            {/* Package Header */}
            <div className="flex h-auto justify-between gradient-background bg-blue-600">
                <div className="px-40 py-20 pt-40 leading-1">
                    <h1 className='text-4xl font-[600] text-black'>Landing Pack .</h1>
                    <h4 className='text-2xl font-[600] text-blue-500'>Rp 1.500.000</h4>
                </div>
            </div>
            {/* Package Detail */}
            <div className='gradient-2 py-10 flex justify-center items-center space-x-10'>
                <article className='bg-white p-10 rounded w-3/4 drop-shadow-sm'>
                    <section>
                        <h5 className='text-xl font-bold'>Engagement Model</h5>
                        <p className='mt-3'>Website landing page adalah website yang hanya terdiri dari sedikit halaman (biasanya kurang dari 5), semua informasi biasanya tertera di halaman utama. Tujuannya sebagai perkenalan atau promosi satu produk tertentu.</p>
                        <ul className='mt-10 list-disc px-10'>
                            {Array.from(Array(7).keys()).map((item, index: number) =>
                                <li key={index} className=" text-sm font-medium mr-2 px-3.5 py-1.5 rounded">Responsibility {item}</li>

                            )}
                        </ul>
                    </section>
                    <p className='mt-10 text-md font-light text-gray-600'>* Revisi desain dilakukan setelah website online* Perubahan pada website menyesuaikan dengan kemampuan tema / CMS website* Kami akan melakukan pemberitahuan jika perubahan / request klien tidak dapat dilakukan karena keterbatasan fitur pada tema / CMS</p>
                    <button className='mt-10 w-40 border border-black px-5 py-2 rounded text-sm font-bold'>Pesan Sekarang</button>
                </article>
            </div >
        </React.Fragment >
    )
}

export default PackageDetail