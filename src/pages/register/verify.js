const verify = (value) => {
  let errorObj = {};

  /*帳號
  必須為信箱
  */
  if (!value.account) {
    errorObj.account = '請輸入帳號';
  }
  const email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(value.account && !email.test(value.account)){
    errorObj.account = '信箱格式錯誤';
  }

  /*密碼
  4-8字元；首尾必須是英文；中間必須是數字
  */

  if (!value.password) {
    errorObj.password = '請輸入密碼';
  }
  const passwordRules = /^[A-z]\d{2,6}[A-z]$/
  if(value.password && !passwordRules.test(value.password)){
    errorObj.password = '密碼格式錯誤';
  }


  /*密碼確認
  與 "密碼相同"
  */
  if(value.repassword !== value.password){
    errorObj.repassword = '與密碼不同';
  }


  return errorObj;
};

export default verify;