import './login.scss';
import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import verify from './verify.js';
// import alert from '../../common/components/alert/alert'

import {useHistory} from 'react-router-dom';
import eye from '../../assets/icon_eye.png';

const Index = () => {
  const [value, setValue] = useState({
    account: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [showText, setShowText] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();

  const handleOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setError(verify(value));
    setIsSubmit(true);
  };

  const submitFormData = () => {

    fetch('/api/login', {
      method: 'post',
      body: JSON.stringify({username: value.account, password: value.password}),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
        .then(res => res.json())
        .then((res) => {
          if (res.success) {
            sessionStorage.setItem('token', res.token);
            alert(res.message);
            history.push('/home');
          } else {
            alert(res.message);
          }
        }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    //無搜集到 error 訊息且 正在送出訊息
    if (Object.keys(error).length === 0 && isSubmit) {
      submitFormData();
    }
  }, [error]);

  return (
      <div className="loginPage">
        <div className="loginForm">
          <h1>登入</h1>

          {/*帳號*/}
          <div className="formItem">
            <div className="formItem_title">
              帳號
            </div>

            <input className={`formItem_input ${error?.account ?
                'formItem_input-error' :
                ''}`} type="text" name="account"
                   onChange={handleOnChange}>
            </input>

          </div>
          <p className="verifyText">
            {error?.account && (<span>{error.account}</span>)}
          </p>

          {/*密碼*/}
          <div className="formItem">
            <div className="formItem_title">
              密碼
            </div>
            <input className={`formItem_input ${error?.password ?
                'formItem_input-error' :
                ''}`}
                   type={showText ? 'text' : 'password'} name="password"
                   onChange={handleOnChange}>
            </input>
            <div className="formItem_eye" onClick={() => {
              setShowText(!showText);
            }}>
              <img src={eye}></img>
            </div>

          </div>
          <p className="verifyText">
            {error?.password && (<span>{error.password}</span>)}
          </p>
          <Link to="/register"><span>註冊</span></Link>
          <div>
            <button className="formButton" onClick={handleSubmit}>登入</button>
          </div>
        </div>

      </div>
  );

};

export default Index;