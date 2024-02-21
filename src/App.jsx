import React, { Fragment, useState } from "react";
import Step1 from "./steps/step1/Step1";
import Step2 from "./steps/step2/Step2";
import Step3 from "./steps/step3/Step3";
import Step4 from "./steps/step4/Step4";
import Step5 from "./steps/step5/Step5";
import Step6 from "./steps/step6/Step6";

const App = () => {
  const [step, setStep] = useState(1);

  const handleStepChange = (nextStep) => {
    setStep(nextStep);
  };

  return (
    <Fragment>
      {step === 1 && <Step1 setStep={handleStepChange} />}
      {step === 2 && <Step2 setStep={handleStepChange} />}
      {step === 3 && <Step3 setStep={handleStepChange} />}
      {step === 4 && <Step4 setStep={handleStepChange} />}
      {step === 5 && <Step5 setStep={handleStepChange} />}
      {step === 6 && <Step6 setStep={handleStepChange} />}
    </Fragment>
  );
};

export default App;
