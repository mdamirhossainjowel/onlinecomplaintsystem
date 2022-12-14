import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import emailjs from "@emailjs/browser";
import { useQuery } from "react-query";

const Complaint = () => {
  const [user] = useAuthState(auth);
  const [complaint, setComplaint] = useState("");
  const [detailsdata, setdetailsdata] = useState("");
  const [suggestion, setSuggestion] = useState("");
  let detailsId;
  const fetchcomplaintList = async () => {
    const res = await fetch("https://onlinecomplaintsystem.herokuapp.com/complaints");
    return res.json();
  };

  const { data, refetch } = useQuery("fetchcomplaintList", fetchcomplaintList);
  const {
    formState: { isValid },
  } = useForm();
  const handleChange = (e) => {
    setComplaint(e.target.value);
  };
  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSuggestion = (id) => {
    if (!user) {
      alert("You need to login first.");
    }
    const suggestionUpdate = {
      suggestion: suggestion
    };
    fetch(`https://onlinecomplaintsystem.herokuapp.com/complaints/${id}`, {
      method: "PUT",
      body: JSON.stringify(suggestionUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    refetch();
  };
  const handleSubmit = () => {
    if (!user) {
      alert("You need to login first.");
    }
    const complaintdata = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      status: "Pending",
      complaint: complaint,
    };
    fetch(`https://onlinecomplaintsystem.herokuapp.com/complaints`, {
      method: "POST",
      body: JSON.stringify(complaintdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    const emaildata = {
      from_name: user.displayName,
      from_email: user.email,
      message: complaint,
    };
    emailjs
    .send("service_hrt9not", "template_m064o3i", emaildata, "u9d7uDXou0oXGPBZo")
    refetch();
  };

  return (
    <div className="my-5 min-h-screen">
      <div className="mx-3 mb-3 flex justify-end ">
        <label htmlFor="my-modal-3" className="btn modal-button ">
          Post a Complaint?
        </label>
        <div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ???
              </label>
              <h3 className="text-lg font-bold">
                Complaint about your problem!
              </h3>
              <div className="modal-close justify-center my-8">
                <input
                  className="input input-bordered input-accent w-full h-40 max-w-lg mb-3"
                  placeholder="Enter Your Complaint...."
                  onChange={handleChange}
                />
                <label
                  htmlFor="my-modal-3"
                  className=" btn btn-accent"
                  disabled={!isValid}
                  type="submit"
                  onClick={() => handleSubmit()}
                >
                  Post
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mx-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Complaint</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((complaints, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={complaints?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{complaints?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{complaints?.complaint.slice(0, 80)}...</td>
                <td>{complaints?.status}</td>
                <th>
                  <label
                    htmlFor="my-modal-4"
                    className="btn btn-ghost btn-xs modal-button"
                    onClick={() => {
                      detailsId = complaints?._id;
                      setdetailsdata(
                        data.find((details) => details._id === detailsId)
                      );
                    }}
                  >
                    details
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />

        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-4"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ???
            </label>

            <h3 className="text-lg font-bold">
              Complaint by {detailsdata?.name}
            </h3>
            <div className="flex items-center space-x-3 my-4">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={detailsdata?.photo}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{detailsdata?.name}</div>
              </div>
            </div>
            <div>{detailsdata?.complaint}</div>
            <div>
              Progress :
              {detailsdata.status === "Pending" ? (
                <progress
                  className="progress progress-success w-56"
                  value="40"
                  max="100"
                ></progress>
              ) : (
                <progress
                  className="progress progress-success w-56"
                  value="80"
                  max="100"
                ></progress>
              )}
            </div>
            <label htmlFor="my-modal-7" className="btn modal-button ">
              Any Suggestion?
            </label>
            <div>
              <input type="checkbox" id="my-modal-7" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-7"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ???
                  </label>
                  <h3 className="text-lg font-bold">
                    Give Your Suggestion...
                  </h3>
                  <div className="modal-close justify-center my-2">
                    <input
                      className="input input-bordered input-accent w-full h-32 max-w-lg mb-3"
                      placeholder="Suggestion....."
                      onChange={handleSuggestionChange}
                      />
                      <label
                        htmlFor="my-modal-7"
                        className=" btn btn-accent"
                        disabled={!isValid}
                        type="submit"
                        onClick={() => handleSuggestion(detailsdata._id)}
                      >
                      Suggestion
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
