import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import StepFour from "./StepFour";

// steps
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

// validation
import { validate } from "./validate";

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

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data))
    // console.log(errors);
  }, [data])

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
            <StepOne errors={errors} nextStep={nextStep} data={data} setData={setData} touched={touched} setTouched={setTouched} />
          </>
        );
      case 2:
        return (
          <>
            <StepTwo errors={errors} nextStep={nextStep} prevStep={prevStep} data={data} setData={setData} touched={touched} setTouched={setTouched} />
          </>
        );
      case 3:
        return (
          <>
            <StepThree errors={errors} nextStep={nextStep} prevStep={prevStep} data={data} setData={setData} touched={touched} setTouched={setTouched} />
          </>
        );
      case 4:
        return (
          <>
            <StepFour errors={errors} nextStep={nextStep} prevStep={prevStep} data={data} setData={setData} touched={touched} setTouched={setTouched} />
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

        <>
          <ProgressBar step={step} />
        </>

        <>
          {renderStep()}
        </>
      </form>
    </div>
  );
};

export default Form;