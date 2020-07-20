import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makePath } from '../../lib/Helpers';
import AppContext from '../App.context';

const PageNotfound = ({path}) => {

  const appContext = useContext(AppContext);

  return (
    <div>
      <h1>File "{path}" not found</h1>
      <Link to={makePath(appContext.prefix, '/')}>Back to home</Link>
    </div>
  );
}
 
export default PageNotfound;