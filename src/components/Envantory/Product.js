import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, picture, name, price, quantity, suplierName, about } = product;
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div className="card w-80 lg:w-96 glass mx-auto">
        <figure>
          <img src={picture} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h3 className="card-title">Price: ${price}</h3>
          <h4>Quantity: {quantity}</h4>

          <p>{about}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">Suplier: {suplierName}</div>
            <div className="badge badge-outline">Electonic Goods</div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleUpdate(_id)}
              className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
