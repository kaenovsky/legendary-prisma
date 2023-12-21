import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <div>
    <Image className='w-full h-full' src={'https://wallpapers.com/images/hd/4k-star-wars-logo-5binreit9du28bif.jpg'} alt='' width={1000} height={10}/>
     
    </div> 
    </>
  )
}
