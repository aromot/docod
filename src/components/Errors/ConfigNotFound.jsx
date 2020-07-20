import React from 'react';

const ConfigNotFound = () => {
  return (
    <div>
      <h1>File "config.json" not found</h1>
      <p>
        You must have a "config.json" file in the root directory of the application.
      </p>
      <p>
        This is a "config.json" example:
      </p>
      <pre><code>{`{
  "title": "My DocoD App",
  "sidebar": {
    "backgroundColor": "#eeeeee",
    "width": "200px"
  }
}`}</code></pre>
    </div>
  )
}

export default ConfigNotFound;
