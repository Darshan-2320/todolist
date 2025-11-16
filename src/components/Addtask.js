import React, { useRef, useState } from 'react'

const Addtask = () => {
    const [err,seterr]=useState(false);
    const title = useRef(null);
    const description = useRef(null);
    const category = useRef(null);
    const date = useRef(null);
    const time = useRef(null);

    const handleclick=()=>{
        if(title.current.value||description.current.value||category.current.value||date.current.value||time.current.value===""){
            seterr(!err);
        }
        console.log(title.current.value,description.current.value,category.current.value,date.current.value,time.current.value);
    }
    return (
        <div className='mt-5 ml-6'>
            <div className='border rounded-md shadow-lg shadow-gray-200'>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className='m-2 p-2 flex gap-20'>
                        ✚ Add Task
                        {err&&<p className='text-md text-red-500 '>Please Fill up the Form!</p>}
                    </div>
                    <div>
                        <input type='text' placeholder='Enter a Title For Task' ref={title} className='w-64 rounded-md shadow-sm shadow-slate-300 m-3 p-3' />
                        <div>
                            <textarea cols={60} rows={4} placeholder='Description' ref={description} className='rounded-md shadow-sm shadow-slate-300 m-3 p-3'></textarea>
                        </div>
                        <select className='m-3 p-3 rounded-md shadow-sm shadow-slate-300'ref={category} >
                            <option>Category</option>
                            <option>Genreal</option>
                            <option>Travel</option>
                            <option>Important</option>
                            <option>Private</option>
                        </select>
                    </div>
                    <div>
                        <input type='date' className='m-3 p-3 rounded-md shadow-sm shadow-slate-300' ref={date}/>
                        <input type='time' className='m-3 p-3 rounded-md shadow-sm shadow-slate-300' ref={time}/>
                        <button type='submit' onClick={handleclick} className='m-4 px-6 py-3 rounded-md shadow-sm shadow-slate-300 text-md'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Addtask
