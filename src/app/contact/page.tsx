import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-full'>
            <div className='bg-white py-28 px-10 md:px-44 xl:px-80'>
                <h1 className='font-semibold text-start text-2xl md:text-4xl'>Konsultasikan ide mu <br /> dulur!</h1>
                <form action="" method="post" className='mt-10 flex gap-6 flex-wrap'>
                    <input type="text" name="name" id="name" className="border border-black rounded-md py-2 px-5 flex-1 flex-shrink-0 w-[320px]" placeholder='Nama Kamu' />
                    <input type="email" name="email" id="email" className="border border-black rounded-md py-2 px-5 flex-1 flex-shrink-0 w-[320px]" placeholder='Email Kamu' />
                    <textarea name="message" id="message" rows={5} className='border border-black rounded-md py-2 px-5 flex-shrink-0 w-full' placeholder='Pesan Kamu'></textarea>
                    <button type='submit' className='flex-1 flex-shrink-0 border border-black px-5 py-2 rounded-md text-sm font-bold hover:border-purple-300 hover:bg-purple-300 hover:text-white'>Kirim</button>
                </form>
            </div>
        </div>
    )
}

export default Contact