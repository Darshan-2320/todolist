import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Today from "./Today";
import Search from "./Search";
import Failed from "./Failed";
import Complete from "./Complete";
import Filter from "./Filter";
import Addtask from "./Addtask";
import Upcoming from "./Upcoming";
import Alltasks from "./Alltasks";
function App() {
  // Router Config
  const approuter = createBrowserRouter([
    {
      path: "/",
      element:<Login />,
    },
    {
      path:"/home",
      element:<Home/>,
     path: "/home",
    element: <Home />,   // Layout page
    children: [
      { path: "addtask", element: <Addtask /> },
      {path:"alltask", element: <Alltasks/>},
      { path: "searchtask", element: <Search /> },
      { path: "todaytask", element: <Today /> },
      { path: "upcomingtask", element: <Upcoming /> },
      { path: "filtertask", element: <Filter /> },
      { path: "completetask", element: <Complete /> },
      { path: "failedtask", element: <Failed /> },
    ],
  },
  ]);

  return <RouterProvider router={approuter} />;
}

export default App;
