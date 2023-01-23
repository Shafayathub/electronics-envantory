import React from 'react';

const ManageItemTableRow = ({ product }) => {
  const { _id, picture, name, price, quantity, suplierName } = product;
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
        <button className="btn btn-ghost btn-xs text-red-600">X</button>
      </th>
    </tr>
  );
};

export default ManageItemTableRow;
