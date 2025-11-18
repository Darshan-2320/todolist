import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addtasks } from "./taskslice";

export const useFetchtask = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.uid) return;

    const ref = collection(db, "users", user.uid, "tasks");

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const allTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(addtasks(allTasks));
    });

    return () => unsubscribe();
  }, [user]);
};
