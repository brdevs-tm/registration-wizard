import React, { Fragment, useState } from "react";
import "./index.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Step1 = ({ setStep }) => {
  // State for username, password, and confirm password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords are not the same");
      return;
    }
    setStep(2);
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="main-content flex flex-col bg-slate-50 px-14 py-10 gap-y-10 ">
            <h1 className="text-start font-semibold text-3xl">
              User Registration Wizard - Step 1
            </h1>
            <form className="flex flex-col gap-y-3">
              <div className="first-input flex flex-col gap-y-2">
                <label htmlFor="username">UserName:</label>
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="second-input flex flex-col gap-y-2">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <Input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button value={"Next"} onClick={handleNext} />
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Step1;
