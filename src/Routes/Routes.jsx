

import { createBrowserRouter } from "react-router-dom"; 
import Roots from "../pages/Roots/Roots";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
          index:true,
          loader:()=>fetch('BookData.json') ,
          path:'/',
          Component:Home,  
        },
        {
          path:'/about',
          Component:About
        },
        {
          path:'/bookDetails/:id',
          Component:BookDetails,
        }
    ]
  }
]);