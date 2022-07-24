import React from "react";

const StepTwo = ({nextStep, prevStep}) => {
  return (
    <div className="animate-step origin-top">
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
        <button
          href="#"
          className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          href="#"
          className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
