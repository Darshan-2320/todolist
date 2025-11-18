import React, { useRef, useState } from 'react'
import {useSelector } from 'react-redux';

const Search = () => {
  const value=useRef(null);
  const [search,setsearch]=useState([]);
  const user = useSelector((store) => store.user);
  const alltaskstask = useSelector((store) => store.tasks.alltasks);

  
    const handleclick=()=>{
      const filtertask = alltaskstask?.filter((tasks) => tasks?.category.toLowerCase() === value.current.value.toLowerCase());
      setsearch(filtertask);
    };
  
  return (
    <div className='m-3 p-3'>
      <div className='ml-10'>
        <input type='text' ref={value} className='w-80 rounded-md shadow-sm shadow-slate-300 m-3 p-3' placeholder='Enter a Type of Task'/>
        <button className='m-3 px-6 py-3 shadow-sm shadow-slate-300 rounded-md' onClick={handleclick}>Search</button>
      </div>
        <div>
        {search && search.map((task) => (
          <div className="border rounded-md shadow-md shadow-slate-300 m-3 p-3" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Date:{task.date}</p>
            <p>Time: {task.time}</p>
            <p>Category: {task.category}</p>
            <p>Status:{task.iscompleted===true?"Completed":"Pending"}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
