import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Service";
import Contactus from "../pages/Contact";


export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"/about",element:<About/>},
            {path:"/service",element:<Services/>},
            {path:"/contact-us",element:<Contactus/>},

        ]
    }
])