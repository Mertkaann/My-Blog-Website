import Image from 'next/image'
import { Inter } from 'next/font/google'
import Blogs from '@/components/Blogs'
import { Navbar } from '@/components/navbar'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>

      <div className="flex min-h-screen justify-between">
        <div className="w-1/4 min-h-screen bg-[#404047] text-[#F0F0F0] pt-10">
          <div className='ml-10'>
            <h1 className="text-2xl font-semibold">Mert Kaan Gül</h1>
            <hr className="w-1/3 my-6" />
            <p className='text-[#9B9B9B] my-5'>Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
            <hr className="w-1/3 my-6" />

            <Navbar />
          </div>
        </div>
        <Blogs />
      </div>



    </>


  )
}
