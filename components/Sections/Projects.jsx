import React from 'react'
import styled, { keyframes } from 'styled-components'
import SectionTitle from '../SectionComponents/SectionTitle'
import { Paragraph } from './../SectionComponents/Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { StyledLink } from '../SectionComponents/StyledLink';

const Project = styled.div`
  background-color: #c93636;
  width: 85%;
  margin: 0px auto;
  margin-top: 50px;
  margin-bottom: 80px;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  box-shadow: 5px 5px 5px black;
`;

const TextNImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media screen and (max-width: 1000px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

const ProjectTitle = styled.h1`
  color: white;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectImg = styled.img`
  width: 400px;
  height: auto;
  align-self: center;
  border: 2px solid black;
  text-align: center;
  box-shadow: 5px 5px 5px black;
  margin: 0 auto;
`;

const ProjectText = styled.div`
  background-color: white;
  width: 80%;
  border: 2px solid black;
  box-shadow: 5px 5px 5px black;
  padding: 10px;
  margin: 0 auto;
`;

const ProjectLinks = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  height: 50px;
  margin: 40px auto;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 20px auto;
  }
`;

const ProjectLink = styled.a`
  background-color: white;
  border: 2px solid black;
  margin: 0 auto;
  font-weight: 700;
  text-decoration: none;
  color: black;
  padding: 10px;
  border-radius: 25px;
  font-size: 40px;
  align-self: center;
  &:hover {
    color: #c93636;
    cursor: pointer;
    transform: translate(0px, -4px);
    transition: .3s ease;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
    font-size: 18px;
    text-align: center;
    padding: 20px 0;
  }
`;

const Projects = () => {
  return (
    <>
      <SectionTitle title='PROYECTOS' backgroundColor="#c93636">Abilities</SectionTitle> 
      <Project>
        <ProjectTitle>REACT + FIREBASE | ECOMMERCE</ProjectTitle>
        <TextNImg>
          <ProjectImg src={'firebaseecomm.png'}/>
          <ProjectText>
            <Paragraph>Un simple modelo de ecommerce hecho con React para el Frontend, y Firebase para el backend. Cuenta con un sistema de Login / Signup y diversas funcionalidades con Redux.</Paragraph>
          </ProjectText>
        </TextNImg>
        <ProjectLinks>
          <ProjectLink href='https://github.com/ignacionar/react_firebase_ecommerce' target={'_blank'} rel="noopener noreferrer">REPOSITORIO <FontAwesomeIcon icon={faCode}/></ProjectLink>
          <ProjectLink href='https://react-firebase-ecommerce-iota.vercel.app/' target={'_blank'} rel="noopener noreferrer">PRUEBA <FontAwesomeIcon icon={faDesktop}/></ProjectLink>
        </ProjectLinks>
      </Project>
      <Project>
        <ProjectTitle>MONGODB + NEXT | TICKETS RESERVATION</ProjectTitle>
        <TextNImg>
          <ProjectImg src={'mongotickets.png'}/>
          <ProjectText>
            <Paragraph>Una página que hace reservas de pasajes. Cuenta con un sistema de Login / Signup, el usuario puede comprobar sus órdenes/compras en un apartado. Las compras aparecen como &quot;pendientes&quot; o &quot;realizadas&quot; dependiendo su estado en la base de datos. Typescript fue requerido para el modelado de datos y Redux para permanecer al usuario y sus órdenes.</Paragraph>
          </ProjectText>
        </TextNImg>
        <ProjectLinks>
          <ProjectLink href='https://github.com/ignacionar/mongo_tickets_reservation' target={'_blank'} rel="noopener noreferrer">REPOSITORIO <FontAwesomeIcon icon={faCode}/></ProjectLink>
        </ProjectLinks>
      </Project>
      <Project>
        <ProjectTitle>REACT | IPCR LANDING PAGE</ProjectTitle>
        <TextNImg>
          <ProjectImg src={'crlandingpage.png'}/>
          <ProjectText>
            <Paragraph>Una versión actualizada de la página de mi escuela. No contiene back end, pero pensé que se podía exprimir el potencial de la página oficial un poco más <StyledLink href='https://escuelacristoredentor.edu.ar/' rel="noopener noreferrer"  target={'_blank'}>(Tocar para ir a la página oficial).</StyledLink></Paragraph>
          </ProjectText>
        </TextNImg>
        <ProjectLinks>
          <ProjectLink href='https://github.com/ignacionar/cr_landing_page' target={'_blank'} rel="noopener noreferrer">REPOSITORIO <FontAwesomeIcon icon={faCode}/></ProjectLink>
          <ProjectLink href='https://cr-landing-page.vercel.app/' target={'_blank'} rel="noopener noreferrer">PRUEBA <FontAwesomeIcon icon={faDesktop}/></ProjectLink>
        </ProjectLinks>
      </Project>
      <Project>
        <ProjectTitle>REACT + FIREBASE | REACT FOOD WEBSITE</ProjectTitle>
        <TextNImg>
          <ProjectImg src={'foodweb.png'}/>
          <ProjectText>
            <Paragraph>Proyecto realizado durante mi cursada en NUCBA, el mismo fue realizado con ayuda del tutor. Se usó Redux para mantener los datos del usuario</Paragraph>
          </ProjectText>
        </TextNImg>
        <ProjectLinks>
          <ProjectLink href='https://github.com/ignacionar/react-firebase-food-website' target={'_blank'} rel="noopener noreferrer">REPOSITORIO <FontAwesomeIcon icon={faCode}/></ProjectLink>
          <ProjectLink href='https://react-firebase-food-ecom.vercel.app/' target={'_blank'} rel="noopener noreferrer">PRUEBA <FontAwesomeIcon icon={faDesktop}/></ProjectLink>
        </ProjectLinks>
      </Project>
      <Project>
        <ProjectTitle>MONGODB + REACT | TO-DO LIST</ProjectTitle>
        <TextNImg>
          <ProjectImg src={'mongotodo.png'}/>
          <ProjectText>
            <Paragraph>El proyecto utiliza los métodos fundamentales CRUD para interactuar con los to-dos. Para este proyecto, decidí organizar de forma separada el back end y el front end.</Paragraph>
          </ProjectText>
        </TextNImg>
        <ProjectLinks>
          <ProjectLink href='https://github.com/ignacionar/mongodb_todolist' target={'_blank'} rel="noopener noreferrer">REPOSITORIO <FontAwesomeIcon icon={faCode}/></ProjectLink>
        </ProjectLinks>
      </Project>
    </>

  )
}

export default Projects