import { MissingFieldCtnr, MissingFieldSpan } from "./inputAlert.styled";
import WarningIcon from "@mui/icons-material/Warning";


const InputAlert = (props) => {
  return (
    <MissingFieldCtnr role="alert" aria-label={props.ariaLabel}>
      <WarningIcon />
      <MissingFieldSpan >Este campo no debe estar vacío</MissingFieldSpan>
    </MissingFieldCtnr>
  );
}

export default InputAlert;
