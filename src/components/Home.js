import React from 'react'
import Navbar from './Navbar'
import Taskbar from './Taskbar'
import Addtask from './Addtask'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {//taskbar verticle
      }
      <div className='flex'>
        <Taskbar/>
        <Addtask/>
      </div>
    </div>
  )
}

export default Home
