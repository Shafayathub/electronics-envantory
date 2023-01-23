import React from 'react';

const Product = ({ product }) => {
  const { picture, name, price, quantity, suplierName, about } = product;
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
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
