import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='p-8'>
        <div className='flex items-center'>
            <div>
                <Link href='/' className='text-3xl font-bold text-gray-800'>APraSak Technologies</Link>
            </div>
            <div className='ml-auto flex space-x-4 gap-14 text-lg'>
                <Link href='/' className=' font-bold text-gray-800'>Home</Link>
                <Link href='/about' className=' font-bold text-gray-800'>About</Link>
                <Link href='/services' className=' font-bold text-gray-800'>Services</Link>
                <Link href='/contact' className=' font-bold text-gray-800'>Contact</Link>
                <Link href='/blogs' className=' font-bold text-gray-800'>Blogs</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar