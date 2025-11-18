import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcomplete } from '../utils/taskslice';

const Complete = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const alltaskstask = useSelector((store) => store.tasks.alltasks);

  useEffect(() => {
    if (!user.uid) return;
    const filtercomplete = alltaskstask?.filter((tasks) => tasks?.iscompleted === true);
    dispatch(addcomplete(filtercomplete));
  }, [])
  const completetasks = useSelector((store) => store.tasks.completetask);

  return (
    <div className='m-4 p-4'>
      <h1 className='text-xl'>Completed Task</h1>
      <div>
        {completetasks && completetasks.map((task) => (
          <div className="border rounded-md shadow-md shadow-slate-300 m-3 p-3" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Date:{task.date}</p>
            <p>Time: {task.time}</p>
            <p>Category: {task.category}</p>
            <p>Status:{" "}Completed</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Complete;
