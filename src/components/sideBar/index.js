import './sideBar.scss';
import {useState} from 'react';
import DropDown from '../dropDown';
import Menu from '../menu';
import {AiOutlineUser, AiOutlineCaretDown, AiOutlineTeam,AiOutlineComment,AiOutlineDribbble } from 'react-icons/ai';

const SideBar = ({open}) => {

  const manageList = [
    {
      label: '帳戶設定1',
      value: 1,
      path: '/account/profile-setting',
    },
    {
      label: '帳戶設定2',
      value: 2,
      path: '/login',
    },
  ];

  const menuList = [
    {
      id: '1',
      name: '會員管理',
      path:'/login',
      icon: <AiOutlineTeam/>
    },
    {
      id: '2',
      name: '狗狗管理',
      icon: <AiOutlineComment/>,
      children: [
          {
            id: '2.1',
            name: '汪汪',
            path:'/login',
            icon: <AiOutlineDribbble/>
          }
      ]
    },
    {
      id: '3',
      name: '貓貓管理',
      key: '/charts',
      icon: <AiOutlineTeam/>,
      children: [
        {
          id: '3.1',
          name: '喵喵',
          path:'/login',
          icon: <AiOutlineDribbble/>
        },
        {
          id: '3.2',
          name: '吼吼',
          path:'/login',
          icon: <AiOutlineDribbble/>
        },
        {
          id: '3.3',
          name: '嘶嘶叫',
          path:'/register',
          icon: <AiOutlineComment/>
        },
      ]
    },
  ]




  return (
      <div className={open ? 'sideBar' : 'sideBar sideBar-active'}>
        <div className="userWrap">
          <DropDown listData={manageList} open={open} titleDom={
            (
                open ?
                    <>
                      <AiOutlineUser className="aiOutlineUser"/>
                      <span>個人資訊管理</span>
                      <AiOutlineCaretDown/>
                    </> :
                    <AiOutlineUser className="aiOutlineUser"/>
            )
          }/>
        </div>
        <div className="menuWrap">
          <Menu
              list={menuList}
              open={open}
          />
        </div>
      </div>
  );
};

export default SideBar;