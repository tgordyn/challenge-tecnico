import "./alertToast.css";
import WarningIcon from "@mui/icons-material/Warning";

const AlertToast = () => {
  return (
    <div id="alertCntr" role="alert">
      <div id="iconAndDescription">
        <WarningIcon style={{ color: "#D42F1A" }} />
        <div id="errorDescription">
          El nombre de usuario o la contraseña son incorrectos
        </div>
      </div>
    </div>
  );
}

export default AlertToast;
