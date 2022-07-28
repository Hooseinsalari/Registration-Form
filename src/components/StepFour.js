import React from "react";

const StepFour = ({ prevStep, data, setData, errors, touched, setTouched }) => {
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  return (
    <div className="animate-step origin-top">
      <div className="my-12 relative">
        <label htmlFor="password" className="block font-medium ml-1">
          Pssword
        </label>
        <input
          type="password"
          id="password"
          className={`${
            errors.password ? "focus:border-red-700" : "focus:border-blue-700"
          } shadow-md block w-full p-3 rounded-md border-2 focus:border-1 outline-none`}
          name="password"
          value={data.password}
          onChange={inputHandler}
          onFocus={focusHandler}
        />
        {errors.password && touched.password && (
          <span className="absolute mt-1.5 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">
            {errors.password}
          </span>
        )}
      </div>
      <div className="my-12 relative">
        <label htmlFor="confirmpassword" className="block font-medium ml-1">
          Confirm Pssword
        </label>
        <input
          type="password"
          id="confirmPassword"
          className={`${
            errors.confirmPassword
              ? "focus:border-red-700"
              : "focus:border-blue-700"
          } shadow-md block w-full p-3 rounded-md border-2 focus:border-1 outline-none`}
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={inputHandler}
          onFocus={focusHandler}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <span className="absolute mt-1.5 bg-red-200 text-red-900 font-semibold rounded-lg py-1 px-2 text-sm">
            {errors.confirmPassword}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          href="#"
          className="w-full text-center mr-2 bg-blue-700 text-white px-6 py-2 rounded-sm mb-2 mt-4 inline-block hover:shadow-btn ease-in-out duration-300"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          href="#"
          className="w-full text-center ml-2 bg-blue-700 text-white px-6 py-2 rounded-sm mb-2 mt-4 inline-block hover:shadow-btn ease-in-out duration-300"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepFour;
