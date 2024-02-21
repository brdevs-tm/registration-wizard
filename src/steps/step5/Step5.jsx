import React, { Fragment, useState } from "react";
import "./index.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Step5 = ({ setStep, setPassword, setConsent }) => {
  const [username, setUsername] = useState("");
  const [password, setPasswordState] = useState("");
  const [consent, setConsentState] = useState("agree");

  const handleNext = (e) => {
    e.preventDefault();
    setStep(6);
  };

  const handlePrevious = () => {
    setStep(4);
  };

  const handleConsentChange = (value) => {
    setConsentState(value);
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="main-content flex flex-col bg-slate-50 px-14 py-10 gap-y-10 ">
            <h1 className="text-start font-semibold text-3xl">
              User Registration Wizard - Step 5
            </h1>
            <span>Step 5 - Consent to Personal Data Processing </span>
            <form className="flex flex-col gap-y-3">
              <div className="first-input flex flex-col gap-y-2">
                <label htmlFor="username">Login:</label>
                <Input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="second-input flex flex-col gap-y-2">
                <label htmlFor="password">Password:</label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPasswordState(e.target.value)}
                />
              </div>
              <div className="allowing flex gap-x-3">
                <span>Consent to Personal Data Processing:</span>
                <div className="check-agrees flex flex-col gap-y-3">
                  <div className="agree flex gap-x-3">
                    <Input
                      type="radio"
                      id="agree"
                      name="consent"
                      value="agree"
                      checked={consent === "agree"}
                      onChange={() => handleConsentChange("agree")}
                    />
                    <label htmlFor="agree">
                      <span className="checkmark">
                        I consent to personal data processing Site uses Cookie
                        Agreement
                      </span>
                    </label>
                  </div>
                  <div className="disagree flex gap-x-3">
                    <Input
                      type="radio"
                      id="disagree"
                      name="consent"
                      value="disagree"
                      checked={consent === "disagree"}
                      onChange={() => handleConsentChange("disagree")}
                    />
                    <label htmlFor="disagree">
                      <span className="checkmark">
                        I agree to the site's use of Cookies
                      </span>
                    </label>
                  </div>
                </div>
              </div>
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

export default Step5;
