import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Route/Route'
function App() {
  return (
    <div   className='max-w-screen-xl mx-auto'>
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
