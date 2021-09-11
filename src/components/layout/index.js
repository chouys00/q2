import React, {useState} from 'react';
import "./Layout.scss"
import Header from "../header"
import SideBar from "../sideBar"

import {Link} from 'react-router-dom'


const Layout = (props) => {
  const { children } = props
  const [open,setOpen] = useState(false)

  return (
      <div className="wrapper">
        <Header setOpen={setOpen} open={open}></Header>
        <SideBar open = {open}></SideBar>
        {children}
      </div>
  )
}

export default Layout
