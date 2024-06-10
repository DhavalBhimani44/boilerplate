"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter()
    const handleGetStarted = () => {
        router.push('/login');
    }
    return (
        <nav className='sticky top-0 z-50 bg-blue-100'>
            <div className='max-w-7xl mx-auto px-8 py-5 flex items-center'>
                <div className='w-full flex justify-evenly'>
                    <Link href='/'>
                        <div className='flex gap-2 justify-center md:justify-start items-center mt-1.5'>
                            <p>🚀</p>
                            <p className='font-extrabold tracking-tight text-black md:text-lg'>LaunchLeap</p>
                        </div>
                    </Link>
                    <div className='w-full flex items-center pl-12 md:pl-24 gap-4 md:gap-12 '>
                        <Link href='#Pricing' className='text-black hover:underline font-semibold'>Pricing</Link>
                        <Link href='#Review' className='text-black hover:underline font-semibold'>Reviews</Link>
                        <Link href='#FAQ' className='text-black hover:underline font-semibold'>FAQs</Link>
                    </div>
                    <Button className='bg-indigo-500 hover:bg-indigo-700' onClick={handleGetStarted}>Get Started</Button>
                </div>
            </div>
        </nav>
    )
}