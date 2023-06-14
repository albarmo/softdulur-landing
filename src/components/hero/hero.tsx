'use client'
import { motion } from 'framer-motion';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};


const HeroDashboard = () => {
    return (
        <div className="flex h-screen justify-between">
            <div className="relative w-full lg:w-4/6 md:w-full z-10  px-10 lg:px-20 flex flex-col items-left justify-center h-full leading-2">

                <motion.article
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                >
                    <motion.h1 variants={itemVariants}>
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                500,
                                'We Develop Tech for You', // initially rendered starting point
                                1000,
                                'We Develop Tech for Them',
                                1000,
                                'We Develop Tech for Everyone .',
                                500,
                            ]}
                            speed={50}
                            style={{ fontSize: '2rem', fontWeight: 'bold' }}
                            repeat={0}
                        />
                    </motion.h1>
                    <ul>
                        <motion.li variants={itemVariants}>
                            <p className='mt-4 text-md'>Software house services are needed to help your business connected with your target audience. Worry not, we will make the process as easy and quick as possible. So, what are you waiting for?</p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <button className='mt-10 w-40 border border-black px-5 py-2 rounded-full text-sm font-bold'>Discover Works</button>
                        </motion.li>
                    </ul>
                </motion.article>
            </div>
            <div className="bg-transparent w-full hidden lg:block">
                <img
                    src="/team-work.svg"
                    alt="background image"
                    className='h-full'
                />
            </div>
        </div >
    )
}

export default HeroDashboard