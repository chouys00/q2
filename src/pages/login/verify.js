const verify = (value) => {
  let errorObj = {};

  if (!value.account) {
    errorObj.account = '請輸入帳號';
  }

  if (!value.password) {
    errorObj.password = '請輸入密碼';
  }

  return errorObj;

};

export default verify;