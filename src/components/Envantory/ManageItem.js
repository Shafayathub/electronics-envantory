import React, { useEffect, useState } from 'react';
import ManageItemTableRow from './ManageItemTableRow';

const ManageItem = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
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
              <ManageItemTableRow
                key={product._id}
                product={product}></ManageItemTableRow>
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
    </div>
  );
};

export default ManageItem;
