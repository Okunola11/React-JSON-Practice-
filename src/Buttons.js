import React from "react";

const Buttons = ({ buttonText, request, setRequest }) => {
  return (
    <button
      className={buttonText === request ? "selected" : "null"}
      onClick={() => setRequest(buttonText)}
      type="button"
    >
      {buttonText}
    </button>
  );
};

export default Buttons;
