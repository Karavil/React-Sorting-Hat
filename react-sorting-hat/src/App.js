import React, { useEffect } from "react";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import HogwartsImage from "./assets/hogwarts.jpg";
import HarryPotterFont from "./assets/fonts/ParryHotter.ttf";

import FlexContainer from "./components/styles/Containers";
import WelcomeBanner from "./components/WelcomeBanner";

const GlobalStyle = createGlobalStyle`
   @font-face {
      font-family: 'HarryPotter';
      src: url(${HarryPotterFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
   }

   * {
      color: white;

      font-family: 'HarryPotter', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      box-sizing: border-box;
   }

   html {
      background-color: black;
   }

   body {
      margin: 0;
   }

   h1 {
      font-size: 6rem;
   }

   h2 {
      font-size: 3rem;
   }

   h3 {
      font-size: 2rem;
   }

   h4 {
      font-size: 1.5rem;
   }

   h5 {
      font-size: 1.35rem;
   }

   h6 {
      font-size: 1.2rem;
   }
`;

const LandingPage = styled.div`
   background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
      url(${HogwartsImage});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
`;
const LandingContainer = styled(FlexContainer)`
   height: 100vh;
   margin: 0 auto;
   padding: 30px 5px;

   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const QuizPage = styled.div`
   height: 100vh;

   flex-direction: column;
   justify-content: center;
   align-items: center;

   background: black;
`;

class App extends React.Component {
   render() {
      return (
         <ThemeProvider theme={{}}>
            <Normalize />
            <GlobalStyle />
            <LandingPage>
               <LandingContainer>
                  <WelcomeBanner />
               </LandingContainer>
            </LandingPage>
            <QuizPage></QuizPage>
         </ThemeProvider>
      );
   }
}

export default App;
