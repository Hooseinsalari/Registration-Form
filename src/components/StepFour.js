import React from "react";

const StepFour = ({prevStep, data, setData}) => {

  const inputHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <div className="animate-step origin-top">
      <div className="my-6">
        <label htmlFor="password" className="block font-medium ml-1">
          Pssword
        </label>
        <input
          type="password"
          id="password"
          className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
          name="password"
          value={data.password}
          onChange={inputHandler}
        />
      </div>
      <div className="my-6">
        <label htmlFor="confirmpassword" className="block font-medium ml-1">
          Confirm Pssword
        </label>
        <input
          type="password"
          id="confirmpassword"
          className="block w-full p-3 rounded-md border focus:border-blue-700 outline-none transition"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={inputHandler}
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
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepFour;
