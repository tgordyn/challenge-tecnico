import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.fieldset`
  width: auto;
  font-family: Lato;
  font-style: normal;
  line-height: 19px;
  display: flex;
  flex-direction: column;
  border: none;

  @media only screen and (max-width: 480px) {
    margin: 8%;
    align-items: center;
  }
`;

export const FormTitle = styled.legend`
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 10%;
  

  @media only screen and (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 5%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  margin: 25px 0 5px 0;

  > span {
    color: #D52F1A;
  }
`;

export const sharedStyles = css `
width: ${(props) => (props.width ? props.width : "320px")};
height: 42px;
border-radius: 7px;
font-size: 16px;
font-weight: 400;
backgound-color: red;
`;

export const Input = styled.input`
${sharedStyles}
  border: ${(props) =>
    props.error ? "1px solid #D42F1A" : "1px solid #939393"};
  color: #555555;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  outline: none;
  
  ::placeholder {
    color: #939393;
  }

  :focus {
    border: 1px solid #649fd6;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputAndIconCtnr = styled.div`
  width: 300px;
  position: relative;

      .visibility {
      color: #939393;
      position: absolute;
      top: 20%;
      right: 0px;
    }
`;


export const SubmitButton = styled.button`
${sharedStyles}
  border: none;
  background-color: #8A3879;
  color: #FFFF;
  padding: 11px auto;
  margin-top: 25px;

  :hover {
    background-color: #A54F93;
    box-shadow: 0px 0px 6px rgba(165, 79, 147, 0.85);
  }

  :active {
    background-color: #78306B;
    box-shadow: 0px 0px 6px rgba(120, 48, 107, 0.85);
  }

  :disabled {
    background-color: #ECCAE5;
  }

  ${(props) =>
    props.secondaryVariant &&
    `
    border: 1px solid #8A3879;
    background-color: #FFFF;
    color: #8A3879;

    :hover {
      color: #FFFF;
    }

    :active {
      color: #FFFF;
    }
  `}
`;

export const StyledLink = styled(Link)`
  margin-top: 50px;
  text-align: center;

  @media only screen and (max-width: 480px) {
    margin-top: 10%;
  }
`;

export const RecoverPassLink = styled.span`
  color: #8A3879;
`;

