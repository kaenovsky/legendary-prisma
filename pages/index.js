import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Logo from '@/assets/logostarwars.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <div className='flex justify-center mt-20'>
    <Image src={Logo} alt='' height={200} />     
    </div> 
    </>
  )
}
