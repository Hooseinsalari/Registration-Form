import React from "react";

const StepOne = ({ nextStep, data, setData }) => {

  const inputHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

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
          name="username"
          value={data.username}
          onChange={inputHandler}
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
          name="position"
          value={data.position}
          onChange={inputHandler}
        />
      </div>

      <div className="text-right">
        <button
          href="#"
          className="w-1/2 text-center bg-blue-700 text-white px-6 py-2 rounded-sm my-5 inline-block hover:shadow-md delay-100"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
