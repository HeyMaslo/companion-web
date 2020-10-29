import { computed, observable } from 'mobx';
import { Persona } from '../dependencies/persona/web';
import { Colors } from '../pages/api/config/persona';

export class PersonaViewModel {
  @observable _persona = null;

  run(element) {
    this._persona = new Persona({
      element: element.current,
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
    })
    this._persona.run();
  }

  @computed
  get persona() { return this._persona; };
}

const instance = new PersonaViewModel();

export default instance;
