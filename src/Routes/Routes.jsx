

import { createBrowserRouter } from "react-router-dom"; 
import Roots from "../pages/Roots/Roots";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
          index:true,
          path:'/',
          Component:Home,  
        }
    ]
  }
]);