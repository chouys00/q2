import './login.scss';
import React, {useEffect, useState} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import verify from './verify.js';
import {userLogIn} from '@Api/user.js';
// import alert from '../../common/components/alert/alert'

import Dialog from '../../components/dialog';
// import  Dialog from  '@Components/dailog'
import eye from '../../assets/icon_eye.png';

const Index = () => {
  const [value, setValue] = useState({
    account: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [showText, setShowText] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

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

  const submitFormData = async () => {

    const data = {username: value.account, password: value.password};

    await userLogIn(data)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.data));
          console.log('7788');
          history.push('./home');
        })
        .catch(error => {
          console.log(error);
        });
  };

  useEffect(() => {
    //無搜集到 error 訊息且 正在送出訊息
    if (Object.keys(error).length === 0 && isSubmit) {
      submitFormData();
    }
  }, [error]);

  const handleRightBtn = () => {
    console.log(1111111111, 'handleRightBtn');
    setShowDialog(false);
  };

  const handleLeftBtn = () => {
    console.log(11111111111, 'handleLeftBtn');
    setShowDialog(false);
  };

  const toggleDialog = () => {
    // console.log(777888,'handleRightBtn');
    setShowDialog(true);
  };

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
            <button onClick={toggleDialog}>召喚彈窗</button>
          </div>
        </div>

        {
          showDialog && <Dialog
              title="这是标题"
              dialogWidth="60%"
              handleLeftBtn={handleLeftBtn}
              handleRightBtn={handleRightBtn}
              cancelText="残忍离开"
              sureText="我再想想">
            <>
              <span>去去武器走</span>
            </>
          </Dialog>
        }

      </div>
  );

};

export default Index;