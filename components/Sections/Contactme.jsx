import React from 'react'
import styled from 'styled-components';
import { ContactForm } from '../Form';
import SectionTitle from './../SectionComponents/SectionTitle';

const FormContainer = styled.div`
  background-color: #fabd52;
  margin: 50px auto;
  width: 65%;
  box-shadow: 5px 5px 5px black;
  border-radius: 25px 25px 0 0;
`;


const Contactme = () => {


  return (

    <>
      <SectionTitle backgroundColor={'#fabd52'} title={'CONTÁCTEME'}/>
      <FormContainer>
        <ContactForm />
      
      </FormContainer>
    </>
  )
}

export default Contactme