# Getting Started

## General

Make sure you have nodejs v12.6 installed.

## Maslo Persona setup

Run the command below to download the package

```bash
cd dependencies && git clone git@github.com:HeyMaslo/maslo-persona.git persona && cd persona && git fetch --all && git checkout colors-config && cd ../../
```

## Dependencies setup

```bash
yarn install
```

## Development server

```bash
yarn dev
```

open `http://localhost:3000` on browser


# StoryMapr association

Open the file `next.config.js` and change the `env.DTR_ID` with the Storymapr tree you would like to integrate on comapnion web.

If you want to test others tree on the fly just add the param `dtreeId={tree id}` on url, like `http://localhost:3000/?dtreeId=5faeef6bc860c23e30275e36`.

# Deployment

You should have a firebase project and a hosting set up previously.

## Configuration file

open the file `.firebaserc` and do the needed changes following the example below.

replace `<project name>` with the project name and `<hosting name>` with the host name

```json
{
  "projects": {
    "default": "<project name>"
  },
  "targets": {
    "<project name>": {
      "hosting": {
        "companion-web-stage": [
          "<hosting name>"
        ]
      }
    }
  }
}
```

do the same process on the file `firebase.json`

```json
{
    "hosting": [
        {
            "target": "companion-web-stage",
            "site": "<hosting name>",
            "public": "./out",
            "rewrites": [
                {
                  "source": "**/**",
                  "function": "nextjs-server"
                }
            ]
        }
    ]
}
```

## Deploy

make sure you have firebase-tools instaled.

run the following commands

```bash
yarn build
```

```bash
yarn export
```

```bash
firebase deploy --only hosting:companion-web-stage
```



