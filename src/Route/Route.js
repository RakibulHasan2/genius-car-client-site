import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main/Main';
import Home from './../Component/Home/Home/Home';
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import CheckOut from "../Component/CheckOut/CheckOut";
import Orders from "../Component/Orders/Orders";

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
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]
        
    }
])