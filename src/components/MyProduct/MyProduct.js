import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../firebase/firebase.config';
import MyProductRow from './MyProductRow';

const MyProduct = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://server-electronic-envantory.onrender.com/myProduct?email=${email}`;
    try {
      axiosPrivate.get(url).then((res) => setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  }, [email]);
  return (
    <section className="max-w-screen-xl flex justify-center mx-auto">
      <div className="overflow-x-scroll w-80 md:w-full lg:w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Numbers</th>
              <th>Suplier</th>
              <th>remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <MyProductRow key={product._id} product={product}></MyProductRow>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>Product</th>
              <th>Numbers</th>
              <th>Suplier</th>
              <th>Remove</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default MyProduct;
