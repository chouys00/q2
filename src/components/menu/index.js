import './menu.scss';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { BiCaretDown } from "react-icons/bi";

const Menu = ({list,open,isChild=false}) => {
  const [select, setSelect] = useState('');

  const handleClick = ((id, e) => {
    e.preventDefault();
    setSelect(id);
  });


  return (
      <ul className='menuGroup'>
        {list.map((item) => (
            <li key={item.id}

                className={`menuItem ${item.id === select ? 'selected' : ''}`}>
              {item.children && item.children.length > 0 ? (
                      <>
                        <div className="menuItem_content">
                          {item.icon}
                          <span onClick={handleClick.bind(null, item.id)} className={!open?"closeMode":""}>
                            {item.name}
                          </span>
                          <BiCaretDown className='arrow'/>
                        </div>
                        <Menu
                            list={item.children}
                            open={open}
                            isChild={true}
                        />
                      </>
                  ) :
                    <Link className="menuItem_content" to={item.path}>
                      {item.icon}
                      <span className={!open?"closeMode":""}>{item.name}</span>
                    </Link>
              }
            </li>
        ))}
      </ul>
  );
};
export default Menu;