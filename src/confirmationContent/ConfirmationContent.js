import { ContentDiv, ContentH1 } from "./confirmationContent.styled";
import { StyledButton } from "../recoveryForm/recoveryForm.styled";
import { useNavigate } from "react-router-dom";

const ConfirmationContent = (props) => {
  const navigate = useNavigate();

  // handles "volver" button
  const handleBack = () => {
    navigate("/");
  };

  return (
    <ContentDiv>
      <ContentH1>{props.contentMessage}</ContentH1>
      <StyledButton secondaryVariant onClick={handleBack}>
        Volver
      </StyledButton>
    </ContentDiv>
  );
};

export default ConfirmationContent;
