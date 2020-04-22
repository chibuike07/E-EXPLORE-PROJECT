import styled from "styled-components";
import props from "prop-types";

const Button = styled.button`
background-color:${props => props.primary && 'gold'};
padding:10px;
width:'auto:
border-radius:10px;
`;

Button.propTypes = {
  onclick: propTypes.func.isReequired,
  textColor: propTypes.String
};

Button.defaultProps ={
    onclick =() => null,
    textColor:'red'
}

export default Button;
