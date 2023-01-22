import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Home/Nav';
import Footer from './components/Home/Footer';
import React from 'react';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/home',
      element: <Home></Home>,
    },
  ]);
  return (
    <React.Fragment>
      <Nav></Nav>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
