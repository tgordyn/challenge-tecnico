import styled from "styled-components";

export const ContentDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 480px) {
    width: auto;
    margin: 10%;
  }
`;

export const ContentH1 = styled.h1`
  margin-bottom: 10%;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
