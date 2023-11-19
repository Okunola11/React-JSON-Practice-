import React from "react";
import Buttons from "./Buttons";

const Form = ({ request, setRequest }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Buttons buttonText={"users"} request={request} setRequest={setRequest} />
      <Buttons buttonText={"posts"} request={request} setRequest={setRequest} />
      <Buttons
        buttonText={"comments"}
        request={request}
        setRequest={setRequest}
      />
    </form>
  );
};

export default Form;
