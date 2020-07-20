import React, { useState, useEffect } from 'react';
import "normalize.css";
import "./App.less";
import Sidebar from './Sidebar';
import SidebarLayout from './SidebarLayout';
import Loader from './Loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page from './Page';
import Config from '../lib/Config';
import Menu from '../lib/Menu';
import ConfigNotFound from './Errors/ConfigNotFound';
import ConfigError from './Errors/ConfigError';
import MenuNotFound from './Errors/MenuNotFound';
import MenuError from './Errors/MenuError';
import AppContext from './App.context';
import { makePath } from '../lib/Helpers';
import Homepage from './Homepage';


const App = ({prefix}) => {

  const [state, setState] = useState({
    menu: null,
    errorType: null,
    error: null
  });

  useEffect(() => {

    let errorType, error;

    fetch('config.json')
    .then(r => {
      if(r.status === 404) {
        errorType = 'config';
        error = 'file_not_found';
        setState({...state, errorType, error});
      } else {
        return r.json()
      }
    })
    .catch(_error => {
      errorType = 'config';
      error = _error;
      setState({...state, errorType, error});
    })
    .then(json => {

      if(error)
        return;

      Config.init(json);

      fetch('menu.json')
      .then(r => {
        if(r.status === 404) {
          errorType = 'menu';
          error = 'file_not_found';
          setState({...state, errorType, error});
        } else {
          return r.json()
        }
      })
      .catch(_error => {
        errorType = 'menu';
        error = _error;
        setState({...state, errorType, error});
      })
      .then(menu => {
        if(error)
          return;
        setState({...state, menu});
      });
    })
  }, []);

  const {menu, errorType, error} = state;
  console.log('state:', state);

  if(errorType === 'config') {
    if(error === 'file_not_found')
      return <ConfigNotFound />
    else
      return <ConfigError error={''+error} />
  }

  if(errorType === 'menu') {
    if(error === 'file_not_found')
      return <MenuNotFound />
    else
      return <MenuError error={''+error} />
  }

  if( ! menu)
    return <Loader />

  const menuItems = Menu.parse(menu);
  const {homepage} = Config.get();

  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={{prefix}}>
        <SidebarLayout>
          <Sidebar menu={menu} />
            <SidebarLayout.mainContent>
              <Switch>
                {menuItems.map((item, i) => {
                  const path = makePath(prefix, item.path);
                  return (
                    <Route key={i} path={path}>
                      <Page path={path} />
                    </Route>
                  )
                })}
                <Route>
                  {homepage ? 
                    <Page path={makePath(prefix, homepage)} />:  
                    <Homepage menu={menu} />
                  }
                </Route>
              </Switch>
            </SidebarLayout.mainContent>
        </SidebarLayout>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
}
 
export default App;