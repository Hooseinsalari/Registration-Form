import React from "react";

const StepOne = ({ nextStep, data, setData, errors, touched, setTouched }) => {
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  return (
    <div className="animate-step origin-top">
      <div className="my-12 relative">
        <label htmlFor="username" className="block font-medium ml-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          className={`${
            errors.username ? "focus:border-red-700" : "focus:border-blue-700"
          } shadow-md block w-full p-3 rounded-md border-2 focus:border-1 outline-none`}
          name="username"
          value={data.username}
          onChange={inputHandler}
          onFocus={focusHandler}
        />
        {touched.username && errors.username && (
          <span className="absolute mt-2 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">
            {errors.username}
          </span>
        )}
      </div>
      <div className="my-12 relative">
        <label htmlFor="position" className="block font-medium ml-1">
          Position
        </label>
        <input
          type="text"
          id="position"
          className={`${
            errors.position ? "focus:border-red-700" : "focus:border-blue-700"
          } shadow-md block w-full p-3 rounded-md border-2 focus:border-1 outline-none`}
          name="position"
          value={data.position}
          onChange={inputHandler}
          onFocus={focusHandler}
        />
        {touched.position && errors.position && (
          <span className="absolute mt-2 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">
            {errors.position}
          </span>
        )}
      </div>

      <div className="text-right">
        <button
          href="#"
          className="w-1/2 hover:shadow-btn text-center bg-blue-700 text-white px-6 py-2 rounded-sm mb-2 mt-4 inline-block ease-in-out duration-300"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
