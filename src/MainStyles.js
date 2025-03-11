import { styled } from "styled-components";

export const WholeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 45px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const RightContainer = styled.div`
  @media screen and (min-width: 1440px) {
  }
`;

export const Heading = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.29px;
  @media screen and (min-width: 1440px) {
    max-width: 356px;
    text-align: left;
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -0.52px;
  }
`;

export const Paragraph = styled.h2`
  width: 100%;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  margin-top: 16px;
  max-width: 327px;
  @media screen and (min-width: 1440px) {
    max-width: 500px;
    text-align: left;
    margin-top: 11px;
  }
`;

export const TopButton = styled.button`
  margin-top: 64px;
  width: 327px;
  padding: 18px 66px;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.27px;
  text-align: center;
  background-color: #5e54a4;
  box-shadow: 0px 8px 0px 0px #00000025;
  border: none;
  border-radius: 10px;
  color: #fff;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;

export const ButtonSpan = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.27px;
  text-align: center;
  @media screen and (min-width: 1440px) {
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  width: 327px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 0px 0px #00000025;
  padding: 24px;
  @media screen and (min-width: 1440px) {
    width: 540px;
    gap: 20px;
  }
`;

export const InfoInput = styled.input`
  border: 1px solid #dedede;
  width: 279px;
  padding: 15px 0 15px 19.41px;
  color: #3d3b48;
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.25px;
  @media screen and (min-width: 1440px) {
    width: 460px;
  }
`;

export const ClaimButton = styled.button`
  width: 279px;
  background-color: #38cc8b;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  padding: 15px 45px;
  border: none;
  border-radius: 5px;
  @media screen and (min-width: 1440px) {
    width: 460px;
  }
`;

export const FooterPar = styled.p`
  color: #bab7d4;
  font-weight: 500;
  font-size: 11px;
  line-height: 21px;
  text-align: center;
  @media screen and (min-width: 1440px) {
  }
`;

export const FooterSpan = styled.span`
  font-weight: 700;
  font-size: 11px;
  line-height: 21px;
  color: #ff7979;
  @media screen and (min-width: 1440px) {
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const ErrorPar = styled.p`
  text-align: right;
  margin-top: 6px;
  color: #ff7979;
  font-weight: 500;
  font-style: italic;
  font-size: 11px;
  line-height: 100%;
`;
