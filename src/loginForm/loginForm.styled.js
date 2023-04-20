import styled from "styled-components";
import { Link } from "react-router-dom";
import { sharedStyles } from "../atoms/form.styled";


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

  @media only screen and (max-width: 768px) {
    margin-top: 10%;
  }
`;

export const RecoverPassLink = styled.span`
  color: #8A3879;
`;

