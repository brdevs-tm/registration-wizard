import React, { Fragment, useState } from "react";
import "./index.css";
import Option from "../../components/option/Option";
import Button from "../../components/button/Button";

const Step2 = ({ setStep, setSubscription }) => {
  // State for selected subscription option
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle next button click
  const handleNext = (e) => {
    e.preventDefault();
    // Validation to ensure a subscription option is selected
    if (!selectedOption) {
      alert("Please select a subscription option");
      return;
    }
    // Move to the next step
    setStep(3);
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    setStep(1);
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="main-content flex flex-col bg-slate-50 px-14 py-10 gap-y-10 ">
            <h1 className="text-start font-semibold text-3xl">
              User Registration Wizard - Step 2
            </h1>
            <div className="selection flex flex-col gap-y-5">
              <Option
                setSubscription={(subscription) => setSelectedOption(subscription)}
              />
              <div className="buttons flex gap-x-2">
                <Button onClick={handlePrevious} value="Previous" />
                <Button onClick={handleNext} value="Next" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Step2;
