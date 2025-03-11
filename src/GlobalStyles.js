import { createGlobalStyle, styled } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body{
    padding: 88px 24px 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    background-image: url(/images/bg-intro-mobile.png);
    background-repeat: no-repeat;
    background-color: rgba(255, 121, 121, 1);
    background-position: center;
    @media screen and (min-width: 1440px){
        background-image: url(/images/bg-intro-desktop.png);
    }
 }


`;

export default GlobalStyles;
