import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Nav from './components/Nav';
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';

const App = () => {
  return (
    <div className='bg-white overflow-x-hidden ' >
      <Nav />
      <Sec1 />
      <Sec2 />
      <Sec3 />

    </div>
  )
}

export default App
