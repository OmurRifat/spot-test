import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import SpotTests from './components/SpotTests/SpotTests';
import Analysis from './components/Analysis/Analysis';
import Blogs from './components/Blogs/Blogs'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/tests',
          element: <SpotTests></SpotTests>
        },
        {
          path: '/analysis',
          element: <Analysis></Analysis>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: '*',
      element: <h2 className='App'>404 || Page Not Found.</h2>
    }
  ])
  return (
    <RouterProvider router={ router }></RouterProvider>

  );
}

export default App;
