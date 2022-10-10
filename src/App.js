import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header></Header>,
      children: [
        {
          path: 'home',
          element: <Home></Home>
        }
      ]
    },
    {
      path: '*',
      element: <h2>404 || Page Not Found.</h2>
    }
  ])
  return (
    <RouterProvider router={ router }></RouterProvider>

  );
}

export default App;
