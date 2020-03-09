import React from "react";
import Header from "./Header";
import HintText from "./HintText";
import Form from "./form";
import "./ParentPage.css";
const ParentPage = () => {
  return (
    <div className="mother_container">
      <div className="wrapper">
        <Header />
        <HintText hintClassName={"text"} />
        <br />
        <br />
        <Form form_wrapper={"formwrapper"} />
      </div>
      <div className="White_background"></div>
    </div>
  );
};
export default ParentPage;
