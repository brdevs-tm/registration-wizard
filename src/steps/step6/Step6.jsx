import React, { Fragment, useState } from "react";
import "./index.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";

const Step6 = ({
  setStep,
  username,
  password,
  consent,
  firstName,
  lastName,
  middleName,
  birthDate,
  email,
  gender,
  isOlderThan18,
  cardNumber,
  subscription,
  confirmPassword,
  agree,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePrevious = () => {
    setStep(5);
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          <div className="main-content flex flex-col bg-slate-50 px-14 py-10 gap-y-10 ">
            <h1 className="text-start font-semibold text-3xl">
              User Registration Wizard - Step 6
            </h1>
            <span>Review your information</span>
            <div className="information flex flex-col gap-y-3">
              {/* Display user information */}
              <div className="login flex  gap-x-2">
                <h1>Login:</h1>
                <span>{username}</span>
              </div>
              <div className="password flex  gap-x-2">
                <h1>Password:</h1>
                <span>{password}</span>
              </div>
              <div className="conf-password flex  gap-x-2">
                <h1>Confirm Password:</h1>
                <span>{confirmPassword}</span>
              </div>
              <div className="subscribe flex  gap-x-2">
                <h1>Subscription:</h1>
                <span>{subscription}</span>
              </div>
              <div className="fname flex gap-x-2">
                <h1>First Name:</h1>
                <span>{firstName}</span>
              </div>
              <div className="lname flex gap-x-2">
                <h1>Last Name:</h1>
                <span>{lastName}</span>
              </div>
              <div className="mname flex gap-x-2">
                <h1>Middle Name:</h1>
                <span>{middleName}</span>
              </div>
              <div className="bdate flex gap-x-2">
                <h1>Birth Date:</h1>
                <span>{birthDate}</span>
              </div>
              <div className="email flex gap-x-2">
                <h1>Email:</h1>
                <span>{email}</span>
              </div>
              <div className="gender flex gap-x-2">
                <h1>Gender:</h1>
                <span>{gender}</span>
              </div>
              <div className="age flex gap-x-2">
                <h1>Are you older than 18?</h1>
                <span>{isOlderThan18}</span>
              </div>
              <div className="card-num flex gap-x-2">
                <h1>Card number:</h1>
                <span>{cardNumber}</span>
              </div>
              <div className="consent-data flex gap-x-2">
                <h1>Consent to personal data processing:</h1>
                <span>{consent}</span>
              </div>
              <div className="agree-data flex gap-x-2">
                <h1>Site uses cookie agreement:</h1>
                <span>{agree}</span>
              </div>
            </div>

            <div className="buttons flex gap-x-2">
              <Button onClick={handlePrevious} value="Previous" />
              <Button onClick={handleSubmit} value="Submit" />
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalVisible && (
        <Modal>
          <h1>Your all information has been saved</h1>
          <div className="buttons flex gap-x-2">
            <Button onClick={handleCloseModal} value="Close" />
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default Step6;
