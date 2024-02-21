import React, { Fragment, useState } from "react";
import "./index.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Step3 = ({
  setStep,
  setFirstName: setFirstNameState,
  setLastName: setLastNameState,
  setMiddleName: setMiddleNameState,
  setBirthDate: setBirthDateState,
}) => {
  // State variables for input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  // Function to handle next button click
  const handleNext = (e) => {
    e.preventDefault();
    // Validation to ensure all fields are filled
    if (!firstName || !lastName || !middleName || !birthDate) {
      alert("Please fill in all fields");
      return;
    }
    // Proceed to the next step and set state variables
    setStep(4);
    setFirstNameState(firstName);
    setLastNameState(lastName);
    setMiddleNameState(middleName);
    setBirthDateState(birthDate);
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    setStep(2);
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="main-content flex flex-col bg-slate-50 px-14 py-10 gap-y-10">
            <h1 className="text-start font-semibold text-3xl">
              User Registration Wizard - Step 3
            </h1>
            <form className="flex flex-col gap-y-3">
              {/* Input field for first name */}
              <div className="firstname flex flex-col gap-y-2">
                <label htmlFor="firstName">First Name:</label>
                <Input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              {/* Input field for last name */}
              <div className="lastname flex flex-col gap-y-2">
                <label htmlFor="lastName">Last Name:</label>
                <Input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              {/* Input field for middle name */}
              <div className="middlename flex flex-col gap-y-2">
                <label htmlFor="middleName">Middle Name:</label>
                <Input
                  type="text"
                  id="middleName"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
              {/* Input field for birth date */}
              <div className="birthdate flex flex-col gap-y-2">
                <label htmlFor="birthDate">Birth Date:</label>
                <Input
                  type="date"
                  id="birthDate"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              {/* Buttons for navigation */}
              <div className="buttons flex gap-x-2">
                <Button onClick={handlePrevious} value="Previous" />
                <Button onClick={handleNext} value="Next" />
              </div>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Step3;
