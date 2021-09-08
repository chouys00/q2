import './register.scss';
import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import verify from './verify.js';
// import alert from '../../common/components/alert/alert'
import eye from '../../assets/icon_eye.png';

const Index = () => {
  const [value, setValue] = useState({
    account: '',
    password: '',
    repassword: '',
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
    fetch('/api/register', {
      method: 'post',
      body: JSON.stringify({username: value.account, password: value.password}),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => {
      return res.json();
    }).then((res) => {
      if (res.success) {
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
      <div className="registerPage">

        <div className="registerForm">
          <h1>註冊</h1>

          {/*帳號*/}
          <div className="formItem">
            <div className="formItem_title">
              帳號
            </div>

            <input className={`formItem_input ${error?.account ?
                'formItem_input-error' :
                ''}`} type="text" name="account"
                   placeholder={'必須是信箱'}
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
                   placeholder={'4-8字元；首尾必須是英文；中間必須是數字'}
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

          {/*確認密碼*/}
          <div className="formItem">
            <div className="formItem_title">
              確認密碼
            </div>
            <input className={`formItem_input ${error?.repassword ?
                'formItem_input-error' :
                ''}`}
                   placeholder={'4-8字元；首尾必須是英文；中間必須是數字'}
                   type={showText ? 'text' : 'password'} name="repassword"
                   onChange={handleOnChange}>
            </input>
            <div className="formItem_eye" onClick={() => {
              setShowText(!showText);
            }}>
              <img src={eye}></img>
            </div>

          </div>
          <p className="verifyText">
            {error?.repassword && (<span>{error.repassword}</span>)}
          </p>


          <Link to="/login"><span>登入</span></Link>
          <div>
            <button className="formButton" onClick={handleSubmit}>註冊</button>
          </div>
        </div>

      </div>
  );

};

export default Index;