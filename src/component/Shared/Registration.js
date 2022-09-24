import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Registration = () => {
  const { register, handleSubmit ,refetch } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [ signInWithGoogle,userGoogle] = useSignInWithGoogle(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user || userGoogle) {
    navigate("/");
  }

  const onSubmit = async (data) => {
   
    if (data.Password === data.Confirm_Password) {
      await createUserWithEmailAndPassword(data.Email, data.Confirm_Password);
      await updateProfile({ displayName: data.Name });
      fetch(`http://localhost:5000/users`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
        refetch();

    } else {
      alert("Both Password Should Be Same");
    }
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto my-2">
      <figure className="lg:order-last lg:w-1/2">
        <img src="https://placeimg.com/260/400/arch" alt="Album" />
      </figure>
      <div className="card-body lg:w-1/2 lg:order-first">
        <h2 className="text-2xl font-bold text-accent text-center mb-4">
          REGISTRATION
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Full Name"
            {...register("Name", { required: true })}
          />

          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Email"
            {...register("Email", { required: true })}
          />
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Address"
            {...register("Address", { required: true })}
          />

          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder=" Password"
            type="password"
            {...register("Password", { required: true })}
          />

          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Confirm Password"
            type="password"
            {...register("Confirm_Password", { required: true })}
          />

          <input className="btn btn-accent w-full" type="submit" />
        </form>
        <Link to="/login" className="underline text-accent">
          Already Have Account? Please Login
        </Link>

        <div className="divider">OR</div>
        <div className="card-actions justify-center">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-accent w-full max-w-lg "
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
