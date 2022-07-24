import React from "react";

const StepOne = ({ nextStep }) => {
  return (
    <div className="animate-step origin-top">
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

export default StepOne;
