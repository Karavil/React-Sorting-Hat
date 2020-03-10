import styled from "styled-components";

const FlexContainer = styled.div`
   display: flex;
   flex-direction: ${props => props.flex || "row"};
   max-width: 1200px;
   height: ${props => props.height || {}};
`;

export default FlexContainer;
