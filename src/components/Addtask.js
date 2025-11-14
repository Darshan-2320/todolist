import React from 'react'

const Addtask = () => {
    return (
        <div className='mt-5 ml-6'>
            <div className='border rounded-md shadow-lg shadow-gray-200'>
                <div className='m-2 p-2'>
                    ✚ Add Task
                </div>
                <div>
                    <input type='text' placeholder='Enter a Title For Task' className='w-64 rounded-md shadow-sm shadow-slate-300 m-3 p-3' />
                    <div>
                        <textarea cols={60} rows={4} placeholder='Description' className='rounded-md shadow-sm shadow-slate-300 m-3 p-3'></textarea>
                    </div>
                    
                </div>
                <div>
                    <input type='date' className='m-3 p-3 rounded-md shadow-sm shadow-slate-300'/>
                    <input type='time' className='m-3 p-3 rounded-md shadow-sm shadow-slate-300'/>
                </div>
            </div>

        </div>
    )
}

export default Addtask
