import React, { useEffect, useState } from 'react';

const ManageItemTableRow = ({ product }) => {
  const { _id, picture, name, price, quantity, suplierName } = product;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleRemove = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
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
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <h6 className="font-bold">{name}</h6>
            <div className="text-sm opacity-50">Electronic Envantory</div>
          </div>
        </div>
      </td>
      <td>
        Price: ${price}
        <br />
        <span className="badge badge-ghost badge-sm">Quantity:{quantity}</span>
      </td>
      <td>{suplierName}</td>
      <th>
        <button
          onClick={() => handleRemove(_id)}
          className="btn btn-ghost btn-xs text-red-600">
          X
        </button>
      </th>
    </tr>
  );
};

export default ManageItemTableRow;
