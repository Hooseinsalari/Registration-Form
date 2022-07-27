import React, { useEffect, useState } from "react";

const ProgressBar = ({ step }) => {
  const [progressNum, setProgressNum] = useState("0");

  useEffect(() => {
    const progressLength = () => {
      if (step === 1) {
        setProgressNum("0");
      } else if (step === 2) {
        setProgressNum("1/3");
      } else if (step === 3) {
        setProgressNum("2/3");
      } else if (step === 4) {
        setProgressNum("11/12");
      }
    };

    progressLength();
  }, [step]);

  return (
    <div className="relative flex items-center justify-between mb-10 mt-8 before:w-11/12 before:h-1 before:bg-gray-300 before:absolute before:top-1/2">
      <div
        className={`absolute bg-blue-700 w-${progressNum} h-1 top-1/2 ease-in-out duration-500`}
      ></div>

      <div
        className={`${
          step >= 1 ? "bg-blue-700 text-white" : "bg-gray-300"
        } relative w-10 h-10 rounded-full flex items-center justify-center`}
      >
        <span className="text-xl font-semibold">1</span>
        <span className="absolute top-11 text-gray-500 text-sm">Intro</span>
      </div>
      <div
        className={`${
          step >= 2 ? "bg-blue-700 text-white" : "bg-gray-300"
        } ease-in-out duration-500 relative w-10 h-10 rounded-full flex items-center justify-center`}
      >
        <span className="text-xl font-semibold">2</span>
        <span className="absolute top-11 text-gray-500 text-sm">Contact</span>
      </div>
      <div
        className={`${
          step >= 3 ? "bg-blue-700 text-white" : "bg-gray-300"
        } ease-in-out duration-500 relative w-10 h-10 rounded-full flex items-center justify-center`}
      >
        <span className="text-xl font-semibold">3</span>
        <span className="absolute top-11 text-gray-500 text-sm">ID</span>
      </div>
      <div
        className={`${
          step >= 4 ? "bg-blue-700 text-white" : "bg-gray-300"
        } ease-in-out duration-500 relative w-10 h-10 rounded-full flex items-center justify-center`}
      >
        <span className="text-xl font-semibold">4</span>
        <span className="absolute top-11 text-gray-500 text-sm">Password</span>
      </div>
    </div>
  );
};

export default ProgressBar;
