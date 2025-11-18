import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addupcoming } from '../utils/taskslice';

const Upcoming = () => {

  const dispatch = useDispatch();
  const alltasks = useSelector((store) => store.tasks.alltasks);
  const upcomingtasks = useSelector((store) => store.tasks.upcomingtask);
  const user = useSelector((store) => store.user);
  const todaydate = new Date().toISOString().split("T")[0];
  useEffect(() => {
    const filter = alltasks.filter((task) => todaydate < task.date);
    dispatch(addupcoming(filter));
  }, [user]);
  return (
    <div className='m-3 p-3'>
      <h1 className='text-xl'>Upcoming Task</h1>
      <div>
        {upcomingtasks && upcomingtasks.map((task) => (
          <div className="border rounded-md shadow-md shadow-slate-300 m-3 p-3" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Date:{task.date}</p>
            <p>Time: {task.time}</p>
            <p>Category: {task.category}</p>
            <p>Status:{" "}Pending</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Upcoming
