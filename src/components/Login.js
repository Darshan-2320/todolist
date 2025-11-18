import { useRef, useState } from "react";
import { checkvalid } from "../utils/valid";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { addUser } from "../utils/userslice";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [issignin, setisisignin] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const dispatch = useDispatch();
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);
  const number = useRef(null);
  const navigate=useNavigate();
  const handlesignin = () => {
    setisisignin(!issignin);
    console.log(issignin);
  };
  const handleclick = () => {
    if (issignin) {
      //Sign in Form
      const message = checkvalid(null, email.current.value, password.current.value, null, null, true);
      seterrormessage(message);

      //Firebase Logic for Authenthication
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "--" + errorMessage);
        });
    }
    else {
      //Sign up form
      const message = checkvalid(fullname.current.value, email.current.value, password.current.value, confirmpassword.current.value, number.current.value, false);
      seterrormessage(message);

      //Firebase Logic for Authenthication
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          //update Profile with full name and photourl
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
          }).then(() => {
            const { uid, email, displayName} = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            navigate("/home");
          }).catch((error) => {
            // An error occurred
            seterrormessage(error.message);
            // ...
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "__" + errorMessage);
          // ..
        });

    }
  };

  return (
    <div>
      <Navbar/>
      <div className="flex justify-center py-20">
        <form className={issignin ? "p-5 m-8 bg-opacity-80 absolute bg-black rounded-2xl text-white w-[500px] " : "p-5 -m-5 bg-opacity-80 absolute bg-black rounded-2xl text-white w-[500px] "} onSubmit={(e) => e.preventDefault()
        }>
          <h1 className="p-4 my-2 text-3xl font-semibold">{issignin ? "Sign in" : "Sign Up"}</h1>

          {!issignin && <input type="text" placeholder="Enter Your Full Name" ref={fullname} className="my-4 p-4 w-full rounded-xl bg-gray-800" />}

          <input type="text" placeholder="Enter Your Email" className="my-4 p-4 w-full rounded-xl bg-gray-800" ref={email} />
          {!issignin && <input type="text" placeholder="Enter Your Phone Number" className="my-4 p-4 w-full rounded-xl bg-gray-800" ref={number} maxLength={10} />}

          <input type="password" placeholder="Enter Your Password" className="my-4 p-4 w-full bg-gray-800 rounded-xl " ref={password} />

          {!issignin && <input type="Password" placeholder="Enter Your Confirm Password" ref={confirmpassword} className="my-4 p-4 w-full rounded-xl bg-gray-800" />}

          <button type="submit" onClick={handleclick} className="p-4 my-5 w-full text-black rounded-xl bg-red-500 text-xl" >{issignin ? "Sign in" : "Sign Up"}</button>

          <p className="p-4 my-1 text-red-500 text-xl ">{errormessage}</p>
          <p className="p-2 my-2 text-xl">{issignin ? "Doesn`t have an Account?" : "Already have an Account?"}<button className="underline mx-2 text-xl cursor-pointer" onClick={handlesignin}>{issignin ? "Sign Up" : "Sign in"}</button></p>
        </form>
      </div>
    </div>
  );
};
export default Login;