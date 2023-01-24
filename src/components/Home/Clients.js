import React from 'react';

const Clients = () => {
  return (
    <section className="p-5">
      <h3 className="text-center text-5xl font-bold mb-3">Top Clients</h3>
      <div className="overflow-x-scroll w-80 md:w-full lg:w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Contact</th>
              <th>Business</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/K9dVbKs/image-processing20210613-2832-x5fecm.png"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Laptop</td>
              <th>
                <label htmlFor="my-modal-3" className="btn">
                  Details
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2">
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">Email: client@ee.com</h3>
                    <p className="py-4">Mobile: +1665965959</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/K9dVbKs/image-processing20210613-2832-x5fecm.png"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Electrical Appliance Factory
                </span>
              </td>
              <td>Microchip</td>
              <th>
                <label htmlFor="my-modal-3" className="btn">
                  Details
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2">
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">Email: client@ee.com</h3>
                    <p className="py-4">Mobile: +1665965959</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/K9dVbKs/image-processing20210613-2832-x5fecm.png"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Security Agency
                </span>
              </td>
              <td>Drones</td>
              <th>
                <label htmlFor="my-modal-3" className="btn">
                  Details
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2">
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">Email: client@ee.com</h3>
                    <p className="py-4">Mobile: +1665965959</p>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/K9dVbKs/image-processing20210613-2832-x5fecm.png"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>VR</td>
              <th>
                <label htmlFor="my-modal-3" className="btn">
                  Details
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2">
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">Email: client@ee.com</h3>
                    <p className="py-4">Mobile: +1665965959</p>
                  </div>
                </div>
              </th>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Contact</th>
              <th>Business</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Clients;
