import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import StepFour from "./StepFour";

// steps
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const Form = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    username: '',
    position: '',
    phone: '',
    email: '',
    dob: '',
    id: '',
    password: '',
    confirmPassword: ''
  })

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const prevStep = () => {
    setStep((prevState) => prevState - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <StepOne nextStep={nextStep} data={data} setData={setData} />
          </>
        );
      case 2:
        return (
          <>
            <StepTwo nextStep={nextStep} prevStep={prevStep} data={data} setData={setData} />
          </>
        );
      case 3:
        return (
          <>
            <StepThree nextStep={nextStep} prevStep={prevStep} data={data} setData={setData} />
          </>
        );
      case 4:
        return (
          <>
            <StepFour nextStep={nextStep} prevStep={prevStep} data={data} setData={setData} />
          </>
        );
      default:
        return (
          <>
            <StepOne nextStep={nextStep} />
          </>
        );
    }
  };

  return (
    <div>
      <form className="shadow-xl py-3 px-8 rounded-md w-[430px] m-auto border-2 border-gray-300">
        <h1 className="text-3xl font-semibold text-neutral-700 my-3 text-center">
          Registration Form
        </h1>

        <ProgressBar step={step} />

        {renderStep()}
      </form>
    </div>
  );
};

export default Form;