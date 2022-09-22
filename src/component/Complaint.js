import React from "react";

const Complaint = () => {
  return (
    <div className="my-5">
      <div className="mx-3 mb-3 flex justify-end ">
        <label for="my-modal-3" className="btn modal-button ">
          Post a Complaint?
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Complaint about your problem!</h3>
            <input
              className="input input-bordered input-accent w-full h-40 max-w-lg my-3"
              placeholder="Enter Your Complaint...."
            />
            <div class="modal-action">
              <label
                htmlFor="my-modal-3"
                className="btn btn-accent w-full"
                type="submit"
              >
                Post
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mx-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Complaint</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s
              </td>
              <td>pending</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s
              </td>
              <td>pending</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s
              </td>
              <td>pending</td>

              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s
              </td>
              <td>pending</td>

              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaint;
