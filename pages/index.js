import React from 'react';
import BackgroundComponent from '../components/BackgroundComponent';
import LogoComponent from '../components/LogoComponent';
import { PersonaComponent } from '../components/PersonaComponent'
import WavesComponent from '../components/WavesComponent';

export default function Home() {
  return (
    <div>
      <BackgroundComponent />
      <LogoComponent />
      <PersonaComponent />
      <WavesComponent />
    </div>
  )
}
