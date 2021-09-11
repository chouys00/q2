
import './header.scss'
import React from 'react';
import { BiExit,BiMenu } from "react-icons/bi";

const Header = ({setOpen,open}) => {
  
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
      <div className='header'>
        <div className='header_left' onClick={handleOpen}>
          <span>LOGO </span>
          <BiMenu></BiMenu>
        </div>
        <div className='header_right'>
          <BiExit className="exit-logo" />
        </div>
      </div>
  )
}

export default Header;