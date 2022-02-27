import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: black;
  background-color: ${props => props.backgroundColor};
  width: fit-content;
  padding: 12px;
  font-size: 38px;
  margin: 50px auto;
`;

const SectionTitle = (props) => {
  return <StyledH1 backgroundColor={props.backgroundColor}>{props.title}</StyledH1>;
};

export default SectionTitle;
