import { computed, observable } from 'mobx';
import { Persona } from '../dependencies/persona/web';

//import { Colors } from '../pages/api/config/persona';

////http://c0bra.github.io/color-scheme-js/
var ColorScheme = require('color-scheme');

var scheme = new ColorScheme();
scheme
  .from_hue(getRandomInt(360)) // Start the scheme
  .scheme('contrast') // Use the 'triade' scheme, that is, colors
  // selected from 3 points equidistant around
  // the color wheel.
  .variation('soft'); // default pastel soft light hard pale

export var colorpalette = scheme.colors();
//document.documentElement.style.setProperty('$orb1', '#333333');
updatetheme();
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function updatetheme() {
  if (typeof window !== 'undefined') {
    var s = window.document.documentElement.style;
    s.setProperty('--oc1', '#' + colorpalette[colorpalette.length - 1]);
    s.setProperty('--oc2', '#' + colorpalette[colorpalette.length - 2]);
    s.setProperty('--oc3', '#' + colorpalette[colorpalette.length - 3]);
    s.setProperty('--oc4', '#' + colorpalette[colorpalette.length - 4]);
    s.setProperty('--oc5', '#' + colorpalette[colorpalette.length - 5]);
    s.setProperty('--oc6', '#' + colorpalette[colorpalette.length - 6]);
    s.setProperty('--oc7', '#' + colorpalette[colorpalette.length - 7]);
    s.setProperty('--oc8', '#' + colorpalette[colorpalette.length - 8]);
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
