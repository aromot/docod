# DocoD
Get notes/pages published quickly.

## Quick view

To get a quick view of the result, do :
```
npx serve dist
```
This will keep the source files. You just get a view of the build from the `dist` directory.

## Installation

Installing DocoD will remove all sources, NO UNDO POSSIBLE (you will have to clone this repo again). Do the following:
```
npm install --only=prod
npm run compiled_only
```
This will turn the current project directory into a production-ready app, i.e.:

- remove everything but the `dist` directory,
- copy the `dist` directory contents into the current directory,
- remove the `dist` directory.

## Usage

2 files are required:
- config.json,
- menu.json.

Both files must be in the root folder.

### config.json

`config.json` must be in the root folder.

This is a sample of the `config.json` file:

```json
{
  "appName": "My DocoD App",
  "title": "[appName]",
  "homepage": false,
  "sidebar": {
    "showTopTitle": true,
    "isTopTitleFixed": true,
    "topTitle": "- [appName] -",
    "backgroundColor": "#eeeeee",
    "width": "200px"
  }
}
```

### menu.json

`menu.json` must be in the root folder.

This is a sample of the `menu.json` file:


```json
[
  {
    "label": "Fruitz",
    "children": [
      {
        "path": "/pages/pommes.html",
        "label": "Pommes"
      }
    ]
  }
]
```

All `path`s are called the "no cache" way (i.e with the current timestamp to avoid caching). You can add a `cache` key to change this behavious like so:

```json
[
  {
    "label": "Fruits",
    "children": [
      {
        "path": "/pages/pommes.html",
        "label": "Pommes",
        "cache": true
      }
    ]
  }
]
```