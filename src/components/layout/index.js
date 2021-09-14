import React, {useState} from 'react';
import "./Layout.scss"
import Header from "@Components/header"
import SideBar from "@Components/sideBar"

import {Link} from 'react-router-dom'


const Layout = (props) => {
  const { children } = props
  const [open,setOpen] = useState(true)

  return (
      <div className="layout">
        <Header setOpen={setOpen} open={open}/>
        <div className="wrapper">
          <SideBar open = {open}/>
          {children}
        </div>
      </div>
  )
}

export default Layout
