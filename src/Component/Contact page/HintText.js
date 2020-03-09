import React from "react";
import Links from "../Reuseable_Component/Links";
const HintText = props => {
  return (
    <div className={props.hintClassName}>
      <div>
        <h2>contact us</h2>
      </div>
      <br />
      <div>
        <p>
          Questions, unpleasant transactions, feedback, feature request ~~ we re
          here for it all.
        </p>
        <p>
          Already use a member? <Links title={"sign in"} /> so we can tailor
          your support experience. If that's not possible, we'd still like to{" "}
          <br />
          <span>from you.</span>
        </p>
      </div>
    </div>
  );
};
export default HintText;
