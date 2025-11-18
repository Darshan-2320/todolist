import React, { useEffect, useRef, useState } from 'react';
import { db} from '../firebase';
import { updateDoc ,doc} from "firebase/firestore";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Edittask = ({task}) => {
    const [err, setErr] = useState(false);
    const [complete,setcomplete]=useState(false);
    const user=useSelector((store)=>store.user);
    const edittitle = useRef(null);
    const editdescription = useRef(null);
    const editcategory = useRef(null);
    const editdate = useRef(null);
    const edittime = useRef(null);
    const navigate=useNavigate();
    useEffect(()=>{
         edittitle.current.value =task.title;
            editdescription.current.value =task.description;
            editcategory.current.value = task.category;
            editdate.current.value = task.date;
            edittime.current.value = task.time;
    },[]);
    const handleclick = async () => {
        // validation
        if (
            edittitle.current.value === "" ||
            editdescription.current.value === "" ||
            editcategory.current.value === "" ||
            editdate.current.value === "" ||
            edittime.current.value === ""
        ) {
            setErr(true);
            return;
        }

        setErr(false);

        try {
             // logged-in user ID

            await updateDoc(
                doc(db, "users", user.uid, "tasks",task.id), {
                title: edittitle.current.value,
                description: editdescription.current.value,
                category: editcategory.current.value,
                date: editdate.current.value,
                time: edittime.current.value,
                iscompleted: complete===true?true:false,
                updatedtime: new Date().toLocaleTimeString(),
            });

            alert("Your Task Successfully Edited!");
            navigate("/home/alltask");
            // Clear inputs
            edittitle.current.value = "";
            editdescription.current.value = "";
            editcategory.current.value = "";
            editdate.current.value = "";
            edittime.current.value = "";
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='mt-5 ml-6'>
            <div className='border rounded-md shadow-lg shadow-gray-200'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='m-2 p-2 flex gap-20'>
                        ✚ Edit Task
                        {err && <p className='text-md text-red-500'>Please Fill up the Form!</p>}
                    </div>

                    <div>
                        <input
                            type='text'
                            placeholder='Enter a Title For Task'
                            ref={edittitle}
                            className='w-64 rounded-md shadow-sm shadow-slate-300 m-3 p-3'
                        />

                        <div>
                            <textarea
                                cols={60}
                                rows={4}
                                placeholder='Description'
                                ref={editdescription}
                                className='rounded-md shadow-sm shadow-slate-300 m-3 p-3'
                            ></textarea>
                        </div>

                        <select
                            className='m-3 p-3 rounded-md shadow-sm shadow-slate-300'
                            ref={editcategory}
                        >
                            <option value="">Category</option>
                            <option value="General">General</option>
                            <option value="Travel">Travel</option>
                            <option value="Important">Important</option>
                            <option value="Private">Private</option>
                        </select>
                        <input type='checkbox' placeholder='Completed' onClick={()=>{setcomplete(!complete);}} className='ml-24 p-2'/>Completed
                    </div>

                    <div>
                        <input
                            type='date'
                            className='m-3 p-3 rounded-md shadow-sm shadow-slate-300'
                            ref={editdate}
                        />

                        <input
                            type='time'
                            className='m-3 p-3 rounded-md shadow-sm shadow-slate-300'
                            ref={edittime}
                        />

                        <button
                            type='submit'
                            onClick={handleclick}
                            className='m-4 px-6 py-3 rounded-md shadow-sm shadow-slate-300 text-md'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edittask;
