import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormTitle,
  Form,
  Label,
  Input,
} from "../loginForm/loginForm.styled";
import {
  StyledSelect,
  customStyles,
  BtnContainer,
  StyledButton,
} from "./recoveryForm.styled";
import InputAlert from "../inputAlert/inputAlert";

const RecoveryForm = () => {
  const options = [
    { value: "DNI", label: "DNI" },
    { value: "C.I.", label: "C.I." },
    { value: "Pasaporte", label: "Pasaporte" },
  ];
  const [docType, setDocType] = useState(options[0].value);
  const [docNum, setDocNum] = useState("");
  const [missingDocument, setMissingDocument] = useState(false);
  const [submit, setSubmit] = useState({
    docType: "",
    docNum: "",
  });
  const navigate = useNavigate();

  // sets user typed document type
  const handleDocType = (event) => {
    setDocType(event.value);
  };

  // sets user typed document number
  const handleDocNum = (event) => {
    setDocNum(event.target.value);
  };

  // sets "submit" object with type and number and redirects to "/confirmation", if missing doc number it shows input alert
  const handleSubmit = (event) => {
    event.preventDefault();
    if (docNum) {
      setSubmit({ ...submit, docType: docType, docNum: docNum });
      navigate("/recover/confirmation");
    } else setMissingDocument(true);
  };

  // handles "volver" button
  const handleBack = () => {
    navigate("/");
  };

  // if submit, it checks if document number was filled
  useEffect(() => {
    docNum.length > 0 && setMissingDocument(false);
  }, [docNum, submit]);

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Olvidé mi contraseña</FormTitle>
          <Label htmlFor="selectDocument">
            Tipo de documento <span>&#42;</span>
          </Label>
          <StyledSelect
            id="selectDocument"
            options={options}
            styles={customStyles}
            onChange={handleDocType}
            selected={options[0]}
            placeholder={docType}
            aria-label="Seleccionar tipo de documento"
          />
          <Label htmlFor="documentInput">
            Número de documento <span>&#42;</span>
          </Label>
          <Input
            id="documentInput"
            type="number"
            error={missingDocument}
            placeholder="Ingresá tu número de documento"
            onChange={handleDocNum}
            aria-required="true"
          />
          {missingDocument && (
            <InputAlert id="missingDocField" ariaLabel="Documento, " />
          )}
          <BtnContainer>
            <StyledButton type="button" secondaryVariant onClick={handleBack}>
              Volver
            </StyledButton>
            <StyledButton type="submit">Continuar</StyledButton>
          </BtnContainer>
        </Form>
      </FormContainer>
    </>
  );
};

export default RecoveryForm;
