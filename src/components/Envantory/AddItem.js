import React from 'react';

const AddItem = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const price = parseFloat(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const suplierName = form.suplierName.value;
    const about = form.about.value;
    const newProduct = { name, picture, price, quantity, suplierName, about };
    const url = 'https://electronic-envantory-server.vercel.app/product';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    event.target.reset();
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card flex-shrink-0 w-80 md:w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddItem} className="card-body">
          <h2 className="card-title">Add Item</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="product name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image link</span>
            </label>
            <input
              type="text"
              name="picture"
              placeholder="product img link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="product price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="product quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Suplier Name</span>
            </label>
            <input
              type="text"
              name="suplierName"
              placeholder="Suplier name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="about"
              placeholder="Short description"
              className="input input-bordered input-lg"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
