import React from "react";

const Links = props => {
  return (
    <a href="/" style={{ color: props.color }} className={props.className}>
      {props.title}
    </a>
  );
};
export default Links;
