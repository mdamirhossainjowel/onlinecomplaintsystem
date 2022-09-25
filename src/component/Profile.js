import React from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (!user) {
    return  navigate("/login");
  }
  if (updating) {
    return <p>Updating...</p>;
  }
  const onSubmit = async (data) => {
 
    await updateProfile({
      displayName: data.displayName,
      photoURL: data.photoURL,
    });
    alert('Updated profile');
  };
  return (
    <div className="card bg-base-100 shadow-xl lg:w-1/2 mx-auto my-8">
      <div className="avatar justify-center p-5">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user.photoURL} alt="user" />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {user.displayName} </h2>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Email: {user.email}</h2>
      </div>
      <div className="card-actions justify-center mb-5">
        <label htmlFor="my-modal-5" className="btn btn-accent">
          Update Profile
        </label>
      </div>
      {/* <label  className="btn modal-button">open modal</label> */}
      <div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal lg:w-1/2 mx-auto">
          <div className="modal-box w-11/12 max-w-5xl">
            <label
              htmlFor="my-modal-5"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form>
              <input
                className="input input-bordered input-accent w-full max-w-lg mb-3 mt-5"
                placeholder="Enter Name"
                {...register("displayName", { required: true })}
              />

              <input
                className="input input-bordered input-accent w-full max-w-lg mb-3"
                placeholder="Image URl"
                {...register("photoURL", { required: true })}
              />

              <br />
              <div className="modal-action justify-center">
                <label
                  htmlFor="my-modal-5"
                  className=" btn btn-accent"
                  disabled={!isValid}
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Update Profile
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
