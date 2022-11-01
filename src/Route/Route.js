import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main/Main';
import Home from './../Component/Home/Home/Home';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            }
        ]
        
    }
])