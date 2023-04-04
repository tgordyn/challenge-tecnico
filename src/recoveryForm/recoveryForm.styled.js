import styled from "styled-components";
import Select from "react-select";
import { SubmitButton } from "../loginForm/loginForm.styled";

export const StyledSelect = styled(Select)`
  width: 320px;
  height: 42px;
  font-size: 16px;
  font-weight: 400;
  color: #555555;

  ::placeholder {
    color: #939393;
  }
`;

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "7px",
    height: "42px",
    boxShadow: state.isFocused ? null : null,
    border: state.isFocused ? "1px solid #649FD6" : "1px solid #939393",
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? "#ECCAE5"
      : state.isActive
      ? "green"
      : state.isFocused
      ? "#f5f0f4"
      : null,
    borderRadius: "7px",
    color: "#555555",
  }),
  menuList: () => ({
    padding: "2%",
    borderRadius: "7px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  
  @media only screen and (max-width: 480px) {
    margin-top: 20%;
  }

`;

export const StyledButton = styled(SubmitButton)`
  width: 155px;
`;
