import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main/Main';
import Home from './../Component/Home/Home/Home';
import Login from "../Component/Login/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
        
    }
])