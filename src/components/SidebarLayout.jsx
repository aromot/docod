import React from 'react';

const SidebarLayout = ({children}) => {
  return (
    <div className="docod__sidebar-layout">
      {children}
    </div>
  )
}

SidebarLayout.mainContent = ({children}) => {
  return (
    <div className="docod__main-content">
      {children}
    </div>
  )
}

export default SidebarLayout