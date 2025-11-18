import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addfailed } from '../utils/taskslice';

const Failed = () => {
  const dispatch=useDispatch();
  const alltasks=useSelector((store)=>store.tasks.alltasks);
  const failedtasks=useSelector((store)=>store.tasks.failedtask);
  const user=useSelector((store)=>store.user);
  const todaydate = new Date().toISOString().split("T")[0];
  useEffect(()=>{
    const filter=alltasks.filter((task)=> todaydate>task.date && task.iscompleted===false);
    dispatch(addfailed(filter));
  },[user]);
  return (
    <div className='m-3 p-3'>
      <h1 className='text-xl'>Failed Task</h1>
        <div>
        {failedtasks && failedtasks.map((task) => (
          <div className="border rounded-md shadow-md shadow-slate-300 m-3 p-3" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Date:{task.date}</p>
            <p>Time: {task.time}</p>
            <p>Category: {task.category}</p>
            <p>Status:{" "}Failed</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Failed;
