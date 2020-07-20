import React from 'react';
import Config from '../lib/Config';
import Toc from './Toc';

const Homepage = ({menu}) => {
  return (
    <div className="docod__homepage">
      <h1>{Config.interpolateString(Config.get().title)}</h1>
      <div className="toc">
        <Toc contents={menu} />
      </div>
    </div>
  );
}
 
export default Homepage;