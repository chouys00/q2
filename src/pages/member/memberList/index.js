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
        <h1>會員管理(列表式)</h1>

          {
            memberData?.data?.content.map((item,index)=>
            {
              return <ListItem item={item} key={index} itemIdx={index}/>
            }
            )
          }


      </div>
  );
};

export default MemberList;