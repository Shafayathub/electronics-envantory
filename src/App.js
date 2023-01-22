import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import React from 'react';
import Login from './components/Login/Login';
import Main from './layout/Main';
import Envantory from './components/Envantory/Envantory';
import Error from './components/Error';
import Register from './components/Login/Register';
import ManageEnvantory from './components/Envantory/ManageEnvantory';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'home',
          element: <Home></Home>,
        },
        {
          path: 'envantory',
          element: <Envantory></Envantory>,
        },
        {
          path: 'manage',
          element: <ManageEnvantory></ManageEnvantory>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
      ],
    },
    {
      path: '*',
      element: <Error></Error>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
