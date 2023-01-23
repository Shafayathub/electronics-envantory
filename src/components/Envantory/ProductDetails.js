import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productID]);

  return (
    <div className="p-5 min-h-screen">
      <div className="card w-80 lg:w-96 glass mx-auto">
        <figure>
          <img src={product.picture} alt={product.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h3 className="card-title">Price: ${product.price}</h3>
          <h4>Quantity: {product.quantity}</h4>

          <p>{product.about}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">
              Suplier: {product.suplierName}
            </div>
            <div className="badge badge-outline">Electonic Goods</div>
          </div>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Update</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
