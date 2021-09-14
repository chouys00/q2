
import './profileSetting.scss'
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import Upload from '@Components/upload'

const ProfileSetting = () => {
  const [user,setUser] = useState({name:'',username:'',imgLink:''})
  const history = useHistory()

  useEffect(()=>{
    if(localStorage.getItem('user')===null){
      alert('權限還沒做不准偷吃步!!  乖乖登入!!!')
      history.replace('/login')
      return
    }
    const userData = JSON.parse(localStorage.getItem('user'));

    setUser(
        {
          name:userData.name,
          username:userData.username,
          imgLink:userData.imgLink,
        }
    )
  },[])


  return (
      <div className='profileSetting'>
        <h1 className='profileSetting_title'>帳戶設定</h1>
        <Upload imgLink={user.imgLink}>
          <h2>{`${user.name}(${user.username})`}</h2>
        </Upload>
      </div>
  )
}

export default ProfileSetting;