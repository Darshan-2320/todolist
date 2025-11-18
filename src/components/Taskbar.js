import { SECTION } from "../utils/sectiontype";
import { setActive } from "../utils/buttonslice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Taskbar = () => {
  const dispatch = useDispatch();
  const user=useSelector((store=>store.user));
  const select = (section) => {
    dispatch(setActive(section));
  };

  return (
    <div className="mt-5 h-screen bg-slate-100 rounded-sm w-56">
      {user&&<h1 className="mt-2 p-2 text-xl">{user.displayName}</h1>
}
      <div className="p-3 m-3">
        <Link to={"/home/addtask"}><button onClick={() => select(SECTION.ADD)}>✚ Add Task</button></Link>
        <Link to={"/home/searchtask"}><button onClick={() => select(SECTION.SEARCH)}>🔍 Search Task</button></Link>
        <Link to={"/home/todaytask"}><button onClick={() => select(SECTION.TODAY)}>📅 Today Task</button></Link>
        <button onClick={() => select(SECTION.UPCOMING)}>⏳ Upcoming Task</button>
        <Link to={"/home/filtertask"}><button onClick={() => select(SECTION.FILTER)}>🗂️ Filter Task</button></Link>
        <Link to={"/home/completetask"}><button onClick={() => select(SECTION.COMPLETE)}>✔ Completed Task</button></Link>
        <Link to={"/home/failedtask"}><button onClick={() => select(SECTION.FAILED)}>❌ Failed Task</button></Link>
      </div>
    </div>
  );
};

export default Taskbar;
