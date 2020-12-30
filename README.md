# NISSA

Welcome to my repository!

![alt text](screenshot.png)



## Getting Started

Make sure you are running node v12.6!  Use nvm if you must.

Get the Persona

```bash
cd dependencies && git clone git@github.com:HeyMaslo/maslo-persona.git persona && cd persona && git fetch --all && git checkout colors-config && cd ../../
```

Install dependencies

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```


## Personalize your Companion 

- Set your browser in full screen and take a screenshot. Replace the file `screenshot.png`.

Change the color palette.
- Go to [c0bra.github.io/color-scheme-js](http://c0bra.github.io/color-scheme-js/) and create the palette of your choice.
- Go to `./viewModels/PersonaViewModel.js` and replace the followwing lines with your new parameters:
`
scheme
   .scheme('analogic')
   .distance(0.1)
   .add_complement(false)
   .variation('pastel')
   .web_safe(false);
 `
 - In the same file to change color distribution change the index values:  `s.setProperty('--oc2', '#' + colorpalette[ index ]);` 
 `
 s.setProperty('--oc1', '#' + colorpalette[0]);
    s.setProperty('--oc2', '#' + colorpalette[1]);
    s.setProperty('--oc3', '#' + colorpalette[2]);
    s.setProperty('--oc4', '#' + colorpalette[3]);
    s.setProperty('--oc5', '#' + colorpalette[4]);
    s.setProperty('--oc6', '#' + colorpalette[5]);
    s.setProperty('--oc7', '#' + colorpalette[6]);
    s.setProperty('--oc8', '#' + colorpalette[7]);
`