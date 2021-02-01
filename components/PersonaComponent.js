import { observer } from 'mobx-react';
import React from 'react';

@observer
export class PersonaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.persona = this.props.persona;
    this.state = {
      addPostionClass: false,
    };
  }

  updatePersonaPosition() {
    setTimeout(() => {
      this.setState({ addPostionClass: true });
      return this.props.initialized();
    }, 3000);
  }

  componentDidMount() {
    if (this.element) {
      this.loadPersona(this.element);
    } else {
      this.persona.dispose();
    }
    this.updatePersonaPosition();
  }

  loadPersona(element) {
    this.persona.run(element);
  }

  render() {
    // initial position
    let classNames = `persona-position-100 stamp`;

    // position after init
    if (this.state.addPostionClass && !this.props.infoModules) {
      classNames += ` move-to-top`;
    }

    // position for info modules
    if (this.state.addPostionClass && this.props.infoModules) {
      classNames = `persona-position-100 move-to-top-2 stamp`;
    }

    return <div id="persona" className={`${classNames}`} ref={this.element} />;
  }
}
