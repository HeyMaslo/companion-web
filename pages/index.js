import React, { useState } from 'react';
import BackgroundComponent from '../components/BackgroundComponent';
import ChatComponent from '../components/ChatComponent';
import LogoComponent from '../components/LogoComponent';
import { PersonaComponent } from '../components/PersonaComponent'
import WavesComponent from '../components/WavesComponent';
import ChatViewModel from '../viewModels/chatViewModel';

export const Home = () => {
  const [displayChat, setDisplayChat] = useState(false);

  const chatViewModel = new ChatViewModel();

  const initialized = async () => {
    setDisplayChat(true);
    await chatViewModel.start();
  }

  return (
    <div>
      <BackgroundComponent />
      <LogoComponent />
      <PersonaComponent initialized={initialized} />
      <WavesComponent />
      {displayChat && (
        <ChatComponent />
      )}
    </div>
  )
}

export default Home;

