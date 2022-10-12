import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import Analysis from './components/Analysis/Analysis';
import Blogs from './components/Blogs/Blogs'
import SpotTests from './components/SpotTests/SpotTests';
import Questions from './components/Questions/Questions'

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
        },
        {
          path: '/tests/:questionId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.questionId}`),
          element: <Questions></Questions>
        },
      ]
    },
    {
      path: '*',
      element: <h2 className='App'>404 || Page Not Found, Plese back to home manue.</h2>
    }
  ])
  return (
    <RouterProvider router={ router }></RouterProvider>

  );
}

export default App;
