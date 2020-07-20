import React from 'react';

const MenuError = ({error}) => {
  return (
    <div>
      <h1>Error loading "menu.json" file</h1>
      <p>The error message is:</p>
      <pre><code>{error}</code></pre>
    </div>
  );
}
 
export default MenuError;