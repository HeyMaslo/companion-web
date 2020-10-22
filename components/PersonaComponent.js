import React from 'react';
import { Persona } from '../dependencies/persona/web';
import { Colors } from '../pages/api/config/persona';
import * as THREE from 'three';

export class PersonaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.element = React.createRef();
        this.persona = null;
    }

    componentDidMount() {
        if (this.element) {
            this.loadPersona();
        } else {
            this.persona.dispose();
        }
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
            <div id="persona" ref={this.element} />
        )
    }
}

