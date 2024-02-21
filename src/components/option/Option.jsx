import React from "react";
import "./option.css";

const Option = ({ setSubscription }) => {
  const handleSubscriptionChange = (e) => {
    setSubscription(e.target.value);
  };

  return (
    <div>
      <label htmlFor="select-subs">Select any subscription:</label>
      <select
        name="select-subs"
        id="select-subs"
        className="py-5 px-10 rounded-md"
        onChange={handleSubscriptionChange}
      >
        <optgroup label="Select any subscription">
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Option;
