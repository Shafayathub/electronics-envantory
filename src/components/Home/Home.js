import React from 'react';
import Envantory from '../Envantory/Envantory';
import Banner from './Banner';

const Home = () => {
  return (
    <>
      <main className="max-w-screen-xl mx-auto">
        <Banner></Banner>
        <Envantory></Envantory>
      </main>
    </>
  );
};

export default Home;
