import React from 'react';
import error from '../images/Error.gif';

const Error = () => {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <img src={error} alt="404" />
      </section>
    </>
  );
};

export default Error;
