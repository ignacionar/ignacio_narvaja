import React, { useState } from 'react';
import Header from './Header';
import Aboutme from './Sections/Aboutme';
import styled, { keyframes } from 'styled-components';
import Abilities from './Sections/Abilities';
import Projects from './Sections/Projects';
import Contactme from './Sections/Contactme';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  animation: ${FadeIn} 2s forwards;
`;

const SectionContainer = styled.div`
  width: 90%;
  background-color: white;
  margin: 5% auto;
  margin-bottom: 50px;
  border-radius: 15px;
  border: black 2px solid;
  box-shadow: 8px 10px; 
`;

const StyledDiv = styled.div`
  height: 50px;
  width: 100%;
`;


const Wrapper = ({imgSrc}) => {

  const [spanish, setSpanish] = useState(true)

  return (
  <>
    <StyledWrapper>
      <Header language={(val) => {
        setSpanish(val)
        }}
        currentLanguage={spanish}/>
      <SectionContainer>
        <Aboutme language={spanish} imgSrc={imgSrc}/>
        <Abilities language={spanish}/>
        <Projects language={spanish}/>
        <Contactme language={spanish}/>
      </SectionContainer> 
    </StyledWrapper>
    <StyledDiv/>
  </>
  );
};

export default Wrapper;
