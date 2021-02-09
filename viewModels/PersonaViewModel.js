import { computed, observable } from 'mobx';
import { Persona } from '../dependencies/persona/web';
import ColorScheme from 'color-scheme'

var scheme = new ColorScheme();
scheme
  .from_hue(0)
  .scheme('analogic') 
  .variation('hard')
  .distance(0)
  .web_safe(true);

export var colorpalette = scheme.colors();

colorpalette[0] = '404040';
colorpalette[1] = '9F9F9F';
colorpalette[2] = 'E0E0E0';
colorpalette[3] = 'FEFAD7';
colorpalette[4] = 'FFF341';
colorpalette[5] = 'F6DE0C';
colorpalette[6] = 'D3AD10';
colorpalette[7] = 'F9D74D';

updatetheme();
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function updatetheme() {
  if (typeof window !== 'undefined') {
    var s = window.document.documentElement.style;
    s.setProperty('--oc1', '#' + colorpalette[0]);
    s.setProperty('--oc2', '#' + colorpalette[6]);
    s.setProperty('--oc3', '#' + colorpalette[2]);
    s.setProperty('--oc4', '#' + colorpalette[3]);
    s.setProperty('--oc5', '#' + colorpalette[0]);
    s.setProperty('--oc6', '#' + colorpalette[5]);
    s.setProperty('--oc7', '#' + colorpalette[6]); 
    s.setProperty('--oc8', '#' + colorpalette[7]);
  } else {
    setTimeout(function () {
      updatetheme();
    }, 100);
  }
}

//document.documentElement.style.setProperty("--color-surface", "red");

export class PersonaViewModel {
  @observable _persona = null;

  run(element) {
    this._persona = new Persona({
      element: element.current,
      size: 500,
      persona: {
        ringRes: 100,
        radius: 180,
        colors: colorpalette,
      },
      analytics: {
        appName: 'masloland',
        dataSource: 'DemoUI',
        ignoreMood: true,
      },
    });
    this._persona.run();
  }

  @computed
  get persona() {
    return this._persona;
  }
}

const instance = new PersonaViewModel();

export default instance;
