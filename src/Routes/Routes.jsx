import {
    createBrowserRouter,   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Templates from "../pages/Temp/Templates/Templates";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/template',
          element: <Templates></Templates>
      }
      ]
    },
  ]);