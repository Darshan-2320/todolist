import React, { useState } from "react";
import { useSelector, useStore } from "react-redux";

const Filter = () => {
  const tasks = useSelector((store) => store.tasks.alltasks);

  const [category, setCategory] = useState("");
 
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filtered = tasks?.filter((task) => {
    const matchCategory = category ? task.category.toLowerCase() === category.toLowerCase() : true;
    const matchSearch = task.title.toLowerCase().includes(search.toLowerCase());

    const matchDate =
      (!startDate || task.date >= startDate) &&
      (!endDate || task.date <= endDate);

    return matchCategory && matchSearch && matchDate;
  });

  return (
    <div className="m-3 p-3">
      <h1 className="text-xl ">Filter Tasks</h1>

      {/* FILTER CONTROLS */}
      <div className="grid grid-cols-2 gap-4">

        <select className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Genreal">Genreal</option>
          <option value="Important">Important</option>
          <option value="Travel">Travel</option>
        </select>


        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input type="date" className="border p-2 rounded"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input type="date" className="border p-2 rounded"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* FILTER RESULTS */}
      <div className="mt-5">
        {filtered.map((task) => (
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
  );
};

export default Filter;
