
import './dialog.scss'
import {useEffect} from 'react';
import { createPortal } from 'react-dom';

const Dialog = ({dialogWidth='60%',title,children,handleLeftBtn,handleRightBtn}) => {
  const node = document.createElement('div');
  document.body.appendChild(node);

  useEffect(()=>{
    return () => {
      document.body.removeChild(node);
    };
  },[])


  return createPortal(
      <div className="dialog_wrap">
        <div className="dialog" style={{width: dialogWidth}}>
          <div className="dialog_title">{title}</div>
          <div className="dialog_content">{children}</div>
          <div className="dialog_btns">
            <button onClick={handleLeftBtn}>取消</button>
            <button onClick={handleRightBtn}>确定</button>
          </div>
        </div>
      </div>
      ,node
  )
}

export default Dialog;