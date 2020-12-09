import { observer } from 'mobx-react';
import React from 'react';
import BackgroundComponent from '../components/BackgroundComponent';
import ChatComponent from '../components/ChatComponent';
import InfoModuleOptions from '../components/InfoModulesOptions';
import InfoModulesOptionsPage from '../components/InfoModulesOptionsPage';
import InfoModulesWrapper from '../components/InfoModulesWrapper';
import LogoComponent from '../components/LogoComponent';
import { PersonaComponent } from '../components/PersonaComponent';
import WavesComponent from '../components/WavesComponent';
import ChatViewModel from '../viewModels/ChatViewModel';
import PersonaViewModel from '../viewModels/PersonaViewModel';
// import PaiperComponent from '../components/PaiperComponent';
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
        <PersonaComponent
          initialized={this.initialized}
          persona={this.persona}
          infoModules={this.chatViewModel.showInformationModule}
        />
        <WavesComponent />
        <ChatComponent infoModules={this.chatViewModel.showInformationModule} />
        {/* <PaiperComponent /> */}
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
