import React from 'react';
import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 19.5em;
  }
`;

const blinkTextCursor = keyframes`
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
`;

const StyledPar = styled.p`
  position: relative;
  top: 50%;
  font-family: 'Anonymous Pro', monospace;
  background-color: 'black';
  height: 20px;
  color: white;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  text-align: center;  
  overflow: hidden;
  transform: translateY(-50%);
  animation: ${typewriter} 4s steps(40) 1s 1 normal both,
  ${blinkTextCursor} 500ms steps(40) infinite normal;
`;



const Typewriter = () => {
<<<<<<< HEAD
  return <StyledPar>console.log(&quot;This&nbsp;is&nbsp;my&nbsp;portfolio&quot;)</StyledPar>;
=======
  return <StyledPar>console.log(hello&nbsp;world!)</StyledPar>;
>>>>>>> 2bd052bd00c606238298bc089b209942c846358c
};

export default Typewriter;
