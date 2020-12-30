import { computed, observable } from 'mobx';
import { Persona } from '../dependencies/persona/web';

//import { Colors } from '../pages/api/config/persona';

////http://c0bra.github.io/color-scheme-js/
var ColorScheme = require('color-scheme');
var scheme = new ColorScheme();
scheme
  .from_hue(0)
  .scheme('analogic') 
  .variation('hard')
  .distance(0)
  .web_safe(true);

export var colorpalette = scheme.colors();
//duplicate on a temporary array of color to reorganize the color palette
var temp = colorpalette;
//colorpalette.reverse();
colorpalette[5] = temp[3];
colorpalette[3] = temp[0];
colorpalette[2] = temp[1];
colorpalette[1] = '4a0000';
colorpalette[0] = '262626';
colorpalette[7] = '262626';

updatetheme();
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function updatetheme() {
  if (typeof window !== 'undefined') {
    var s = window.document.documentElement.style;
    s.setProperty('--oc1', '#' + colorpalette[0]); //maslo bubbles
    s.setProperty('--oc2', '#' + colorpalette[6]); // highlights
    s.setProperty('--oc3', '#' + colorpalette[2]);
    s.setProperty('--oc4', '#' + colorpalette[3]);
    s.setProperty('--oc5', '#' + colorpalette[4]);
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
