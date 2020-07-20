import React, { useContext } from 'react';
import { makePath } from '../lib/Helpers';
import AppContext from './App.context';
import { Link } from 'react-router-dom';


const Group = ({group, prefix}) => {
  return (
    <div className="group">
      <div className="group-title">
        {group.label}
      </div>
      <ul>
        {group.children.map((item, i) => (
          <li key={i}>
            <Item item={item} prefix={prefix} />
          </li>
        ))}
      </ul>
    </div>
  )
};

const Item = ({item, prefix}) => {
  return (
    <Link to={makePath(prefix, item.path)}>{item.label}</Link>
  )
};


const Toc = ({contents}) => {

  const appContext = useContext(AppContext);

  return (
    <div className="docod__table-of-content">
      {contents.map((item,i) => {
        return (<Group key={i} group={item} prefix={appContext.prefix} />);
      })}
    </div>
  );
}
 
export default Toc;