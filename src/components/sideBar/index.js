
import './sideBar.scss'
import React from 'react';
// import { CSSTransition } from 'react-transition-group'

const SideBar = ({open}) => {
  // let animationStyle = {
  //   width: open ? '250px':'50px'
  // }

  return (
      <div className={ open? 'sideBar':'sideBar sideBar-active'}>
        Sidebar
      </div>
  )
}

export default SideBar;