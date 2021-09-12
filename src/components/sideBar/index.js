
import './sideBar.scss'
import React from 'react';
// import { CSSTransition } from 'react-transition-group'
import DropDown from '../dropDown'
import { AiOutlineUser,AiOutlineCaretDown,AiOutlineTeam } from "react-icons/ai";

const SideBar = ({open}) => {

  const listData = [
    {
      label: "帳戶設定1",
      value: 1,
      path:'/account/profile-setting'
    },
    {
      label: "帳戶設定2",
      value: 2,
      path:'/login'
    },
  ]


  return (
      <div className={ open? 'sideBar':'sideBar sideBar-active'}>
        <div className='userSection'>
          <DropDown listData={listData} titleDom={
            (
                <>
                  <AiOutlineUser className='aiOutlineUser'/>
                  <span>個人資訊管理</span>
                  <AiOutlineCaretDown/>
                </>
            )
          } />
        </div >
        <div className='menuSection'>

        </div>
      </div>
  )
}

export default SideBar;