import React, { useState } from "react";



const Form = () => {

    const [step, setStep] = useState(1);

  return (
    <div>
      <form className="shadow-xl p-3 rounded-md w-96 border-2 border-gray-300">
        <h1 className="text-3xl font-semibold text-neutral-700 my-3 text-center">
          Registration Form
        </h1>
        
        {/* step one */}
        <div className="">
          <div className="my-6">
            <label htmlFor="username" className="block font-medium ml-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
            />
          </div>
          <div className="my-6">
            <label htmlFor="position" className="block font-medium ml-1">
              Position
            </label>
            <input
              type="text"
              id="position"
              className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
            />
          </div>

          <div className="w-1/2">
            <a
              href="#"
              className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
            >
              Next
            </a>
          </div>
        </div>

        {/* step two */}
        <div className="hidden">
          <div className="my-6">
            <label htmlFor="phone" className="block font-medium ml-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
            />
          </div>
          <div className="my-6">
            <label htmlFor="email" className="block font-medium ml-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
            >
              Previous
            </a>
            <a
              href="#"
              className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
            >
              Next
            </a>
          </div>
        </div>

        {/* step three */}
        <div className="hidden">
          <div className="my-6">
            <label htmlFor="dob" className="block font-medium ml-1">
              Day Of Birthday
            </label>
            <input
              type="date"
              id="dob"
              className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
            />
          </div>
          <div className="my-6">
            <label htmlFor="id" className="block font-medium ml-1">
              National ID
            </label>
            <input
              type="text"
              id="id"
              className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
            >
              Previous
            </a>
            <a
              href="#"
              className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
            >
              Next
            </a>
          </div>
        </div>

        {/* step four */}
        <div className="hidden">
          <div className="my-6">
            <label htmlFor="password" className="block font-medium ml-1">
              Pssword
            </label>
            <input
              type="text"
              id="password"
              className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
            />
          </div>
          <div className="my-6">
            <label htmlFor="confirmpassword" className="block font-medium ml-1">
              Confirm Pssword
            </label>
            <input
              type="text"
              id="confirmpassword"
              className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
            >
              Previous
            </a>
            <a
              href="#"
              className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
            >
              Submit
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
