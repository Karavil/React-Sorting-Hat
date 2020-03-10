import React from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import HarryPotterFont from "./assets/fonts/ParryHotter.ttf";

import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";

const GlobalStyle = createGlobalStyle`
   @font-face {
      font-family: 'HarryPotter';
      src: url(${HarryPotterFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
   }

   * {
      color: white;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      box-sizing: border-box;
   }

   html {
      background-color: black;
   }

   body {
      margin: 0;
      font-family: 'HarryPotter', sans-serif;
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

   p {
      font-family: 'Sen', sans-serif;
   }
`;

class App extends React.Component {
   render() {
      return (
         <ThemeProvider theme={{}}>
            <Normalize />
            <GlobalStyle />
            <Welcome />
            <Quiz />
         </ThemeProvider>
      );
   }
}

export default App;
