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
import messageFromChatInput from '../components/ChatInputComponent';
import AccessViewModel from '../viewModels/accessViewModel';
import LoginFormComponent from '../components/LoginFormComponent';
import SignupFormComponent from '../components/SignupFormComponent';
import ResetPasswordFormComponent from '../components/ResetPasswordFormComponent';
import firebase from '../firebase/index';


	import ReactGA from 'react-ga';
const trackingId = "G-PN3TWVQF8G"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);



@observer
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayChat: false,
    };

    this.persona = PersonaViewModel;

    this.chatViewModel = ChatViewModel;
    this.access = AccessViewModel;
    this.chatViewModel.persona = this.persona;
  }

  componentDidMount() {
    firebase.bootstrap();
    this.access.bootstrap();
	ReactGA.pageview(window.location.pathname + window.location.search);

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
        {this.access.logged ? (
          <>
            <PersonaComponent
              initialized={this.initialized}
              persona={this.persona}
              infoModules={this.chatViewModel.showInformationModule}
            />
            <WavesComponent />
            <ChatComponent
              infoModules={this.chatViewModel.showInformationModule}
            />
            <PaiperComponent messageFromPaiper={messageFromChatInput} />
            {this.chatViewModel.showInformationModule && (
              <InfoModulesWrapper
                submodule={this.chatViewModel.submoduleSelected}>
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
          </>
        ) : (
          <>
            {this.access.mode === 'login' && <LoginFormComponent />}
            {this.access.mode === 'signup' && <SignupFormComponent />}
            {this.access.mode === 'resetpassword' && (
              <ResetPasswordFormComponent />
            )}
          </>
        )}
      </div>
    );
  }
}

export default Home;
