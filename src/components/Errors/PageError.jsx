import React, { useContext } from 'react';
import { makePath } from '../../lib/Helpers';
import AppContext from '../App.context';

const PageError = ({path, error}) => {

  const appContext = useContext(AppContext);

  return (
    <div>
      <h1>Error loading page "{path}"</h1>
      <p>The error message is:</p>
      <pre><code>{error}</code></pre>
      <Link to={makePath(appContext.prefix, '/')}>Back to home</Link>
    </div>
  );
}
 
export default PageError;