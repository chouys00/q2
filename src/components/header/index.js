
import './header.scss'
import React from 'react';
import { BiExit,BiMenu } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Header = ({setOpen,open}) => {
  const history = useHistory();
  
  const handleOpen = () => {
    setOpen(!open)
  }

  const handleLogout = () => {
    history.push('/login')
  }

  return (
      <div className='header'>
        <div className='header_left' onClick={handleOpen}>
          <span>LOGO </span>
          <BiMenu></BiMenu>
        </div>
        <div className='header_right'>
          <BiExit className="exit-logo" onClick={handleLogout}/>
        </div>
      </div>
  )
}

export default Header;