import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormTitle,
  Form,
  Label,
  Input,
  InputAndIconCtnr,
  SubmitButton,
  StyledLink,
  RecoverPassLink,
} from "./loginForm.styled";
import AlertToast from "../alertToast/AlertToast";
import InputAlert from "../inputAlert/inputAlert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [submit, setSubmit] = useState({
    name: "",
    pass: "",
  });
  const [validatedUser, setValidatedUser] = useState(false);
  const [error, setError] = useState(false);
  const [visibility, setVisibility] = useState("password");
  const [missingUser, setMissingUser] = useState(false);
  const [missingPass, setMissingPass] = useState(false);
  const navigate = useNavigate();

  // sets user typed name
  const handleName = (event) => {
    setName(event.target.value);
  };

  // sets user typed password
  const handlePass = (event) => {
    setPass(event.target.value);
  };

  // sets user name and password in a submit object
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit({ ...submit, name: name, pass: pass });
  };

  // changes input type "password" or "text" to make it visible
  const handleVisibility = () => {
    visibility === "password"
      ? setVisibility("text")
      : setVisibility("password");
  };

  useEffect(() => {
    // hardcoded registered user
    const hardcodedUser = {
      name: "pepe",
      pass: "hola",
    };

    // if the user is valid it redirects to "/home"
    const validated = () => {
      setValidatedUser(true);
      navigate("/home");
    };

    // if user is not valid it sets an error input message or triggers the Alert
    const inValid = () => {
      setValidatedUser(false);
      if (submit.name.length < 1) {
        setMissingUser(true);
      }
      if (submit.pass.length < 1) {
        setMissingPass(true);
      } else setError(true);
    };

    // makes validation between typed name and pass with registered user
    hardcodedUser.name === submit.name && hardcodedUser.pass === submit.pass
      ? validated()
      : inValid();
  }, [navigate, submit]);

  // reset variables to default values
  useEffect(() => {
    setMissingUser(false);
    setMissingPass(false);
    setError(false);
  }, [name, pass]);

  return (
    <>
      <FormContainer>
        <FormTitle>Iniciá sesión</FormTitle>
        {error && !validatedUser && <AlertToast />}
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="nameInput">
            Usuario <span>&#42;</span>
          </Label>
          <Input
            id="nameInput"
            type="text"
            placeholder="Ingresá tu usuario"
            value={name}
            onChange={handleName}
            error={missingUser}
            aria-required="true"
          ></Input>
          {missingUser && (
            <InputAlert id="missingUserField" ariaLabel="Usuario, " />
          )}
          <Label htmlFor="passInput">
            Contraseña <span>&#42;</span>
          </Label>
          <InputAndIconCtnr>
            <Input
              id="passInput"
              type={visibility}
              placeholder="Ingresá tu contraseña"
              value={pass}
              onChange={handlePass}
              error={missingPass}
              aria-required="true"
            />
            {visibility === "password" ? (
              <VisibilityOffIcon
                role="button"
                onClick={handleVisibility}
                className="visibility"
                tabIndex={0}
                aria-label="hide password"
                aria-hidden="false"
              />
            ) : (
              <VisibilityIcon
                role="button"
                onClick={handleVisibility}
                className="visibility"
                tabIndex={0}
                aria-label="show password"
                aria-hidden="false"
              />
            )}
            {missingPass && (
              <InputAlert id="missingPassField" ariaLabel="Password, " />
            )}
          </InputAndIconCtnr>
          <SubmitButton type="submit">Ingresar</SubmitButton>
        </Form>
        <StyledLink to="recover">
          <RecoverPassLink>Olvidé mi contraseña</RecoverPassLink>
        </StyledLink>
      </FormContainer>
    </>
  );
};

export default LoginForm;
