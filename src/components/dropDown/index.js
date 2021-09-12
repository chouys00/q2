import './dropDown.scss';
import {useState,useEffect,useRef} from 'react';
import { Link } from "react-router-dom"

const DropDown = ({listData, titleDom, open}) => {
  const [showMenu, setShowMenu] = useState(false);
  const wrapper=useRef("")


  useEffect(()=>{
      document.addEventListener('click', handleCloseMenu);
    return () => {
      window.removeEventListener('click', handleCloseMenu)
    }
  },[])

  const handleShowMenu = (e) => {
    e.preventDefault()
    setShowMenu(!showMenu)
  }

  const handleCloseMenu = (e) => {
    if(!wrapper.current) return
    if (!wrapper?.current.contains(e.target)) {
      setShowMenu(false)
    }
  }

  return (
      <div className="dropDown" ref={wrapper} onClick={handleShowMenu} >
        <div className="dropDown_title">
          {titleDom}
        </div>
        {

          showMenu&&<ul className={`dropDown_list ${!open&&'closeMode'}`} >
            {
              listData.map((item,key) => (
                  <li key={key} className="dropDown_list_item" >
                    <Link to={item.path}>{item.label}</Link>
                  </li>
              ))
            }
          </ul>
        }
      </div>
  );
};

export default DropDown;