import { Button } from '@/components/ui/button'
import { privacyPolicy } from '@/constants/privacypolicy'
import Link from 'next/link'
import React from 'react'

export default function TOS() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-200'>
            <div className='max-w-lg p-5 rounded-lg bg-slate-800'>
                <Link href='/'>
                    <Button size={'lg'} variant={'ghost'} className='text-gray-400'>👈🏼 Back</Button>
                </Link>
                <div className='mt-5'>
                    <h1 className='text-3xl font-bold text-gray-300'>Privacy Policy</h1>
                    <div>
                        <pre className='text-md pt-5 text-gray-300' style={{whiteSpace: 'pre-wrap', fontFamily: 'unset'}}>
                            {privacyPolicy}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
