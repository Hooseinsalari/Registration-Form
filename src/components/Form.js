import React, { useState } from "react";
import StepFour from "./StepFour";

// steps
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";



const Form = () => {

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prevState) => prevState + 1)
        console.log(step);
    }

    const prevStep = () => {
        setStep((prevState) => prevState - 1)
        console.log(step);
    }

    const renderStep = () => {
        switch(step) {
            case 1: return (
                <>
                    <StepOne nextStep={nextStep} />
                </>
            )
            case 2: return (
                <>
                    <StepTwo nextStep={nextStep} prevStep={prevStep} />
                </>
            )
            case 3: return (
                <>
                    <StepThree nextStep={nextStep} prevStep={prevStep} />
                </>
            )
            case 4: return (
                <>
                    <StepFour nextStep={nextStep} prevStep={prevStep} />
                </>
            )
            default: return (
                <>
                    <StepOne nextStep={nextStep} />
                </>
            )
        }
    }

   return (
    <div>
      <form className="shadow-xl p-3 rounded-md w-96 border-2 border-gray-300">
        
        <h1 className="text-3xl font-semibold text-neutral-700 my-3 text-center">
          Registration Form
        </h1>

        {
            renderStep()
        }

        {/* step one */}
        
      </form>
    </div>
  );
};

export default Form;
