import React from 'react';

const ConfigError = ({error}) => {
  return (
    <div>
      <h1>Error loading "config.json" file</h1>
      <p>The error message is:</p>
      <pre><code>{error}</code></pre>
    </div>
  );
}
 
export default ConfigError;