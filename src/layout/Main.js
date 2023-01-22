import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/Footer';
import Nav from '../components/Home/Nav';

const Main = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
