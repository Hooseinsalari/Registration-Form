import React from "react";

const StepThree = ({nextStep, prevStep}) => {
  return (
    <div className="animate-step origin-top">
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

export default StepThree;
