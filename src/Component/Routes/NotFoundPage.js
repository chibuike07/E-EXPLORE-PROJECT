import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <h2>this page those not exist.</h2>
      <p> You can check to the home page using the link below</p>
      <Link to="/">home page</Link>
    </div>
  );
};
export default NotFoundPage;
