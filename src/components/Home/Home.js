import React from 'react';
import Envantory from '../Envantory/Envantory';
import Banner from './Banner';
import Clients from './Clients';
import Sales from './Sales';

const Home = () => {
  return (
    <>
      <main className="max-w-screen-xl mx-auto">
        <Banner></Banner>
        <Envantory></Envantory>
        <Clients></Clients>
        <Sales></Sales>
      </main>
    </>
  );
};

export default Home;
