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

  const giveInput = (e, field) => {
    const value = e.target.value;

    if (field === "email") {
      if (value && !emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Looks like this is not an email",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: value === "" ? `${field} cannot be empty` : "",
      }));
    }

    setInputValues({ ...inputValues, [field]: value });
  };

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
            <InputContainer>
              {inputs.map((item, index) => (
                <InputDiv key={index}>
                  <InfoInput
                    type="text"
                    placeholder={item.label}
                    style={{
                      border:
                        inputValues[item.field] === "" || errors[item.field]
                          ? "1px solid #FF7979"
                          : "",
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
            <ClaimButton>CLAIM YOUR FREE TRIAL</ClaimButton>
            <p>{message}</p>
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
