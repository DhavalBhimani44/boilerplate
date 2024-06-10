import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-blue-50 border-t border-base-content/10'>
            <div className='max-w-7xl mx-auto px-8 py-24'>
                {/* Launch Leap logo/ copyright */}
                <div className='flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
                    <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
                        <div className='flex gap-2 justify-center md:justify-start items-center'>
                            <p className='font-extrabold tracking-tight text-base md:text-lg'>🚀LaunchLeap</p>
                        </div>
                        <p className='mt-3 text-sm text-base-content/80'>Elevate your SaaS success</p>
                        <p className='mt-3 text-sm text-base-content/60 text-gray-400'>Copyright © 2024 - All rights reserved</p>
                        <Link href='/' className='inline-block mt-4 text-sm border hover:border-black rounded px-2 py-1 cursor-pointer'>
                            <span className='font-bold flex gap-0.5 items-center tracking-tight'>Built with 🚀LaunchLeap</span>
                        </Link>

                    </div>
                    <div className='flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center'>
                        {/* Links */}
                        <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
                            <p className='font-semibold text-base-content tracking-widest text-sm md:text-left mb-3'>LINKS</p>
                            <div className='flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm'>
                                <Link href='#' className='hover:underline'>Home</Link>
                                <Link href='#Pricing' className='hover:underline'>Pricing</Link>
                                <Link href='#FAQ' className='hover:underline'>FAQ</Link>
                            </div>
                        </div>
                        {/* Legal */}
                        <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
                            <p className='font-semibold text-base-content tracking-widest text-sm md:text-left mb-3'>LEGAL</p>
                            <div className='flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm'>
                                <Link href='/tos' className='hover:underline'>Terms of Service</Link>
                                <Link href='/privacy-policy' className='hover:underline'>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
