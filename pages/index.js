import { observer } from 'mobx-react';
import React from 'react';
import BackgroundComponent from '../components/BackgroundComponent';
import ChatComponent from '../components/ChatComponent';
import InfoModuleOptions from '../components/InfoModulesOptions';
import InfoModulesOptionsPage from '../components/InfoModulesOptionsPage';
import InfoModulesWrapper from '../components/InfoModulesWrapper';
import Header from '../components/Header';
import { PersonaComponent } from '../components/PersonaComponent';
import WavesComponent from '../components/WavesComponent';
import ChatViewModel from '../viewModels/ChatViewModel';
import PersonaViewModel from '../viewModels/PersonaViewModel';
import LogoComponent from '../components/LogoComponent';
 import PaiperComponent from '../components/PaiperComponent';
 import messageFromPaiper from '../components/PaiperComponent';
 import messageFromChatInput from '../components/ChatInputComponent';
 import EnterComponent from '../components/EnterComponent';
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
        <Header infoModules={this.chatViewModel.showInformationModule} />
        <PersonaComponent
          initialized={this.initialized}
          persona={this.persona}
          infoModules={this.chatViewModel.showInformationModule}
        />
		<EnterComponent />
        <WavesComponent />
        <ChatComponent infoModules={this.chatViewModel.showInformationModule} />
			
		<PaiperComponent messageFromPaiper={messageFromChatInput} /> 
        {this.chatViewModel.showInformationModule && (
          <InfoModulesWrapper submodule={this.chatViewModel.submoduleSelected}>
            <InfoModuleOptions
              module={this.chatViewModel.moduleName}
              submodule={this.chatViewModel.submoduleSelected}
            />
            {this.chatViewModel.submoduleSelected && (
              <InfoModulesOptionsPage
                module={this.chatViewModel.moduleName}
                submodule={this.chatViewModel.submoduleSelected}
              />
            )}
          </InfoModulesWrapper>
        )}
      </div>
    );
  }
}

export default Home;
