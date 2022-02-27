import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import styled from 'styled-components'
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeSquare, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NameAndEmail = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 600px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

const InputContainer = styled.div`
  padding: 20px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 100px 1fr;
    padding: 20px 10px;
  }
`;

const OkTxt = styled.h1`
  background-color: white;
  border: 2px solid black;
  align-self: center;
  border-radius: 100%;
  margin: 0 auto;
  width: 40px;
  height: auto;
`;


export function ContactForm() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [ok, setOk] = useState(false)

  const [state, handleSubmit] = useForm("xjvlrvwl");

  if (state.succeeded) {
    console.log('message sent');
  }

  useEffect(() => {
    if (state.submitting === true) {
      setOk(true)
    } else {
      return
    }
  }, [state])
  
  const preventDefault = (e) => {
    e.preventDefault()
  }

  return (
      <form onSubmit={handleSubmit}>
        <NameAndEmail>
          <InputContainer>
            <label htmlFor="name">
              Nombre&nbsp;&nbsp;<FontAwesomeIcon icon={faUser}/>
            </label>
            <input
            id="name"
            type="name" 
            name="name"
            onChange={(e) => {setName(e.target.value)}} 
            value={name ?? ''}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">
              Email&nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelopeSquare}/>
            </label>
            <input
            id="email"
            type="email" 
            name="email"
            onChange={(e) => {setEmail(e.target.value)}}
            value={email ?? ''}
            />
          </InputContainer>
      </NameAndEmail>
      <InputContainer>
        <label htmlFor="message">
          Mensaje&nbsp;&nbsp;<FontAwesomeIcon icon={faMessage}/>
        </label>
        <textarea
          id="message"
          name="message"
          onChange={(e) => {setMessage(e.target.value)}}

        />
      </InputContainer>
      {
        !ok ? 
        <button onSubmit={(e) => {preventDefault(e)}} disabled={name === undefined || name.length < 0 || email === undefined || !email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) || message === undefined || message.length < 0}>ENVIAR</button> 
        : 
        <OkTxt><FontAwesomeIcon icon={faCheck}/></OkTxt>
      }

    </form>
  );
}