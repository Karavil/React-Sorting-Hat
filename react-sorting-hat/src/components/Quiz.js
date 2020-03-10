import React from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";
import FlexContainer from "./styles/Containers";

const AnswerChoice = styled.div``;
const StyledLabel = styled.label`
   margin: 0 0.75rem;
`;
const RadioAnswer = props => {
   return (
      <AnswerChoice>
         <input
            name={props.name}
            type="radio"
            value={props.value}
            ref={props.register}
         />
         <StyledLabel htmlFor={props.name}>{props.value}</StyledLabel>
      </AnswerChoice>
   );
};

const StyledForm = styled.form`
   color: white;

   font-family: "Sen", sans-serif;

   display: flex;
   flex-direction: column;

   padding: 20vh 0;
`;

const Questions = [
   {
      name: "hate",
      question:
         "Which of the following would you most hate people to call you?",
      values: ["Ordinary", "Ignorant", "Cowardly", "Selfish"]
   },
   {
      name: "history",
      question: "How would you like to be known to history?",
      values: ["The Wise", "The Good", "The Great", "The Bold"]
   }
];

const Quiz = () => {
   const { register, handleSubmit, errors } = useForm();
   const onSubmit = data => console.log(data);
   console.log(errors);

   return (
      <FlexContainer id="quiz" height="100vh">
         <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <RadioAnswer name="hate" value="Ordinary" register={register} />
            <RadioAnswer name="hate" value="Ignorant" register={register} />
            <RadioAnswer name="hate" value="Cowardly" register={register} />
            <RadioAnswer name="hate" value="Selfish" register={register} />

            <input type="submit" />
         </StyledForm>
      </FlexContainer>
   );
};

export default Quiz;
