"use client";
import React from 'react'
import Link from 'next/link'
import { Instagram,Facebook,Linkedin,Discord,Google } from '@styled-icons/boxicons-logos'

const Navbar = () => {
  return (
    <header>
    <nav className='flex justify-between items-center px-3 py-5 bg-wh-900 text-wh-10 text-xl  '>

    <div className='hidden md:flex gap-3 text-xl'>

<div><Instagram size={30}></Instagram></div>

<div><Facebook size={30} ></Facebook></div>
<div><Linkedin size={30}></Linkedin></div>
 <div> <Google size={30}></Google></div>  
  <div> <Discord size={30}></Discord></div> 
    
    </div>


<div className='flex justify-center basis-2/3 gap-4'>
<Link href="/">home</Link>
<Link href="/trending">trending</Link>
<Link href="/about">about</Link>
</div>

<div className='flex px-4'>
<Link href="/signin">Sign In</Link>
</div>
    </nav>
<div className='flex mx-10 my-5'>
<div className=' basis-2/3 md:mt-2'>
  <h1 className='md:text-4xl font-bold text-wh-900 text-lg sm:text-2xl uppercase'>blog of the future</h1>
  <p className='mt-3'>the blog app with ai integrated</p>
</div>

<div className='bg-wh-900 '>
  
</div>
</div>
    </header>
  )
}

export default Navbar