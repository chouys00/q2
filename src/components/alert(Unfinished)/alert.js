import './alert.scss';
import React from 'react';
import { Link } from "react-router-dom"
import success from '../../assets/icon_success.png'

const Alert = () => {

  const open = () =>{
    console.log('aaa');
  }


  return (
      <div className='alert'>
        登入成功
        {/*<img src={success}/>*/}
      </div>
  );

};

export default Alert;