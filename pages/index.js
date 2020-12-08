import { observer } from 'mobx-react';
import React from 'react';
import BackgroundComponent from '../components/BackgroundComponent';
import ChatComponent from '../components/ChatComponent';
import LogoComponent from '../components/LogoComponent';
import { PersonaComponent } from '../components/PersonaComponent';
import WavesComponent from '../components/WavesComponent';
import ChatViewModel from '../viewModels/ChatViewModel';
import PersonaViewModel from '../viewModels/PersonaViewModel';
import PaiperComponent from '../components/PaiperComponent';


@observer
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChat: false,
    };

    this.persona = PersonaViewModel;
    this.chatViewModel = ChatViewModel;
    this.chatViewModel.persona = this.persona;
  }

  initialized = async () => {
    this.setState({ displayChat: true });
    await this.chatViewModel.start();
  };

  render() {
    return (
      <div>
	  
        <BackgroundComponent />
		<WavesComponent />
        <LogoComponent />
		
        <PersonaComponent initialized={this.initialized} persona={this.persona} />
        
		
        <ChatComponent />
		<PaiperComponent />
      </div>
    );
  }
}

export default Home;
