import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Select = styled.select`
  option {
    background-color: yellow;
    width: 100;
    :first-child {
      color: yellow;
    }
  }
`;
select.propTypes = {};

export default Select;
