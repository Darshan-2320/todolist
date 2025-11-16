import { SECTION } from "../utils/sectiontype";
import { setActive } from "../utils/buttonslice";
import { useDispatch } from "react-redux";

const Taskbar = () => {
  const dispatch = useDispatch();

  const select = (section) => {
    dispatch(setActive(section));
  };

  return (
    <div className="mt-5 h-screen bg-slate-100 rounded-sm w-56">
      <h1 className="mt-2 p-2 text-xl">Username</h1>

      <div className="p-3 m-3">
        <button onClick={() => select(SECTION.ADD)}>✚ Add Task</button>
        <button onClick={() => select(SECTION.SEARCH)}>🔍 Search Task</button>
        <button onClick={() => select(SECTION.TODAY)}>📅 Today Task</button>
        <button onClick={() => select(SECTION.UPCOMING)}>⏳ Upcoming Task</button>
        <button onClick={() => select(SECTION.FILTER)}>🗂️ Filter Task</button>
        <button onClick={() => select(SECTION.COMPLETE)}>✔ Completed Task</button>
      </div>
    </div>
  );
};

export default Taskbar;
