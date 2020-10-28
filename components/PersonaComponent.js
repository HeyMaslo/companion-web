import { observer } from 'mobx-react';
import React from 'react';
import { Persona } from '../dependencies/persona/web';
import { Colors } from '../pages/api/config/persona';

@observer
export class PersonaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.element = React.createRef();
        this.persona = null;
        this.state = {
            personaPosition: '100vh'
        }
    }

    componentDidMount() {
        if (this.element) {
            this.loadPersona();
        } else {
            this.persona.dispose();
        }
        setTimeout(() => {
            const interval = setInterval(() => {
                const current  = parseInt(this.state.personaPosition.replace('vh', ''), 10);
                const newPosition = current - 1;
                this.setState({ personaPosition: `${newPosition}vh` });
                this.persona.core.rotation = newPosition;
                if (current === 70) {
                    clearInterval(interval);
                    return this.props.initialized();
                }
            }, 10);
        }, 3000);
    }

    loadPersona() {
        this.persona = new Persona({
            element: this.element.current,
            size: 370,
            persona: {
                ringRes: 100,
                radius: 140,
                colors: Colors,
            },
            analytics: {
                appName: 'masloland',
                dataSource: 'DemoUI',
                ignoreMood: true,
            },
        });
        
        this.persona.run();
    }

    render() {
        return (
            <div id="persona" ref={this.element} style={{ height: this.state.personaPosition }} />
        )
    }
}
