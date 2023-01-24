import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const { quantity } = product;
  useEffect(() => {
    fetch(
      `https://server-electronic-envantory.onrender.com/product/${productID}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productID, quantity]);

  const handleDelivered = (product) => {
    const newQuantity = product.quantity - 1;
    const delivered = { ...product, quantity: newQuantity };
    const id = product._id;
    const url = `https://server-electronic-envantory.onrender.com/product/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(delivered),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        toast('Delivered successfully');
      });
    setProduct(delivered);
  };
  const increaseStock = (event) => {
    event.preventDefault();
    const number = event.target.quantity.value;
    const newQuantity = product.quantity + parseInt(number);
    const updatedStock = { ...product, quantity: newQuantity };
    const id = product._id;
    const url = `https://server-electronic-envantory.onrender.com/product/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedStock),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        toast('Updated successfully');
      });
    setProduct(updatedStock);
    event.target.reset();
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
              onClick={() => handleDelivered(product)}
              className="btn btn-primary">
              Delivered
            </button>
          </div>
        </div>
      </div>
      <section className="mt-3 flex flex-col md:flex-row gap-3 justify-center items-center">
        <h5>Increase Quantity</h5>
        <form onSubmit={increaseStock} className="form-control">
          <div className="input-group">
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              className="input input-bordered"
            />
            <button className="btn btn-square">add</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProductDetails;
