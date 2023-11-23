import { Medal } from 'lucide-react'
import localfont from "next/font/local"
import { Poppins } from 'next/font/google'


import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const  headingFont = localfont({
    src : "../../public/font.woff2"
})
const  textFont = Poppins({
    subsets : ['latin'],
    weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})



export default function Home() {
    return (
        <div className='flex items-center justify-center flex-col'>
            <div className={cn('flex items-center justify-center flex-col',
            headingFont.className)}>
                <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
                    <Medal className='h-6 w-6 mr-2' />
                    No 1 task Manager

                </div>
                <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
                    Taskify Helps team
                </h1>
                <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4 rounded-md  w-fil'>
                    Work Forward
                </div>
            </div>
            <div className={cn('text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md-maw-w-3xl text-center mx-auto', textFont.className)}>
                Collaborate, manage projects, and reach new productivity peak.
                From high rises to the home ofiice, the way your team works is unique - accomplish it all with taskify
            </div>
            <Button >
                <Link href={"/sign-up"}>
                    Get Taskify for free
                </Link>
            </Button>
        </div>
    )
}
