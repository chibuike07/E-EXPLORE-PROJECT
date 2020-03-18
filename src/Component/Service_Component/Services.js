import React from "react";
import "../Styles/Services.css";
function Services() {
  return (

    <div>
      <div className="parent">
        <div className="nav">
          <div className="nav-cont">
            <div className="logo"> </div>
            <h1 className="ltext">
              {" "}
              <b>AQUA</b>{" "}
            </h1>
          </div>

          <div className="link">
            {" "}
            <button>www.AquaFoods.com</button>{" "}
          </div>
        </div>

        <div className="relative"></div>

        <div className="parent-below-nav">
          <div className="below-nav">
            <div className="half-circle">
              <div className="text">
                {" "}
                <h1>
                  HELLO WE ARE <span> AQUA</span>
                </h1>
                <div className="line"></div>
                <div className="para-text">
                  <p>
                    {" "}
                    Our services to your satisfaction is our priority. <br />{" "}
                    choose us and get the best.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="middle">
          <div className="title">
            <h2>
              OUR <span className="service">SERVICE</span>{" "}
            </h2>
          </div>

          <div className="left-side">
            <div className="left-side-cover">
              <div className="left-side1">
                <div className="icon"></div>
                <div className="left-text">
                  <h4 className="a">BUSINESS RELATIONSHIP</h4>
                  <p className="a">our Business plan</p>
                </div>
              </div>

              <div className="left-side2">
                <div className="icon"></div>
                <div className="left-text">
                  <h4 className="a">Home Delivery</h4>
                  <p className="a">our Business plan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="right-side-cover">
              <div className="right-side1">
                <div className="icon"></div>
                <div className="right-text">
                  <h4 className="a">BUSINESS RELATIONSHIP</h4>
                  <p className="a">our Business plan</p>
                </div>
              </div>

              <div className="right-side2">
                <div className="icon"></div>
                <div className="right-text">
                  <h4 className="a">BUSINESS RELATIONSHIP</h4>
                  <p className="a">our Business plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="number">
          <div className="side1">
            <div className="side1-cont1">
              <div className="icon1"></div>

              <h4 className="b">350</h4>
              <h6 className="b">
                {" "}
                Projects <br /> Delivered{" "}
              </h6>
            </div>

            <div className="side1-cont2">
              <div className="icon1"></div>
              <h4 className="b">255</h4>
              <h6 className="b">
                {" "}
                Projects <br /> Delivered{" "}
              </h6>
            </div>
          </div>

          <div className="side2">
            <div className="side2-cont1">
              <div className="icon1"></div>
              <h4 className="b">60</h4>
              <h6 className="b">
                {" "}
                Projects <br /> Delivered{" "}
              </h6>
            </div>

            <div className="side2-cont2">
              <div className="icon1"></div>
              <h4 className="b">256</h4>
              <h6 className="b">
                {" "}
                Projects <br /> Delivered{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
