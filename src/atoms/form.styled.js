import styled, { css } from "styled-components";

export const FormContainer = styled.fieldset`
  width: auto;
  font-family: Lato;
  font-style: normal;
  line-height: 19px;
  display: flex;
  flex-direction: column;
  border: none;

  @media only screen and (max-width: 768px) {
    margin: 8%;
    align-items: center;
  }
`;

export const FormTitle = styled.legend`
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 10%;
  

  @media only screen and (max-width: 768px) {
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
