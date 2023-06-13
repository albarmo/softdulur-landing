'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const NotFoundPage = () => {
    const router = useRouter()
    return (
        <div className='min-h-screen px-40 py-20 flex flex-col justify-center items-center'>
            <p className='text-xl font-semibold'>Not Found !</p>
            <p className='text-md font-base'>Page you search not found</p>
            <button onClick={() => router.push('/')} className='mt-5 border border-black px-5 py-2 rounded-full text-sm font-bold'>Back to Future</button>
        </div>
    )
}

export default NotFoundPage