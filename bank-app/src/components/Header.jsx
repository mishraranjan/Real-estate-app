import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  return (
  <header className='bg-emerald-100 p-3 shadow-md'>
    <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to='/'>
    <h1 className='font-bold text-sm sm:text-lg flex flex-wrap'>
        <span className='text-emerald-500'>Our</span>
        <span className='text-emerald-700'>Estate</span>
    </h1>
    </Link>
    <form className='bg-emerald-50 p-3 rounded-lg flex items-center justify-between'>
        <input type="text" placeholder='Search...' className='bg-transparent outline-none w-24 sm:w-64'  />
        <FaSearch className='text-emerald-600'/>
    </form>
    <ul className='flex gap-4'>
    <Link to='/'> <l1 className='hidden sm:inline font-medium text-emerald-800 hover:underline cursor-pointer'>Home</l1></Link>
    <Link to='/about'><l1 className='hidden sm:inline font-medium text-emerald-800 hover:underline cursor-pointer'>About</l1></Link>
    <Link to='/sign-in'><l1 className=' font-medium text-emerald-800 hover:underline cursor-pointer'>Sign in</l1></Link>
    </ul>
    </div>

  </header>
  )
}

export default Header
