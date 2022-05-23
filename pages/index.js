import React, { useState } from 'react';
import Cube from '../components/Cube';
import Wrapper from '../components/Wrapper';
import Typewriter from './../components/Typewriter';
import Head from 'next/head';

export default function Home() {

  const [intro, setIntro] = useState(true);
  const imageSource = 'foto.png'
 
  if (typeof document !== 'undefined') {
    setTimeout(() => {
    const element = document.getElementById('notAn');
    !element ? "" :  
    element.setAttribute('class', 'fadedOut');
    }, 6000);
    setTimeout(() => {
      setIntro(false)
    }, 8000);

    if (intro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <Head>
        <title>Ignacio Narvaja - Portfolio</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
    {
      intro ? (
        <div id='notAn'>
          <Cube />
          <Typewriter />
        </div>
      
      ) : <Wrapper/>
    }
      
    </>
    
  )
}


