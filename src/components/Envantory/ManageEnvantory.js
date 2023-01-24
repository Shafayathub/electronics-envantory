import React from 'react';
import AddItem from './AddItem';
import ManageItem from './ManageItem';

const ManageEnvantory = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <h3 className="text-center text-xl font-semibold">Manage Envantory</h3>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content grid lg:grid-cols-2 gap-2">
            <ManageItem></ManageItem>
            <AddItem></AddItem>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageEnvantory;
