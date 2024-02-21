import React, { Fragment, useState } from "react";
import "./index.css";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import visaCard from "../../assets/img/visa.svg";
import masterCard from "../../assets/img/mastercard.svg";
import paypal from "../../assets/img/paypal.svg";
import sberbank from "../../assets/img/sberbank.svg";
import unionPay from "../../assets/img/union-pay.svg";

const Step4 = ({ setStep, setCardNumber }) => {
  const [cardNumber, setCardNumberState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumber.match(cardNumberRegex)) {
      setErrorMessage("Please enter a valid 16-digit card number");
      return;
    }

    setCardNumber(cardNumber);
    setErrorMessage("");
    setStep(5);
  };

  const handlePrevious = () => {
    setStep(3);
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\s/g, "");
    setCardNumberState(input);
    setErrorMessage("");
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="main-content shadow-slate-800 flex flex-col bg-slate-50 px-14 py-10 gap-y-10">
            <h1 className="text-start font-semibold text-3xl">
              User Registration Wizard - Step 4
            </h1>
            <form className="flex flex-col gap-y-3">
              <div className="card-number flex flex-col gap-y-2">
                <label htmlFor="cardNumber">Card Number:</label>
                <Input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
              </div>
              <div className="phone flex gap-x-4">
                <img
                  src={visaCard}
                  alt="visaCard"
                  width={80}
                  className="bg-transparent"
                />
                <img
                  src={masterCard}
                  alt="masterCard"
                  width={80}
                  className="bg-transparent"
                />
                <img
                  src={sberbank}
                  alt="sberbank"
                  width={80}
                  className="bg-transparent"
                />
                <img
                  src={paypal}
                  alt="paypal"
                  width={80}
                  className="bg-transparent"
                />
                <img
                  src={unionPay}
                  alt="unionPay"
                  width={80}
                  className="bg-transparent"
                />
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

export default Step4;
