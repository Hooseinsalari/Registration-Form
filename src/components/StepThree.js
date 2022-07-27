import React from "react";

const StepThree = ({
  nextStep,
  prevStep,
  data,
  setData,
  errors,
  touched,
  setTouched,
}) => {
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  return (
    <div className="animate-step origin-top">
      <div className="my-12 relative">
        <label htmlFor="dob" className="block font-medium ml-1">
          Day Of Birthday
        </label>
        <input
          type="date"
          id="dob"
          className={`${
            errors.dob ? "focus:border-red-700" : "focus:border-blue-700"
          } shadow-md block w-full p-3 rounded-md border-2 focus:border-1 outline-none`}
          name="dob"
          value={data.dob}
          onChange={inputHandler}
          onFocus={focusHandler}
        />
        {errors.dob && touched.dob && (
          <span className="absolute mt-1.5 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">
            {errors.dob}
          </span>
        )}
      </div>
      <div className="my-12 relative">
        <label htmlFor="id" className="block font-medium ml-1">
          National ID
        </label>
        <input
          type="text"
          id="id"
          className={`${
            errors.id ? "focus:border-red-700" : "focus:border-blue-700"
          } shadow-md block w-full p-3 rounded-md border-2 focus:border-1 outline-none`}
          name="id"
          value={data.id}
          onChange={inputHandler}
          onFocus={focusHandler}
        />
        {errors.id && touched.id && (
          <span className="absolute mt-1.5 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">
            {errors.id}
          </span>
        )}
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
