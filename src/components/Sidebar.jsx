import React, { useContext } from 'react';
import Config from '../lib/Config';
import Toc from './Toc';
import { Link } from 'react-router-dom';
import { makePath } from '../lib/Helpers';
import AppContext from './App.context';

const Sidebar = ({menu}) => {

  const appContext = useContext(AppContext);

  const cfg = Config.get().sidebar;
  const customStyle = {
    backgroundColor: cfg.backgroundColor,
    width: cfg.width
  };

  const clx = ["docod__sidebar"];
  cfg.isTopTitleFixed && clx.push('fixed-title');

  return (
    <aside className={clx.join(' ')} style={customStyle}>
      {cfg.showTopTitle && 
        <div className="top-title">
          <Link to={makePath(appContext.prefix, '/')}>{Config.interpolateString(cfg.topTitle)}</Link>
        </div>
      }
      <div className="toc-container">
        <Toc contents={menu} />
      </div>
    </aside>
  );
}
 
export default Sidebar;