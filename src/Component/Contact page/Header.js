import React from "react";
import Links from "../Reuseable_Component/Links";
import Button from "../Reuseable_Component/Button";
import "../Styles/Header.css";
const NavBar = () => {
  return (
    <>
      <div className="links">
        <ul className="ul">
          <Links title={"Why us?"} color={"#000"} className="headLinks" />
          <Links title={"Solution"} color={"#000"} className="headLinks" />
          <Links title={"Resources"} color={"#000"} className="headLinks" />
          <Links title={"Pricing"} color={"#000"} className="headLinks" />
        </ul>
      </div>
      <div className="right_navs">
        <div className="sign_in">
          <ul>
            <Links
              title={"Sign in"}
              color={"#000"}
              className={"sign_in_link"}
            />
          </ul>
        </div>
        <Button
          navs={"Get started"}
          backgroundColor={"#5aafd8"}
          color={"#fff"}
        />
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="container">
        <NavBar />
      </div>
    </div>
  );
};
export default Header;
