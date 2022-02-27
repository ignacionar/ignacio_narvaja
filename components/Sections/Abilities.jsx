import React from 'react'
import SectionTitle from '../SectionComponents/SectionTitle'
import styled from 'styled-components'

const AbilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 70px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: none;
    row-gap: 40px;
    margin-bottom: 0;
  }
`;

const AbilitiesSection = styled.div`
  margin-top: 10px;
  text-align: center;
  display: grid;
  grid-template-rows: 80px 1fr;
  
`;

const AbilitiesTitle = styled.h1`
  text-decoration: underline #70d64b;
  margin: 0 auto;
  
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center; 
  row-gap: 10px;
  @media only screen and (max-width: 1000px) {
    position: relative;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledSquare = styled.div`
  display: grid;
  grid-template-rows: 100px 50px;
  width: 100px;
  height: 140px;
`;

const MobileStyledSquare = styled.div`
  width: 100px;
  height: 140px;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledName = styled.h4`
  margin: 15px auto;
  font-size: 15px;
`;

const Abilities = () => {
  return (
    <>
      <SectionTitle title='HABILIDADES' backgroundColor="#70d64b">Abilities</SectionTitle>
      <AbilitiesGrid>
        <AbilitiesSection>
          <AbilitiesTitle>FRONT END</AbilitiesTitle>
          <ImagesContainer>
            <StyledSquare><StyledImage src='html.svg'/><StyledName>HTML</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='css.svg'/><StyledName>CSS</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='js.png'/><StyledName>Javascript</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='react.png'/><StyledName>React</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='sass.svg'/><StyledName>Sass</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='redux.svg'/><StyledName>Redux</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='chakra.png'/><StyledName>Chakra</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='styled-components.png'/><StyledName>Styled Components</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='bootstrap-4_od87ai.svg'/><StyledName>Bootstrap</StyledName></StyledSquare>
          </ImagesContainer>
        </AbilitiesSection>
        <AbilitiesSection>
          <AbilitiesTitle>BACK END</AbilitiesTitle>
          <ImagesContainer>
            <StyledSquare><StyledImage style={{width: '100px', height: '100px'}} src='ts.svg'/><StyledName>Typescript</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='nextjs.png'/><StyledName>Next</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='nodejs.svg'/><StyledName>Node</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='express.png'/><StyledName>Express</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='firebase.png'/><StyledName>Firebase</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='mongodb.svg'/><StyledName>MongoDB</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='mongoose.png'/><StyledName>Mongoose</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='nodemon.png'/><StyledName>Nodemon</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='dotenv.png'/><StyledName>Dotenv</StyledName></StyledSquare>
          </ImagesContainer>
        </AbilitiesSection>
        <AbilitiesSection>
          <AbilitiesTitle>OTROS</AbilitiesTitle>
          <ImagesContainer>
            <StyledSquare><StyledImage src='git.png'/><StyledName>Git</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='github.png'/><StyledName>Github</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='vercel.svg'/><StyledName>Vercel</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='postman-seeklogo.com.svg'/><StyledName>Postman</StyledName></StyledSquare>
            <StyledSquare><StyledImage src='whimiscal.png' style={{width: '96px', height: '96px'}}/><StyledName>Whimiscal</StyledName></StyledSquare>
            <MobileStyledSquare></MobileStyledSquare>
            <MobileStyledSquare></MobileStyledSquare>
          </ImagesContainer>
        </AbilitiesSection>
      </AbilitiesGrid>
    </>
    
  )
}

export default Abilities