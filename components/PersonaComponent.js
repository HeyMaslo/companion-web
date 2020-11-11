import { observer } from 'mobx-react';
import React from 'react';
import { Persona } from '../dependencies/persona/web';
import { Colors } from '../pages/api/config/persona';
import PersonaViewModel from '../viewModels/PersonaViewModel';

@observer
export class PersonaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.persona = this.props.persona;
    this.state = {
      personaPosition: '100vh',
    };
  }

  componentDidMount() {
    if (this.element) {
      this.loadPersona(this.element);
    } else {
      this.persona.dispose();
    }
    setTimeout(() => {
      const interval = setInterval(() => {
        const current = parseInt(
          this.state.personaPosition.replace('vh', ''),
          10
        );
        const newPosition = current - 1;
        this.setState({ personaPosition: `${newPosition}vh` });
        if (current === 70) {
          clearInterval(interval);
          return this.props.initialized();
        }
      }, 10);
    }, 3000);
  }

  loadPersona(element) {
    this.persona.run(element);
  }

  render() {
    return (
      <div
        id="persona"
        ref={this.element}
        style={{ height: this.state.personaPosition }}
      />
    );
  }
}
