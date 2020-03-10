import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import styled from "styled-components";
import FlexContainer from "./styles/Containers";

import HogwartsImage from "../assets/hogwarts.jpg";

import Lottie from "react-lottie";
import Leviosa from "../assets/animations/leviosa.json";
import ScrollDown from "../assets/animations/scroll-down.json";

// Lottie animation options
const leviosaAnimation = {
   loop: true,
   autoplay: true,
   animationData: Leviosa,
   isClickToPauseDisabled: true,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }
};

const scrollAnimation = {
   loop: true,
   autoplay: true,
   animationData: ScrollDown,
   isClickToPauseDisabled: true,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }
};

// Styles
const LandingContainer = styled.div`
   height: 100vh;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   margin: 0 auto;
   padding: 30px 5px;

   background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
      url(${HogwartsImage});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
`;

const StyledBanner = styled(AnchorLink)`
   width: 100%;

   padding: 0vh 0 10vh;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   text-decoration: none;
`;

const DisplayHeader = styled.h1`
   margin: 0;

   text-align: center;
   position: relative;
   z-index: 1;

   transition: all 0.3s ease;
`;

const TextBox = styled.div`
   width: auto;

   display: flex;
   flex-direction: column;
   align-items: center;

   text-align: center;

   h3 {
      word-spacing: 0.4rem;
      padding: 1rem 0 0.75rem;
   }

   p {
      margin: 2rem 1.5rem 0 0;

      font-size: 1.5rem;
      opacity: 0.9;

      span {
         font-size: 115%;
         font-family: "HarryPotter";
      }
   }
`;

const Welcome = () => {
   return (
      <LandingContainer>
         <StyledBanner href="#quiz">
            <Lottie
               isClickToPauseDisabled={true}
               options={leviosaAnimation}
               height={"auto"}
               style={{
                  margin: "-17.5% 10% -13.5% 0",
                  padding: "0",
                  height: "auto",
                  width: "65%",
                  minWidth: "500px"
               }}
            />
            <TextBox>
               <DisplayHeader>Which house do you belong in?</DisplayHeader>
               <p>
                  Powered by <span>Harry Potter</span>™
               </p>
            </TextBox>
            <Lottie
               isClickToPauseDisabled={true}
               options={scrollAnimation}
               height={"auto"}
               style={{
                  position: "absolute",
                  bottom: "0",
                  width: "7.5%",
                  height: "auto"
               }}
            />
         </StyledBanner>
      </LandingContainer>
   );
};

export default Welcome;
