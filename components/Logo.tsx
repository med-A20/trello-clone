
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

import localFont from 'next/font/local'

const heading = localFont({
    src : '../public/font.woff2'
})

export const Logo = () => {
  return (
    <Link href={"/"}>
    
        <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
            <Image
                src={'/logo.svg'}
                alt="logo"
                height={30}
                width={30}
            />
            <p className={cn("text-lg text-neutral-700 pb-1", heading.className)}>
                Taskify
            </p>
        </div>
    </Link>
  )
}

// export default Logo also true, for reuseable component we can export without defautl