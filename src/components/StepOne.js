import React from "react";

const StepOne = ({ nextStep, data, setData, errors, touched, setTouched }) => {

  const inputHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const focusHandler = (e) => {
    setTouched({...touched, [e.target.name]: true})
  }

  return (
    <div className="animate-step origin-top">
      <div className="my-12 relative">
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
          onFocus={focusHandler}
        />
        { touched.username && errors.username && <span className="absolute mt-1 ml-1 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">{errors.username}</span>}
      </div>
      <div className="my-12 relative">
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
          onFocus={focusHandler}
        />
        { touched.position && errors.position && <span className="absolute mt-1 ml-1 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">{errors.position}</span>}
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
