import React, { useEffect } from 'react'
import { logo_url } from '../utils/constants'
import {  useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userslice'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const Navbar = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handlesignout = () => {
    signOut(auth).then(() => {
      //navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

        if (window.location.pathname === "/") {
          navigate("/home");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }

    });
    return () => unsubscribe();
  }, []);
  return (
    <div className='flex justify-between items-center ml-1 mr-2 shadow-md'>
      <div className='border rounded-3xl shadow-xl bg-gray-400'>
        <img src={logo_url} alt='logo' className='w-24'></img>
      </div>

      <h1 className='text-4xl font-semibold'>To-do List</h1>

      <div>
        {user && (
          <button className='text-xl m-2 p-4 border rounded-md bg-red-300' onClick={handlesignout}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar;
