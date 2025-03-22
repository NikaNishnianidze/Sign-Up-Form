import GlobalStyles from "./GlobalStyles";
import {
  WholeBox,
  LeftContainer,
  RightContainer,
  Heading,
  Paragraph,
  TopButton,
  ButtonSpan,
  MainContainer,
  InfoInput,
  ClaimButton,
  FooterPar,
  FooterSpan,
  InputContainer,
  InputDiv,
  ErrorPar,
  FormContainer,
} from "./MainStyles";
import { useState } from "react";
import Error from "../public/images/icon-error.svg";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function App() {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      label: "First Name",
      field: "firstName",
      error: "First Name cannot be empty",
    },
    {
      label: "Last Name",
      field: "lastName",
      error: "Last Name Cannot be empty",
    },
    {
      label: "Email Address",
      field: "email",
      error: errors.email || "Email cannot be empty",
    },
    { label: "Password", field: "password", error: "Password cannot be empty" },
  ];

  const giveInput = (e, field) => {
    const value = e.target.value;
    let errorMessage = "";
    let borderStyle = "";

    if (field === "email") {
      if (value && !emailRegex.test(value)) {
        errorMessage = "Looks like this is not an email";
        borderStyle = "1px solid #FF7979";
      } else {
        errorMessage = "";
        borderStyle = value === "" ? "1px solid #FF7979" : "";
      }
    } else {
      errorMessage = value === "" ? `${field} cannot be empty` : "";
      borderStyle = value === "" || errorMessage ? "1px solid #FF7979" : "";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));

    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    inputs.forEach((item) => {
      if (inputValues[item.field] === "" || errors[item.field]) {
        isValid = false;
      }
    });

    if (isValid) {
      setMessage("Form submitted successfully!");
    } else {
      setMessage("Please fill in all required fields correctly.");
    }
  };

  const getInputBorderStyle = (field) => {
    if (inputValues[field] === "" || errors[field]) {
      return "1px solid #FF7979";
    }
    return "";
  };

  return (
    <>
      <GlobalStyles />
      <WholeBox>
        <LeftContainer>
          <Heading>Learn to code by watching others</Heading>
          <Paragraph>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Paragraph>
        </LeftContainer>
        <RightContainer>
          <TopButton>
            Try it free 7 days <ButtonSpan>then $20/mo. thereafter</ButtonSpan>
          </TopButton>
          <MainContainer>
            <FormContainer onSubmit={handleSubmit}>
              <InputContainer>
                {inputs.map((item, index) => (
                  <InputDiv key={index}>
                    <InfoInput
                      type={item.field == "password" ? "password" : "text"}
                      placeholder={item.label}
                      style={{
                        border: getInputBorderStyle(item.field),
                      }}
                      value={inputValues[item.field]}
                      onChange={(e) => giveInput(e, item.field)}
                    />
                    {inputValues[item.field] === "" || errors[item.field] ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "36%",
                          right: "10px",
                          transform: "translateY(-50%)",
                        }}
                        src={Error}
                        alt="error"
                      />
                    ) : null}
                    {inputValues[item.field] === "" || errors[item.field] ? (
                      <ErrorPar>{item.error}</ErrorPar>
                    ) : null}
                  </InputDiv>
                ))}
              </InputContainer>
              <ClaimButton type="submit">CLAIM YOUR FREE TRIAL</ClaimButton>
              <p>{message}</p>
            </FormContainer>

            <FooterPar>
              By clicking the button, you are agreeing to our
              <FooterSpan> Terms and Services</FooterSpan>
            </FooterPar>
          </MainContainer>
        </RightContainer>
      </WholeBox>
    </>
  );
}

export default App;
