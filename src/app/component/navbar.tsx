import React from 'react'
import Link from 'next/link'

export default function Navbar(){
  return (
    <div className='bg-pink-600 p-5 flex justify-center gap-8 text-white hover:bg-teal-400 hover:text-stone-700'>
     
     <Link href='/' target='__blank'>Home</Link>
        <Link href='/about' target='__blank'>About</Link>
        <Link href='/services' target='__blank'>Services</Link>
        <Link href='/contact' target='__blank'>Contact</Link>
    </div>
  )
}
