import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 350px 1fr;
  height: 80px;
  color: white;
  border-bottom: 1px solid white;
  margin-bottom: 80px;
  @media only screen and (max-width: 1000px) {
    display: grid; 
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledTitle = styled.h1`
  display: flex;
  justify-self: center;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  font-size: 2.5rem;
  margin: 0;
  @media only screen and (max-width: 1000px) {
    padding: 20px;
  }
`;

const StyledLinkedIn = styled.li`
  color: #0e76a8;
  transition: .3s ease;
  &:hover{
    transform: scale(1.2);
  }
`;

const StyledGithub = styled.li`
  color: white;
  transition: .3s ease;
  &:hover{
    transform: scale(1.2);
  }
`;

const StyledWhatsapp = styled.li`
  color: #00bb2d;
  transition: .3s ease;
  &:hover{
    transform: scale(1.2);
  }
`;

const StyledEmail = styled.li`
  color: #ea4335;
  transition: .3s ease;
  &:hover{
    transform: scale(1.2);
  }
`;

const StyledGlobe = styled.li`
  cursor: pointer; 
  color: white;
  transition: .3s ease;
  &:hover{
    transform: scale(1.2);
  }
`;

const StyledCountry = styled.img`
  cursor: pointer;
  transition: .3s ease;
  &:hover{
    transform: scale(1.2);
  }
  width: 50px;
  height: auto;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
  <StyledGrid>
    <StyledTitle>My Portfolio :)</StyledTitle>
    <StyledList>
      <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/ignacio-narvaja-935765221/"><StyledLinkedIn><FontAwesomeIcon icon={faLinkedin} /></StyledLinkedIn></a>
      <a rel="noopener noreferrer" target='_blank' href="https://github.com/ignacionar"><StyledGithub><FontAwesomeIcon icon={faGithubSquare} /></StyledGithub></a>
      <a rel="noopener noreferrer" target='_blank' href="https://wa.me/543516320705/?text=urlencodedtext"><StyledWhatsapp><FontAwesomeIcon icon={faWhatsappSquare} /></StyledWhatsapp></a>
      <a rel="noopener noreferrer" target='_blank' href="mailto:ignacionarvajadev@gmail.com"><StyledEmail><FontAwesomeIcon icon={faEnvelopeSquare} /></StyledEmail></a>
      <StyledCountry src={this.props.currentLanguage ? 'argentina.png' : 'unitedstates.png'} onClick={() => {
        if (this.props.currentLanguage) {
          return this.props.language(false)
        }  

        this.props.language(true)
    
        }}/>
    </StyledList>
  </StyledGrid>
    )
  };
};

export default Header;
