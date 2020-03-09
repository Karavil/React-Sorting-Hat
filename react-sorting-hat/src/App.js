import React from "react";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Button } from "@smooth-ui/core-sc";

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
      background: url(${HogwartsImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
   }

   body {
      margin: 0;
      background-color: #00000090;
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

const AppContainer = styled(FlexContainer)`
   height: 100vh;
   margin: 0 auto;
   padding: 30px 5px;

   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

class App extends React.Component {
   render() {
      return (
         <ThemeProvider theme={{}}>
            <AppContainer>
               <Normalize />
               <GlobalStyle />
               <WelcomeBanner />
            </AppContainer>
         </ThemeProvider>
      );
   }
}

export default App;
