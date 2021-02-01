import { computed, observable } from 'mobx';
import { Persona } from '../dependencies/persona/web';

//import { Colors } from '../pages/api/config/persona';

////http://c0bra.github.io/color-scheme-js/
var ColorScheme = require('color-scheme');
var scheme = new ColorScheme();
scheme
  .from_hue(260)
  .scheme('contrast') 
  .variation('hard')
  .distance(0)
  .web_safe(true);

export var colorpalette = scheme.colors();
//duplicate on a temporary array of color to reorganize the color palette
var temp = colorpalette;


colorpalette[0] = '8900FF';
colorpalette[1] = 'FF00EE';
colorpalette[2] = 'FF00AE';
colorpalette[3] = 'FF0067';
colorpalette[4] = 'FF3700';
colorpalette[5] = 'FF7700';
colorpalette[6] = 'F1FC15';
colorpalette[7] = 'FFFFFF';//top
colorpalette.reverse();
updatetheme();
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function updatetheme() {
  if (typeof window !== 'undefined') {
    var s = window.document.documentElement.style;
    s.setProperty('--oc1', '#' + colorpalette[7]); //maslo bubbles
    s.setProperty('--oc2', '#' + colorpalette[1]); // highlights
    s.setProperty('--oc3', '#' + '8900FF');
    s.setProperty('--oc4', '#' + colorpalette[3]);
    s.setProperty('--oc5', '#' + colorpalette[4]);
    s.setProperty('--oc6', '#' + colorpalette[5]);
    s.setProperty('--oc7', '#' + colorpalette[6]); 
    s.setProperty('--oc8', '#' + colorpalette[0]);
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
        ringRes: 80,
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
