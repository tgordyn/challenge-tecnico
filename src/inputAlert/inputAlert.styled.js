import styled from "styled-components";

export const MissingFieldCtnr = styled.div`
  display: flex;
  align-items: center;
  color: #D52F1A;
  margin-top: 2%;
  > svg {
    width: 15px;
    height: 15px;
    margin-right: 2%;
  }
`;

export const MissingFieldSpan = styled.span`
  font-family: "Encode Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #D52F1A;
`;
