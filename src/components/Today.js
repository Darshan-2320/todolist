import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux"; // If storing user in redux
import { addtoday } from "../utils/taskslice";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Edittask from "./Edittask";

const Today = () => {
  const [Edit,setEdit]=useState(false);
  const [Task,setTask]=useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // your redux user
  useEffect(() => {
    if (!user?.uid) return;

    const today = new Date().toISOString().split("T")[0];

    const ref = collection(db, "users", user.uid, "tasks");

    // Real-time listener
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const allTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filter tasks for today
      const todayTasks = allTasks.filter((task) => task.date === today);

      dispatch(addtoday(todayTasks));
    });

    return () => unsubscribe();
  }, [user]);
  const tasks = useSelector((store) => store.tasks.todaytask);

  return (
    <div className="m-4 p-4">
      <h2 className="text-2xl">Today's Tasks</h2>
      {tasks?.length === 0 && <p>No tasks for today 😴</p>}

      <div >{tasks?.map((task) => (
        <div className="border rounded-md shadow-md shadow-slate-300 m-3 p-3" key={task.id}>
          <h3 className="text-md">{task.title}</h3>
          <p>{task.description}</p>
          <p>Date:{task.date}</p>
          <p>
            Time: {task.time}
          </p>
          <p>
            Category:{task.category}
          </p>
          <button className="border mt-5 px-6 py-3 shadow-md shadow-slate-300" onClick={()=>{setEdit(true);setTask(task);}}>Edit Task</button>
        </div>
      ))}</div>
{Edit&&<Edittask task={Task}/>}

    </div>
  );
};

export default Today;
