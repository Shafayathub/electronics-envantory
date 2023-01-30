import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../firebase/firebase.config';

const MyProductDetails = () => {
  const { myProductID } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://server-electronic-envantory.onrender.com/myProduct/${myProductID}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [myProductID]);
  const [user] = useAuthState(auth);
  const email = user.email;
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://server-electronic-envantory.onrender.com/myProduct?email=${email}`;
    try {
      axiosPrivate.get(url).then((res) => setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  }, [email]);
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://server-electronic-envantory.onrender.com/myProduct/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
    navigate('/MyProduct');
  };
  return (
    <div className="p-5 min-h-screen">
      <div className="card w-80 lg:w-96 glass mx-auto">
        <figure>
          <img src={product?.picture} alt={product?.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product?.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h3 className="card-title">Price: ${product?.price}</h3>
          <h4>Quantity: {product?.quantity}</h4>

          <p>{product?.about}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">
              Suplier: {product?.suplierName}
            </div>
            <div className="badge badge-outline">Electonic Goods</div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(product._id)}
              className="btn btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductDetails;
