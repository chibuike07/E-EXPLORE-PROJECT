import React from "react";

const Button = props => {
  return (
    <div>
      <button
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
      >
        {props.navs}
      </button>
    </div>
  );
};
export default Button;
