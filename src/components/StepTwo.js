import React from "react";

const StepTwo = ({
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
        <label htmlFor="phone" className="block font-medium ml-1">
          Phone
        </label>
        <input
          type="number"
          id="phone"
          className={`${
            errors.phone ? "focus:border-red-700" : "focus:border-blue-700"
          } shadow-md block w-full p-3 rounded-md border-2 focus:border-1 outline-none`}
          name="phone"
          value={data.phone}
          onChange={inputHandler}
          onFocus={focusHandler}
        />
        {errors.phone && touched.phone && (
          <span className="absolute mt-1.5 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">
            {errors.phone}
          </span>
        )}
      </div>
      <div className="my-12 relative">
        <label htmlFor="email" className="block font-medium ml-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`${
            errors.email ? "focus:border-red-700" : "focus:border-blue-700"
          } shadow-md block w-full p-3 rounded-md border-2 focus:border-1 outline-none`}
          name="email"
          value={data.email}
          onChange={inputHandler}
          onFocus={focusHandler}
        />
        {errors.email && touched.email && (
          <span className="absolute mt-1.5 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">
            {errors.email}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          href="#"
          className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm mb-2 mt-4 inline-block hover:shadow-md delay-100"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          href="#"
          className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm mb-2 mt-4 inline-block hover:shadow-md delay-100"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
