import React from 'react'

const Taskbar = () => {
  return (
    <div className='mt-5  h-screen bg-slate-100 rounded-sm w-56'>
      <div>
        <h1 className='mt-2 items-center p-2 text-xl'>Username</h1>
      </div>
      <div className='text-md  p-3 m-3 '>
        <button>✚ Add Task</button>
        <button>🔍 Search Task</button>
        <button>📅 Today Task</button>
        <button>⏳ Upcoming Task</button>
        <button>🗂️ Filters Task</button>
        <button>✔️ Completed Task</button>
      </div>
    </div>
  )
}

export default Taskbar
