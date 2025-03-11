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
} from "./MainStyles";

function App() {
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
            <InfoInput type="text" placeholder="First Name" />
            <InfoInput type="text" placeholder="Last Name" />
            <InfoInput type="text" placeholder="Email Adress" />
            <InfoInput type="text" placeholder="Password" />
            <ClaimButton>CLAIM YOUR FREE TRIAL</ClaimButton>
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
