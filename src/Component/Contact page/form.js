import React from "react";
import Inputs from "../Reuseable_Component/Input";
import TextArea from "../Reuseable_Component/TextArea";
import Button from "../Reuseable_Component/Button";
import Links from "../Reuseable_Component/Links";
const Form = props => {
  return (
    <div className={props.form_wrapper}>
      <form>
        <label htmlFor="Email">Your Email Address</label>
        <br />
        <Inputs type={"email"} placeholder={"you@example.com"} />
        <br />
        <br />
        <label htmlFor="SUbject">SUbject</label>
        <br />
        <Inputs type={"text"} />
        <br />
        <br />
        <label htmlFor="How can will help?">How can will help?</label>
        <br />
        <TextArea placeholder={"add ur request here"} />
        <div className="button">
          <Button navs={"SEND"} backgroundColor={"#5aafd8"} />
        </div>
      </form>
      <div className="policy">
        <Links title={"Privacy Policy"} />
      </div>
    </div>
  );
};
export default Form;
