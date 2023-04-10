import { Routes, Route } from "react-router-dom";
import LoginForm from "./loginForm/LoginForm";
import RecoveryForm from "./recoveryForm/RecoveryForm";
import ConfirmationContent from "./confirmationContent/ConfirmationContent";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <div id="firstCol">
        <div id="logoCtr" aria-label="TEK BNK logo">
          <img
            src={require("./images/tekPNG.png")}
            alt="logo"
            aria-hidden
          />
          <span style={{ fontWeight: "300" }} aria-hidden>
            TEK
          </span>
          <span style={{ fontWeight: "600" }} aria-hidden>
            BNK
          </span>
        </div>
        <div id="firstColContent" className='colStyles'>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route
              path="/home"
              element={<ConfirmationContent contentMessage={"Bienvenido!"} />}
            />
            <Route path="/recover" element={<RecoveryForm />} />
            <Route
              path="/recover/confirmation"
              element={
                <ConfirmationContent
                  contentMessage={
                    "Hemos enviado el enlace para recuperación de contraseña a su mail registrado."
                  }
                />
              }
            />
            <Route path="*" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
      <div id="rectangle1" />
      <img
        id="imgBcnd"
        className="imgBcndStyles"
        src={require("./images/appDevelopment.png")}
        alt="background"
      />
    </div>
  );
};

export default App;
