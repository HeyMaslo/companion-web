import { observer } from 'mobx-react';
import React from 'react';
import BackgroundComponent from '../components/BackgroundComponent';
import ChatComponent from '../components/ChatComponent';
import LogoComponent from '../components/LogoComponent';
import { PersonaComponent } from '../components/PersonaComponent'
import WavesComponent from '../components/WavesComponent';
import ChatViewModel from '../viewModels/ChatViewModel';

@observer
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChat: false
    }

    this.chatViewModel = ChatViewModel;
  }

  initialized = async () => {
    this.setState({ displayChat: true });
    await this.chatViewModel.start();
  }

  render() {
    return (
      <div>
        <BackgroundComponent />
        <LogoComponent />
        <PersonaComponent initialized={this.initialized} />
        <WavesComponent />
        <ChatComponent />
      </div>
    )
  }
}

export default Home;

