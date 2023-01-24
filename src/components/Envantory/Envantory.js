import React, { useEffect, useState } from 'react';
import Product from './Product';

const Envantory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://server-electronic-envantory.onrender.com/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <h1 className="text-center text-xl font-semibold">Envantory</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </section>
    </>
  );
};

export default Envantory;
