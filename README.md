# docod
Get notes/pages published quickly.

## Installation

Copy/paste the files from the `dist` directory.

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