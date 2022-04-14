import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../SectionComponents/Paragraph';
import { SectionDiv } from '../SectionComponents/SectionDiv';
import SectionTitle from '../SectionComponents/SectionTitle';
import { StyledLink } from '../SectionComponents/StyledLink';

const TextNFoto = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  align-items: center;
  height: 300px;
  margin-bottom: 80px;
  @media only screen and (max-width: 1000px) {
    display: grid; 
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledPhoto = styled.img`
  width: 200px;
  height: auto;
  border-radius: 100%;
  outline: 5px solid black;
  @media screen and (max-width: 1000px) {
    border: 5px solid black;
    outline: none;
  }
`;

const StyledText = styled.div`
  border: 3px solid #4770f5;
  width: 80%;
  padding: 10px;
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const StyledName = styled.h2`
  font-style: italic;
  font-size: 24px;
  margin: 15px auto;
`;


const Sections = ({language}) => {
  return <SectionDiv>
    <SectionTitle title={language ? 'ACERCA DE MI' : 'ABOUT ME'} backgroundColor="#4770f5" style={{marginTop: '0'}}/> 
    <TextNFoto>
      <PhotoContainer>
        <StyledPhoto src={'foto.png'}/>
        <StyledName>Ignacio Narvaja</StyledName>
      </PhotoContainer>
      <StyledText>
        <Paragraph>{language ? 'Soy un Full Stack Web Developer, apasionado por la informática. Me considero autodidacta, con motivación a seguir mejorando en el ámbito y aprender en nuevas tecnologías.' : "I'm a Full Stack Web Developer, passionate about computing sciences. I like to work on my own, I will continue learning more technologies and also improving on Web Development"
        }</Paragraph>
        <Paragraph>
        {language ? 'Me formé durante el 2021 y durante los primeros meses de 2022 en el bootcamp de ' : 'I studied web development during 2021 and the first months of 2022 in the ' }<StyledLink href={'https://drive.google.com/file/d/1IZbNKzxDNmQKdOGidQqHyU7uV0I3cn-R/view?usp=sharing'} target={'_blank'} rel="noopener noreferrer">NUCBA</StyledLink> {language ? '' : 'Bootcamp'}.
        </Paragraph>
        <Paragraph>
        {language ? "Actualmente estoy cursando la primera etapa de " : "I'm currently studying in the first stage of "} <StyledLink href={'https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa'} rel="noopener noreferrer" target={'_blank'}>Argentina Programa</StyledLink> {language ? " y busco un trabajo que me permita desarrollarme profesionalmente :)" : "and I'm looking for a job in order to start as a professional :)"}
        </Paragraph>
        <section style={{textAlign: 'center'}}>
          <StyledLink style={{color: '#4770f5', fontSize: '18px'}} href={language ? 'https://drive.google.com/file/d/1JUqVbabNSAtCK0GOve3QNOgSOuy0hyDg/view?usp=sharing' : 'https://docs.google.com/document/d/1-yWpW9dv3UccAI8AmxPwhq3NDtzcRHQI/edit?usp=sharing&ouid=105909034094815124844&rtpof=true&sd=true'} target={'_blank'} rel="noopener noreferrer">
          {language ? 'DESCARGAR CURRICULUM VITAE' : 'DOWNLOAD CURRICULUM VITAE'}
          </StyledLink>
        </section>
      </StyledText>
     
    </TextNFoto>
  </SectionDiv>;
};

export default Sections;
