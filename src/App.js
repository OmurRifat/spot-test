import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import Analysis from './components/Analysis/Analysis';
import Blogs from './components/Blogs/Blogs'
import SpotTests from './components/SpotTests/SpotTests';
import Questions from './components/Questions/Questions'
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import PrivateRoute from './components/Routes/PrivateRoute/PrivateRoute';

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
          element: <PrivateRoute><Analysis></Analysis></PrivateRoute>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/tests/:questionId',
          loader: ({ params }) => fetch(`https://spot-test-server.vercel.app/quiz/${params.questionId}`),
          element: <PrivateRoute><Questions></Questions></PrivateRoute>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
    {
      path: '*',
      element: <h2 className=''>404 || Page Not Found, Plese back to <Link to='/'>home</Link>.</h2>
    }
  ])
  return (
    <RouterProvider router={ router }></RouterProvider>

  );
}

export default App;
