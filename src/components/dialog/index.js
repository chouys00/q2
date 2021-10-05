
import './dialog.scss'
import {useEffect} from 'react';
import { createPortal } from 'react-dom';

const Dialog = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);

  useEffect(()=>{
    return () => {
      document.body.removeChild(node);
    };
  },[])


  return createPortal(
      <div className="dialog_wrap">
        <div className="dialog" style={{width: props.dialogWidth}}>
          <div className="dialog_title">{props.title}</div>
          <div className="dialog_content">{props.children}</div>
          <div className="dialog_btns">
            <button onClick={props.handleLeftBtn}>取消</button>
            <button onClick={props.handleRightBtn}>确定</button>
          </div>
        </div>
      </div>
      ,node
  )
}

export default Dialog;