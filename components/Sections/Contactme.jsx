import React from 'react'
import styled from 'styled-components';
import { ContactForm } from '../Form';
import SectionTitle from './../SectionComponents/SectionTitle';

const FormContainer = styled.div`
  background-color: #FFC000;
  margin: 50px auto;
  width: 75%;
  box-shadow: 5px 5px 5px black;
  border-radius: 25px 25px 0 0;
  @media screen and (max-width: 1000px) {
    height: 350px;
  }
`;


const Contactme = ({language}) => {

  return (

    <>
      <SectionTitle backgroundColor={'#FFC000'} title={language ? 'CONTÁCTEME' : 'CONTACT ME'}/>
      <FormContainer>
        <ContactForm language={language}/>
      
      </FormContainer>
    </>
  )
}

export default Contactme