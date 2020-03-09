import React from "react";

import styled from "styled-components";

import Lottie from "react-lottie";
import Leviosa from "../assets/animations/leviosa.json";

// Lottie animation options
const animationOptions = {
   loop: true,
   autoplay: true,
   animationData: Leviosa,
   isClickToPauseDisabled: true,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }
};

const StyledBanner = styled.div`
   width: 100%;

   padding: 0vh 0 10vh;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   &:hover {
      cursor: pointer;

      h1,
      h4 {
         color: #ffffff80 !important;
      }
   }
`;

const DisplayHeader = styled.h1`
   margin: 0;

   text-align: center;
   position: relative;
   z-index: 1;

   transition: all 0.3s ease;
`;

const TextBox = styled.div`
   width: 100%;

   h4 {
      text-align: right;
      padding-right: 3rem;
   }
`;

const WelcomeBanner = () => {
   return (
      <StyledBanner>
         <Lottie
            isClickToPauseDisabled={true}
            options={animationOptions}
            height={"auto"}
            style={{
               margin: "-25% 10% -12.5% 0",
               padding: "0",
               height: "auto",
               width: "70%",
               minWidth: "500px"
            }}
         />
         <TextBox>
            <DisplayHeader>Which house do you belong to?</DisplayHeader>
            <h4>Harry Potter™</h4>
         </TextBox>
      </StyledBanner>
   );
};

export default WelcomeBanner;
