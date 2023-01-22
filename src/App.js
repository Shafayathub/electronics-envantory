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
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/Login/RequireAuth';
import UpdateProfile from './components/profile/UpdateProfile';

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
          element: (
            <RequireAuth>
              <ManageEnvantory></ManageEnvantory>
            </RequireAuth>
          ),
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
        {
          path: 'profile',
          element: <UpdateProfile></UpdateProfile>,
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
      <ToastContainer />
    </>
  );
}

export default App;
