import './memberList.scss'
import ListItem from  './memberListItem.js'
import {useEffect,useState} from 'react';
import {getMember} from '@Api/member.js';


const MemberList = () => {
  const [memberData,setMemberData] = useState({})

  useEffect(()=>{
    getMemberData()
  },[])

  const getMemberData = async () => {

    const data = {
      page:0,
      size:10
    }

    await getMember(data)
        .then(res => {
          console.log(111111,res);
          setMemberData(res.data)
        })
        .catch(error => {
          console.log(222222,error);
        });
  }

  return (
      <div className="memberList">
        {/*<div className='box'>*/}
        <h1>會員管理(列表式)</h1>

          {
            memberData?.data?.content.map((item,index)=>
            {
              // console.log(7777777777,item);
              // console.log(88888888888,index);
              // return <div/>
              return <ListItem item={item} key={index} itemIdx={index}/>
            }
            )
          }
        {/*</div>*/}


      </div>
  );
};

export default MemberList;