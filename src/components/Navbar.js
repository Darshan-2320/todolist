import React from 'react'
import { logo_url } from '../utils/constants'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center ml-1 mr-2 shadow-md'>
        <div className='border rounded-3xl shadow-xl bg-gray-400'>
            <img src={logo_url} alt='logo' className='w-24'></img>
        </div>
        <h1 className='text-4xl font-semibold'>To-do List</h1>
        <div>
            <button className='text-xl m-2 p-4 border rounded-md bg-slate-200'>Login</button>
        </div>
    </div>
  )
}

export default Navbar
