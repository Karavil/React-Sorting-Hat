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

const DisplayHeader = styled.h1`
   margin: 0;
   text-align: center;
`;

const WelcomeBanner = () => {
   return (
      <>
         <Lottie
            isClickToPauseDisabled={true}
            options={animationOptions}
            height={"auto"}
            style={{
               margin: "-12.5% 10% -12.5% 0",
               height: "auto",
               width: "70%",
               minWidth: "500px"
            }}
         />
         <DisplayHeader>Which house do you belong to?</DisplayHeader>
      </>
   );
};

export default WelcomeBanner;
