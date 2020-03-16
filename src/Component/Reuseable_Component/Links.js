import React from "react";
import { Link } from "react-router-dom";
const Links = props => {
  return (
    <Link
      to={props.path}
      style={{ color: props.color }}
      className={props.className}
    >
      {props.title}
    </Link>
  );
};
export default Links;
