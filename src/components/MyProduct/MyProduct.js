import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const MyProduct = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = `https://server-electronic-envantory.onrender.com/myProduct?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [email]);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3>My Product:{product.length}</h3>
    </div>
  );
};

export default MyProduct;
