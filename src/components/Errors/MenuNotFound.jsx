import React from 'react';

const MenuNotFound = () => {
  return (
    <div>
      <h1>File "menu.json" not found</h1>
      <p>
        You must have a "menu.json" file in the root directory of the application.
      </p>
      <p>
        This is a "menu.json" example:
      </p>
      <pre><code>{`[
  {
    "label": "Fruits",
    "children": [
      {
        "path": "/pages/pommes.html",
        "label": "Pommes"
      }
    ]
  }
]`}</code></pre>
    </div>
  )
}

export default MenuNotFound;
