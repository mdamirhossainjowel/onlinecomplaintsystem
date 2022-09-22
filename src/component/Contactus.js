import React from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

const Contactus = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    emailjs
      .send("service_hrt9not", "template_0ab1t78", data, "u9d7uDXou0oXGPBZo")
      .then(
        function (response) {
          alert("SUCCESS!", response.status, response.text);
        },
        function (err) {
          alert("FAILED...", err);
        }
      );
    reset();
  };
  return (
    <div className="">
      <h1 className="font-serif text-4xl text-center mt-5">
        <span className="bg-orange-400">Contact </span>With Us!
      </h1>
      <div className="lg:mx-10 lg:mt-12">
        <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
          
          <div className="card-body flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input input-bordered input-accent w-full max-w-lg mb-3"
                placeholder="Full Name"
                {...register("from_name")}
              />

              <input
                className="input input-bordered input-accent w-full max-w-lg mb-3"
                placeholder="Email"
                {...register("from_email")}
              />

              <textarea
                className="input input-bordered input-accent h-32 w-full max-w-lg mb-3"
                placeholder="Message"
                {...register("message")}
              />

              <input
                className="btn btn-accent w-full max-w-lg"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
