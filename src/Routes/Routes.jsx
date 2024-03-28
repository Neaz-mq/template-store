import {
    createBrowserRouter,   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Templates from "../pages/Temp/Templates/Templates";
import Descriptions from "../pages/Temp/Descriptions/Descriptions";

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
      },
      {
        path: '/template/234',
        element: <Descriptions></Descriptions>
    },
      ]
    },
  ]);