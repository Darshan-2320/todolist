import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetchtask } from '../utils/useFetchtask';
import Addtask from './Addtask'
const Alltasks = () => { 
    const user=useSelector((store)=>store.user);
    // Hook automatically listens
    const tasks = useSelector((store) => store.tasks.alltasks);
    
    const unsub = useFetchtask();

    useEffect(() => {
    if (!user?.uid) return;

    return () => {
        unsub && unsub();  // call unsubscribe only on cleanup
    };
}, [user]);

    return (
        <div className='m-3 p-3'>
            {tasks.length===0 &&<> <p className='text-xl'>Create a Task </p>
            <Addtask/></>}
            <div>
                {tasks && tasks.map((task) => (
                    <div className="border rounded-md shadow-md shadow-slate-300 m-3 p-3" key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Date:{task.date}</p>
                        <p>Time: {task.time}</p>
                        <p>Category: {task.category}</p>
                        <p>Status:{task.iscompleted===false?"Pending":"Completed"}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Alltasks;
