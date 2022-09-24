import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [signInWithGoogle,userGoogle,] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user || userGoogle) {
    return navigate("/");
  }
  if (loading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.Email, data.Password);
    navigate("/");
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-6 lg:w-2/3 lg:mx-auto my-14">
      <figure className=" lg:w-1/2">
        <img src="https://placeimg.com/260/400/arch" alt="Album" />
      </figure>
      <div className="card-body lg:w-1/2">
        <h2 className="text-2xl font-bold text-accent text-center mb-4">
          LOGIN
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Enter Your Email"
            {...register("Email", { required: true })}
          />

          <input
            className="input input-bordered input-accent w-full max-w-lg mb-3"
            placeholder="Enter Your Password"
            type="password"
            {...register("Password", { required: true })}
          />

          <label className="flex justify-start mb-3">
            <div>
              <Link to="/" className="underline text-accent">
                Forgot Password?
              </Link>
            </div>
          </label>

          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Login"
          />
        </form>
        <Link to="/registration" className="underline text-accent">
          New to Online Complaint? Create Account.
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

export default Login;
