# DocoD
Get notes/pages published quickly.

## Installation

Installing DocoD will remove all sources. Do the following:
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
    "label": "Fruits",
    "children": [
      {
        "path": "/pages/pommes.html",
        "label": "Pommes"
      }
    ]
  }
]
```